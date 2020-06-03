import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.6s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 5px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    figure {
      display: flex;
      align-items: center;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }

    div {
      margin-left: 30px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 5px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        color: #6c6c80;
        margin-top: 5px;
      }
    }
  }
`;

export const Issues = styled.article`
  margin-top: 80px;

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

      strong {
        color: #04d361;
      }
      svg {
        color: #04d361;
      }
    }

    div {
      flex: 1;
      margin: 0 20px 0 0;

      strong {
        font-size: 20px;
        color: #3d3d4d;
        font-weight: 700;
        transition: color 0.3s;
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

export const Loading = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
