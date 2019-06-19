import React, { Component } from "react";
import styled from "@emotion/styled";
import Select from "react-select";
import axios from "axios";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { createHashHistory } from "history";

const StyledSearch = styled.div`
  width: 300px;
  padding: 1px;
  .select__menu-list::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  .select__menu-list::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .select__menu-list::-webkit-scrollbar-thumb {
    background: #888;
  }
  .select__menu-list::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const customStyles = {
  control: (base, state) => ({
    ...base,
    fontSize: 14,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    backgroundColor: "lightgray",
    cursor: "text",
    borderRadius: 0,
    borderBottom: "solid 1px"
  }),

  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused ? "white" : "white",
      color: isFocused ? "rgba(65, 147, 230)" : "black",
      lineHeight: 2
    };
  },

  input: styles => ({
    ...styles,
    color: "black"
  }),

  menu: styles => ({
    ...styles,
    marginTop: 0,
    boxShadow: "none",
    borderRadius: 0
  }),

  singleValue: styles => ({
    ...styles,
    color: "rgba(65, 147, 230)"
  })
};

const history = createHashHistory();

class SearchBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      movieTitles: [],
      nowShowingMovieTitles: [],
      newReleasesMovieTitles: [],
      placeholder: "Search for movies..."
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.movieTitles.push({
          value: result.data[i].title.toLowerCase,
          label: result.data[i].title,
          collection: "nowShowing",
          optionPath: "/nowShowingInfo"
        });
      }
    });
    axios.get("http://localhost:8080/api/getNewReleasedMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.movieTitles.push({
          value: result.data[i].title.toLowerCase,
          label: result.data[i].title,
          collection: "newReleases",
          optionPath: "/newReleasesInfo"
        });
      }
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    if (selectedOption.optionPath === "/nowShowingInfo") {
      this.props.history.push("/nowShowingInfo/" + selectedOption.label);
    } else if (selectedOption.optionPath === "/newReleasesInfo") {
      this.props.history.push("/newReleasesInfo/" + selectedOption.label);
    }
    const submitState = this.state;
    this.setState(submitState);
  };

  render() {
    const { selectedOption, movieTitles } = this.state;
    return (
      <StyledSearch>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={movieTitles}
          styles={customStyles}
          placeholder="Search for movies..."
          autosize={false}
          openMenuOnClick={false}
          placeholder={this.state.placeholder}
          components={{ DropdownIndicator: () => null }}
        />
      </StyledSearch>
    );
  }
}

export default withRouter(SearchBar);
