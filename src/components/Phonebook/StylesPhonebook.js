import styled from 'styled-components';

export const StylesPhonebook = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-direction: column;
  height: 65px;
  width: 300px;
  margin: 20px;
  padding: 5px;

  .form {
    display: flex;
    flex-direction: column;
  }
  .inputNameField input {
    margin-left: 18px;
  }
  .inputTelField input {
    margin-left: 5px;
  }
  .buttonAddContact {
    margin-top: 20px;
  }
  .labelFilter {
    margin-left: 40px;
  }
  .inputFilter {
    margin-left: 40px;
  }
  
`;
