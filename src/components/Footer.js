import React from 'react';
import Container from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

import {SocialIcons} from "./SocialIcons"

const Footer = () => {
 // console.log(SocialIcons)
  return (
    <StyledFooter>
      <div>
        <Container>
          <Flex>
            <ul>
              <li>
                Lorem upsom dolar site amet,consectution admiteant your amidt
                and sectiabdber do tyoue msbeb
              </li>
              <li>+9726-3728-23</li>
              <li>@example.admit.com </li>
            </ul>
            <ul>
              <li>About us</li>
              <li>What we do</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>

           <SocialIcons />
          </Flex>
          <p>&copy; all rights reseved.</p>
        </Container>
      </div>
    </StyledFooter>
  );
};

export default Footer;
