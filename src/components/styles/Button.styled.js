import styled from "styled-components"

export const StyledButton = styled.button`
   border-radius :50px;
   border :none;
   cursor :pointer;
   box-shadow :0 0 10px rgba(0,0,0,0.15);
   font-size:16px;
   font-width:700;
   padding :12px 16px;
   background :${({bg})=> bg || '#fff'}
   color:${({color})=> color|| '#333'}

   &:hover{
     opacity :0.9;
     transition :scale(0.98);
   }
`;

