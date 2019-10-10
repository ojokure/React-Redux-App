import React from "react";
import { connect } from "react-redux";
import App from "./App";
import * as actionCreators from "./State/actionCreators";
import styled from "styled-components";

const WrapDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #a9d3e9;
  color: white;
  padding:20px;
  margin: 10px;
  border-radius: 13%;
`;

export function JokeList(props) {
  return (
    <WrapDiv>
      {props.data &&
        props.data.map(el => (
          <div>
            <div> Type : {el.type} </div>
            <div> Set Up : {el.setup} </div>
            <div> Punchline : {el.punchline} </div>
          </div>
        ))}
    </WrapDiv>
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
