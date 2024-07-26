import React from 'react';
import { StyledHeader, Nav,Img } from './styles/Header.styled';
import Logo from "./Logo";
import Container from './styles/Container.styled';
import {StyledButton} from './styles/Button.styled';
import {Flex} from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo />
          <StyledButton>try it free</StyledButton>
        </Nav>
        <Flex>
          <div>
            <h1>Build the comunity your fun's will love!</h1>
            <p>
             huddle re-imagine the way we build comunities. you have the voice, but so does your audiences.create connections with your users us you engage in genuine discussion. 
            </p>
            <StyledButton bg="#ff0099" color="#fff">Get started for free</StyledButton>
          </div>
          <Img />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
