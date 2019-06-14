import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

var ValidatedComponent = (ComposedComponent) => {

  ComposedComponent.contextTypes = ComposedComponent.contextTypes || {};
  ComposedComponent.contextTypes.isComponentValid = PropTypes.func;
  ComposedComponent.contextTypes.getValidationMessages = PropTypes.func;

  class ValidatedComponent extends React.Component {
    constructor() {
      super();
      this.validators = [];
    }

    getChildContext() {
      return {
        isComponentValid: this.isValid.bind(this),
        getValidationMessages: this.getValidationMessages.bind(this),
        registerValidator: this.onRegisterValidator.bind(this),
        unregisterValidator: this.onUnregisterValidator.bind(this)
      };
    }

    onRegisterValidator(validator) {
      this.validators.push(validator);
    }

    onUnregisterValidator(owner) {
      _.remove(this.validators, {owner});
    }

    isValid() {
      var isValid = true;
      this.validators.forEach(v => {
        v.owner.validate();
        isValid = isValid && v.owner.isValid();
      });
      return isValid;
    }

    getValidationMessages() {
      var results = [];
      this.validators.forEach(v => {
        var message = v.owner.getValidationMessage();
        if (message) {
          results.push(message);
        }
      });

      return results;
    }

    render() {
      return <ComposedComponent ref="composedComponent" {...this.props}/>;
    }
  }

  ValidatedComponent.childContextTypes = {
    isComponentValid: PropTypes.func.isRequired,
    getValidationMessages: PropTypes.func.isRequired,
    registerValidator: PropTypes.func.isRequired,
    unregisterValidator: PropTypes.func.isRequired
  };

  ValidatedComponent.displayName = 'ValidatedComponent';

  return ValidatedComponent;
};

export default ValidatedComponent;