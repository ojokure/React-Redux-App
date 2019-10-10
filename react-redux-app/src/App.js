import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import * as actionCreators from "./State/actionCreators";
import JokeList from "./JokeList";
import * as reducers from "./State/reducers";
import styled from "styled-components";

export function App(props) {
  const [isButtonTouched, setisButtonTouched] = useState(false);

  return (
    <div className="App">
      <div style={{ backgroundColor: "#a9d3e9",color: "blue", borderRadius: "15%"}}>
        <h1> DRY JOKES </h1>

        <h3> ....unlike your Code 😂 </h3>
      </div>
      <button
        onClick={props.fetchData}
        style={{ fontFamily: "ABeeZee",
          // display: props.touch ? "inline" : "none",
          padding: "5px",
          borderButtomRadius: "20%",
          color: "white"
        }}
      >
        {props.isLoading ? (
          <Loader type="TailSpin" color="#somecolor" height={80} width={80} />
        ) : (
          " onClick to fetch some DRY Jokes "
        )}
      </button>

      {props.data &&
        props.data.map(jokes => <JokeList key={jokes.id} jokes={jokes} />)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.data.isLoading,
    data: state.data.apiData,
    err: state.data.err,
    touch: state.data.isButtonTouched
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
