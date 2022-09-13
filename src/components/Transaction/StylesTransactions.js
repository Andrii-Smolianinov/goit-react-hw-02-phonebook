import styled from 'styled-components';

export const TransactionWrapper = styled.div`

  .table {
    margin: 65px;
    border-collapse: collapse;
  }
  .head {
    background-color: #00bfff;
  }
  
  .head-cell {
    text-align: center;
    height: 50px;
    width: 300px;
    color: #fff;
    border: #d3d3d3 solid 2px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }  
  .tbody-string {
    :nth-child(2n) {
      background-color: #E6E6FA;
    }

    :nth-child(2n-1) {
      background-color: #fff;
    }
  }
  .tbody-cell {
    text-align: center;
    text-align: center;
    height: 40px;
    width: 40px;
    color: #778899;
    border: #d3d3d3 solid 2px;    
  }
`;
