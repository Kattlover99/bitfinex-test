import styled from "styled-components";

export const TickerContainer = styled.div`
  display: flex;
  flex-flow:row nowrap;
  padding: 10px 10px 30px 10px;
  background: #121f27;
  margin:5px;
  font-family: verdana;
`;

export const TickerBox = styled.div`
  display:flex;
  flex-flow:column;
  padding: 0px 20px;
  color: white;
  h2 {
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
`;
export const TickerRow = styled.div`
  color: white;
  font-size: 16px;
  line-height: 20px;
  span.red { color: #e44b44;}
  span.green { color: #01a781;}
`; 