import styled from 'styled-components';


const StyledApp = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .App {
    height: 100vh;
    background-color: #dbe8d8;
    padding: 30px;
    text-align: left;
    h1 {
      font-size: 3rem;
      padding: 20px;
      color: #9ca0a1;
      text-align: center;
    }
    .wrapper__sections {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

      .section__input {
        background-color: #ffffff;
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
          border-radius: 8px;
          background-color: #c8df52;

          &:hover {
            cursor: pointer;
            background-color: #8b9c36;
            color: white;
            transition: 0.5s;
          }

        }
        .btn__clicked {
          background-color: #8b9c36;
          color: white;
        }

        p {
          font-weight: 600;
          font-size: 1.3rem;
        }
      }

      .section__result {
        background-color: #9ca0a1;
        border: 1px solid #9ca0a1;
        border-radius: 10px;
        margin: 0 auto;
        padding: 30px;
        width: 50%;

        button {
          padding: 5px 10px;
          margin-right: 10px;
          border: none;
          border-radius: 8px;
          background-color: #fede00;
          &:hover {
            cursor: pointer;
            background-color: #ffffff;
            transition: 0.5s;
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