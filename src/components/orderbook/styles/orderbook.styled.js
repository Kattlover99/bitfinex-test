import styled from "styled-components";

export const OrderBookPanel = styled.div`
    flex-grow: 0;
    display: flex;
    flex-flow: column;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: #121f27;
    margin:5px;
    font-family: verdana;
`;

export const ConnectButton = styled.button`
    width: 150px;
    cursor: pointer;
    border: none;
    color: black;
    font-family: 15px !important;
    text-align: center;
    padding: 10px 0;
`

export const OrderBookBar = styled.div`
    color: white;
    display:flex;
    flex-flow:row;
    justify-content: space-between;
    align-items: start;
    border-bottom: 1px solid #555;
    padding-bottom: 5px;
    margin-bottom: 10px;
    h2 {
        font-weight: 900;
        font-size: 20px;
        padding: 10px 0px 0px 20px;
        margin: 0px;
        justify-self:flex-start;
        span {
        color: #01a781;
        font-size: 16px;
        }
    }
`;

export const OrderBookSides = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-flow: row nowrap;
`;

export const OrderBookSide = styled.div`
    h3{
        font-size: 16px;
        color: white;
        text-align: center;
    }

    width:calc(50% - 2px);
    margin: 0px 1px;
    flex-basis:50%;
`

export const OrderBookTable = styled.table`
    border-spacing:0px;
    width: 100%;
    box-sizing: border-box;
    thead {
        td {
            font-size:12px;
            color:#aaa !important;
        }
    }
`;

export const OrderBookRow = styled.tr`
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    td.count{
        text-align: center;
    }
`;


export const OrderBookCol = styled.td`
    color: #F0F0f0;
    padding: 1px 10px;
    flex:1;
    font-size: 14px;
    text-align: center;
`;


export const OrderBookButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-flow: row;
    justify-content: flex-end;
`;

export const OrderBookIcon = styled.div`
    display: flex;
    flex-grow: 0;
    padding: 10px;
    font-family: 15px;
    svg {
        font-size:20px;
    }
`;

