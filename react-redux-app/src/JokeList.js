import React from "react";
import { connect } from "react-redux";
import App from "./App";
import * as actionCreators from "./State/actionCreators";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #a9d3e9;
  opacity:0.8;
  color: blue;
  margin: 10px;
  justify-content: center;
  border-radius:13%
`;

const WrapDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-direction: wrap;
`;

export function JokeList(props) {
  return (
    <WrapDiv>
      {props.data &&
        props.data.map(el => (
          <StyledDiv>
            Type : {el.type}
            <p> Set Up : {el.setup} </p>
            <p> Punchline : {el.punchline} </p>
          </StyledDiv>
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
