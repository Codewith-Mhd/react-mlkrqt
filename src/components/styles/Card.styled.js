import styled from 'styled-components';

export const StyledCard = styled.div`
  display :flex;
  justify-content :center;
  background:#fff;
  border-radius:15px;
  align-items :center;
  margin:40px 0;
  padding:40px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  flex-direction :${({layout})=> layout || "row"};

  img{
    width:100%;
    height:200px;
    box-shadow :0 0 10px rgba(0,0,0,0.15);
    border:none;
  }

  &>div{
    flex:1;
  }

  @media(max-width :${({theme})=> theme.mobile}){
    flex-direction :column;
  }
`;
