import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px;
  justify-content: center; 
  background-color: #dcdcdc;

  p {
    margin: 0;
    padding: 0;
  }

  .profile {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 354px;
    height: 400px;
    border: #d3d3d3 solid 2px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    margin-top: 30px;
    width: 150px;
    height: 150px;
    border: gray solid 1px;
    border-radius: 50%;
  }

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.62;
    margin-top: 40px;
    max-width: 300px;
  }

  .tag {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.62;
    color: gray;
    max-width: 300px;
    margin-top: 15px;
  }

  .location {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.62;
    color: gray;
    margin-top: 15px;
    margin-bottom: 40px;
    max-width: 300px;
  }

  .stats {
    display: flex;
    margin: 0;
    padding: 0;
    width: 354px;

    border-right: #d3d3d3 solid 2px;
    border-left: #d3d3d3 solid 2px;
    border-bottom: #d3d3d3 solid 2px;
  }

  .stats-item {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 118px;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    background-color: #f5f4fa;

    :nth-child(1) {
      border-right: #d3d3d3 solid 2px;
    }
    :nth-child(3) {
      border-left: #d3d3d3 solid 2px;
    }
  }

  .label {
    color: gray;
  }

  .quantity {
    margin-top: 8px;
    color: black;
    font-weight: 700;
    font-size: 20px;
  }
`;
