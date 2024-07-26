import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color:${({theme})=> theme.colors.header};
  padding:40px 0px;
`;

export const Nav = styled.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:14px;


  @media(max-width :${({theme})=> theme.mobile}){
    flex-direction :column;
  }
`;

export const Img = styled.div`
  width:300px;
  margin-left:40px;
  background:lightgray;
  box-shadow : 3px 3px 10px gray;
  border: 2px solid black;

  @media(max-width :${({theme})=> theme.mobile}){
    margin:40px 0 30px;
    width:287px;
    height:300px;
    border: 3px solid green;
    font-size :10px;
  }
`;

