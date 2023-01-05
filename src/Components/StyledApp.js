import styled from "styled-components";

const StyledApp = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .App {
    background-color: #dceb92;
    padding: 30px;
    text-align: left;
    h1 {
      font-size: 3rem;
      padding: 20px;
      color: #232515;
      text-align: center;
    }
    .wrapper__sections {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      max-width: 100%;

      .section__input {
        background-color: #ffffff;
        border: 1px solid white;
        border-radius: 10px;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 30px;
        width: 50%;
        color: #232515;

        .input__bill {
          padding: 8px 10px;
          width: 150px;
          margin-bottom: 20px;
        }
        .input__custom {
          padding: 8px 10px;
          width: 150px;
          margin-bottom: 20px;
        }
        .input__people {
          padding: 8px 10px;
          width: 150px;
          margin-bottom: 20px;
        }
        button {
          padding: 5px 10px;
          margin-right: 10px;
          margin-top: 5px;
          border: none;
          border-radius: 8px;
          background-color: #c8df52;

          &:hover {
            cursor: pointer;
            background-color: #232515;
            color: white;
            transition: 0.5s;
          }
        }
        .btn__clicked {
          background-color: #232515;
          color: white;
        }

        .btn__calculate {
          background-color: #3720ad;
          color: #ffffff;
          font-weight: 700;
          padding: 10px 14px;
          margin-top: 20px;
          margin-right: 10px;
          border: none;
          border-radius: 8px;
          &:hover {
            cursor: pointer;
            background-color: #232515;
            color: #ffffff;
            transition: 0.5s;
          }
        }

        .p__step {
          font-weight: 600;
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
      }

      .icon__arrow {
        display: block;
        margin: 10px auto;
        color: #232515;
      }

      .section__result {
        background-color: #232515;
        border: 1px solid #9ca0a1;
        border-radius: 10px;
        margin: 0 auto;
        padding: 30px;
        width: 50%;

        button {
          padding: 10px 20px;
          margin-top: 20px;
          margin-right: 10px;
          border: none;
          border-radius: 8px;
          background-color: #c8df52;
          font-weight: 700;
          &:hover {
            cursor: pointer;
            background-color: #ffffff;
            transition: 0.5s;
          }
        }

        p {
          font-weight: 600;
          font-size: 1.3rem;
          color: #ffffff;
        }
        .p__total {
          margin-top: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .App {
      text-align: center;

      .input__custom {
        margin-top: 10px;
      }
    }
  }
`;

export default StyledApp;
