import React from "react";
import { connect } from "react-redux";
import App from "./App";
import * as actionCreators from "./State/actionCreators";

export function JokeList(props) {
  return (
    <div>
      {props.data && props.data.map(el => 
        <div>
          {el.type}
          {el.setup}
          {el.punchline}
        </div>
      )}
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
)(JokeList);
