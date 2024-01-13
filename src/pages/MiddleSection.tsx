import React from "react";
import styled, { css } from "styled-components";
import DJ from "@/assets/dj.jpg";
import Image from "next/image";

export default function MiddleSection() {
  return (
    <Container id="middle">
      <div>
        <Header>How it works</Header>
        <div>
          <div>
            <Title>1 Sign up</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
              pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
              at, euismod in lectus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Curabitur
              sapien risus, commodo eget turpis aliquam.
            </Text>
          </div>
          <div>
            <Title>2 Find your match</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
              pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
              at, euismod in lectus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Curabitur
              sapien risus, commodo eget turpis aliquam.
            </Text>
          </div>
          <div>
            <Title>3 Party time</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
              pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
              at, euismod in lectus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Curabitur
              sapien risus, commodo eget turpis aliquam.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 128px ${({ theme }) => theme.pageOptions.padding.default};
  background-image: url("/backgrounds/lines.svg"),
    linear-gradient(135deg, #250d5f 0%, #4d22b2 100%);
  background-size: 118px, cover;
  background-position: center, 0% 0%;
  background-repeat: repeat, repeat;

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
    justify-content: center;

    > div {
      display: flex;
      gap: 64px;

      > div {
        width: calc(100% / 3);
      }

      img {
        border-radius: 10px;
      }

      ${({ theme }) => css`
        @media ${theme.breakpoints.tablet} {
          flex-direction: column;

          > div {
            width: 100%;
          }
        }
      `}
    }
  }

  p {
    font-weight: 300;
    color: #bab8c1;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 64px ${({ theme }) => theme.pageOptions.padding.tablet};

      > div {
        flex-direction: column;

        > div {
          width: 100%;
        }
      }
    }
  `}
`;

const Header = styled.h3`
  font-size: 4rem;
  font-weight: 900;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 3.5rem;
    }
  `};
`;

const Title = styled.h5`
  margin-bottom: 24px;
  font-size: 1.75rem;

  &:first-letter {
    font-size: 4.75rem;
    font-weight: 900;
    margin-inline-end: 16px;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 2rem;

      &:first-letter {
        font-size: 4rem;
      }
    }
  `};
`;

const Text = styled.p`
  text-align: justify;
  margin: 24px 0;
`;
