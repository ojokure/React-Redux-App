import React from "react";
import { connect } from "react-redux";
import App from "./App";
import * as actionCreators from "./State/actionCreators";

export function BookList(props) {
  return <div></div>;
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
)(BookList);
