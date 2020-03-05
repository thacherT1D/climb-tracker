import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eEe;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const climb = (props) => (
  <StyledDiv {...props} >
    <p>Climb Component</p>
  </StyledDiv>
);

export default climb;


//Set dependencies to match blip and then build rebass components here
//Using stories for development