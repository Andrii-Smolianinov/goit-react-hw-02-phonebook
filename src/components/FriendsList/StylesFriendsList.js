import styled from 'styled-components';

export const FriendsWrapper = styled.div`
  padding: 60px;
  background-color: #f0fff0;
  color: black;
  align-items: center;
  justify-content: center;

  li,
  ul,
  span,
  p {
    margin: 0;
    padding: 0;
  }
  .friend-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .item {
    display: flex;
    height: 90px;
    width: 300px;
    align-items: center;
    border: #d3d3d3 solid 2px;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.3);
    margin: 10px;
    transition: all 250ms;

    :hover {
        scale: 1.05;
        box-shadow: 10px 7px 16px -5px rgba(22, 243, 14, 0.993);
    }    
  }
  
  .online {
    height: 20px;
    width: 20px;
    align-items: center;
    justify-content: start;
    border-radius: 50%;
    background-color: #00FF00;
    margin-left: 15px;   
  }
  .offline {
    height: 20px;
    width: 20px;
    align-items: center;
    justify-content: start;
    border-radius: 50%;
    background-color: #FF0000;
    margin-left: 15px; 

  }
  .avatar {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin-left: 15px;
  }
  .name {
    font-weight: 600;
    font-size: 24px;
    text-align: left;
    margin-left: 15px;    
  }
`;
