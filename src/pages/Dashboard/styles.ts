import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
    border-radius: 5px 0 0 5px;
    border: 2px solid transparent;
    border-right: 0px;
    transition: border-color 0.5s;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #e53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    border: 0;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #e53030;
  margin-top: 20px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(10px);

      svg {
        color: #04d361;
      }
    }

    figure {
      display: flex;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
    }

    div {
      flex: 1;
      margin: 0 20px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
        font-weight: 700;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 5px;
        font-weight: 400;
        letter-spacing: 0.5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
      transition: color 0.3s;
    }
  }
`;
