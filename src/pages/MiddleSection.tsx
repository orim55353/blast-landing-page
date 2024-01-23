import React from "react";
import styled, { css } from "styled-components";

export default function MiddleSection() {
  return (
    <Container id="middle">
      <div>
        <Header>How it works</Header>
        <div>
          <div>
            <Title>1 Sign up</Title>
            <Text>
              {
                "Get started with Blast in just a few clicks! Create your profile, set your preferences, and you're ready to dive into the world of vibrant nightlife. Our easy sign-up process ensures you're quickly on your way to your next great night out."
              }
            </Text>
          </div>
          <div>
            <Title>2 Find your match</Title>
            <Text>
              {
                "Discover your perfect party match with ease. Whether you're looking for a lively group to join or inviting others to your table, Blast connects you with like-minded party-goers. Swipe through profiles, explore events, and find your ideal social scene, all tailored to your tastes"
              }
            </Text>
          </div>
          <div>
            <Title>3 Party time</Title>
            <Text>
              {
                "Now the fun begins! With your match made, it's time to enjoy the night. Finalize your plans, grab your tickets or secure your table through the app, and get ready for an unforgettable experience. Blast is your passport to exciting nights filled with new friends and lasting memories."
              }
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 128px ${({ theme }) => theme.pageOptions.padding.default};
  background-color: #1b0a44;

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
      scroll-margin-top: ${({ theme }) => theme.pageOptions.scrollMargin};

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
      text-align: center;
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
