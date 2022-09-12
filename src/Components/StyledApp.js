import styled from 'styled-components';

const StyledApp = styled.div`
* {
  margin: 0;
  padding: 0;
}

.App {
  height: 100vh;
  background-color: #DBE8D8;
  padding: 30px;
  text-align: left;
  h1 {
    font-size: 3rem;
    padding: 20px;
  }
  .wrapper__sections {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .section__input {
      background-color: #FFFFFF;
      border: 1px solid white;
      border-radius: 10px;
      margin: 0 auto;
      margin-bottom: 20px;
      padding: 30px;
      width: 50%;
      button {
        padding: 5px 10px;
        margin-right: 10px;
        border: none;
        background-color: #C8DF52;
       
        &:hover {
          cursor: pointer;
        }
      }
  
      p {
        font-weight: 600;
        font-size: 1.3rem;
      }
    }
    
    .section__result {
      background-color: #9CA0A1;
      border: 1px solid #9CA0A1;
      border-radius: 10px;
      margin: 0 auto;
      padding: 30px;
      width: 50%;

      button {
        padding: 5px 10px;
        margin-right: 10px;
        border: none;
        background-color: #FEDE00;
        &:hover {
          cursor: pointer;
        }
      }

      p {
        font-weight: 600;
        font-size: 1.3rem;
      }
    }
  }

}



`;

export default StyledApp;