import React from "react";
import "bulma/css/bulma.css";
import styled from "styled-components";
import { Button } from "./Button";


const StyledH3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-bottom: 10px;
`;

const TopBox = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
`;



const GreetingStories = ({model}) => {
    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <TopBox>Dashboard</TopBox>
            </div>
            <div className="box">
                <StyledH3>Greeting Page</StyledH3>
                <P>Project MiniApp sederhana Penerapan Redux Styled dan StoryBook</P>
                <Button model={model} label={'OK!'} />
            </div>
        </div>


    );
};


export default GreetingStories;
