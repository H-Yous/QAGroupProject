import React, { Component } from "react";
import styled from "@emotion/styled";
import Select from "react-select";
import axios from "axios";

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
    fontSize: 16,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
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
class SearchBar extends Component {
  state = {
    selectedOption: null,
    upcomingMovieTitles: [],
    nowShowingMovieTitles: [],
    newReleasesMovieTitles: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/api/getUpcomingMovies").then(result => {
      var row = new Array();
      for (var i = 0; i < result.data.length; i++) {
        this.state.upcomingMovieTitles.push({
          value: result.data[i].title.toLowerCase,
          label: result.data[i].title
        });
      }
    });
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.nowShowingMovieTitles.push(result.data[i].title);
      }
    });
    axios.get("http://localhost:8080/api/getNewReleasedMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.newReleasesMovieTitles.push(result.data[i].title);
      }
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption, upcomingMovieTitles } = this.state;
    return (
      <StyledSearch>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={upcomingMovieTitles}
          styles={customStyles}
          placeholder="Search for movies..."
          autosize={false}
          openMenuOnClick={false}
          components={{ DropdownIndicator: () => null }}
        />
      </StyledSearch>
    );
  }
}

export default SearchBar;
