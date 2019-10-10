import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import * as actionCreators from "./State/actionCreators";
import BookList from "./BookList";

export function App(props) {
  return (
    <div className="App">
      <h2> WELCOME HOME </h2>
      {props.isLoading ? (
        <Loader type="TailSpin" color="#somecolor" height={80} width={80} />
      ) : (
        <button> Click Here </button>
      )}
      {/* {props.data && props.data.map(book => <BookList book={book} />)} */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    err: state.err
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
