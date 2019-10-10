import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import * as actionCreators from "./State/actionCreators";
import JokeList from "./JokeList";
import * as reducers from "./State/reducers";

export function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h2> WELCOME HOME </h2>
      <div onClick={props.fetchData} >
        {props.isLoading ? (
          <Loader type="Audio" color="#somecolor" height={100} width={100} />
        ) : (
          "welcome "
        )}
      </div>

      {props.data && props.data.map(jokes => <JokeList key={jokes.id} jokes={jokes} />)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.data.isLoading,
    data: state.data.apiData,
    err: state.data.err
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
