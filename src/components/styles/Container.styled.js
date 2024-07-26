import styled from "styled-components";

const Container = styled.div`
  max-width:100%;
  background-color:${({theme})=> theme.colors.header};
  margin:0 auto;
  padding:0 20px;
`;

export default Container;