import React, { Component } from "react";
import styled from "@emotion/styled";
import Select from "react-select";
import axios from "axios";

const StyledSearch = styled.div`
  width: 300px;
  padding: 1px;
`;

const customStyles = {
  control: (base, state) => ({
    ...base,
    fontFamily: "Times New Roman",
    fontSize: 18,
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
      color: isFocused ? "rgba(255, 80, 86)" : "black",
      lineHeight: 2
    };
  },

  input: styles => ({
    ...styles,
    color: "black",
    fontFamily: "Times New Roman, Times, Serif"
  }),

  menu: styles => ({
    ...styles,
    marginTop: 0,
    boxShadow: "none",
    borderRadius: 0
  }),

  singleValue: styles => ({
    ...styles,
    color: "rgba(255, 80, 86)"
  })
};
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      upcomingMovieTitles: [],
      nowShowingMovieTitles: [],
      newReleasesMovieTitles: []
    };
  }
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
          placeholder="Search..."
          autosize={false}
          openMenuOnClick={false}
        />
      </StyledSearch>
    );
  }
}

export default SearchBar;
