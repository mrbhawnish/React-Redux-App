import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { getData } from "./actions/index";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
function App(props) {
  const [input, setInput] = useState("");

  const handleChanges = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const loading = () => {
    return (
      <>
        <Loader
          type="Watch"
          color="#00BFFF"
          height={100}
          width={300}
          timeout={3000} //3 secs
        />
      </>
    );
  };
  // useEffect(() => {
  //   props.getData(input)
  // }, [props.getData, input])
  return (
    <Wrapper>
      <h1>Worldwide Public Holidays</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="country code i.e: US"
          type="text"
          value={input}
          onChange={handleChanges}
        />
        <button className="button" onClick={() => props.getData(input)}>
          Search
        </button>
      </form>

      {props.isLoading && props.holidays
        ? loading()
        : props.holidays.map((item) => {
            return (
              <div className="cards">
                <div className="child">
                  <h2>Holiday Name: {item.name}</h2>
                  <h3>Date: {item.date}</h3>
                  <h3>Country: {item.countryCode}</h3>
                </div>
              </div>
            );
          })}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
    isLoading: state.isLoading,
  };
};

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 1500px;
  font-family: Optima, sans-serif;
  font-weight: 50;
  background: linear-gradient(#e66465, #9198e5);

  .input {
    padding: 10px;
    outline: none;
    border-radius: 10px;
    border: 0;
    font-size: 18px;
  }
  
  .button {
    text-align: center;
    justify-content: center;
    font-size: 18px;
    margin: 10px;
    border-radius: 15px;
    border: 0;
    outline: 0;
    padding: 10px;
    :hover {
      color: gray;
    }
  }

  .cards {
    margin-top: 10px;
    background: black;
    opacity: 45%;
    text-align: center;
    box-sizing: border-box;
    width: 50%;
  }

  .child {
    height: auto;
    margin-top: 10px;
    color: gray !important;
    box-sizing: content-box;
    width: 100%;
  }
`;

export default connect(mapStateToProps, { getData })(App);
