import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  padding: 60px;
  background-color: #dcdcdc;
  color: black;
  align-items: center;
  justify-content: center;

  li,
  ul,
  h2 {
    margin: 0;
    padding: 0;
  }
  .statistics {
    height: 100%;
    width: 404px;
    background-color: #ffff;
  }
  .title {
    font-weight: 600;
    font-size: 24px;
    height: 60px;
    padding-top: 30px;
    text-align: center;
    text-transform: uppercase;
    color: #696969;
  }
  .stat-list {
    display: flex;
    width: 400px;
    border: #1e90ff solid 2px;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100px;
    height: 60px;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;

    :nth-child(1) {
      border-right: #1e90ff solid 2px;
    }
    :nth-child(2) {
      border-right: #1e90ff solid 2px;
    }
    :nth-child(3) {
      border-right: #1e90ff solid 2px;
    }
    .label {
      font-weight: 300;
      font-size: 16px;
    }
    .percentage {
      margin-top: 8px;
      font-weight: 700;
      font-size: 22px;
    }
  }
`;
