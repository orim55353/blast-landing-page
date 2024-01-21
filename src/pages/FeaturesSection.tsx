import React from "react";
import styled, { css } from "styled-components";

export default function FeaturesSection() {
  return (
    <Container id="features">
      <div>
        <Header>Key Features</Header>
        <FeaturesContainer>
          <div>
            <Title>Sign up</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
              pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
              at, euismod in lectus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Curabitur
              sapien risus, commodo eget turpis aliquam.
            </Text>
          </div>
          <div>
            <Title>Find your match</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
              pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
              at, euismod in lectus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Curabitur
              sapien risus, commodo eget turpis aliquam.
            </Text>
          </div>
          <div>
            <Title>Party time</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
              pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
              at, euismod in lectus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Curabitur
              sapien risus, commodo eget turpis aliquam.
            </Text>
          </div>
        </FeaturesContainer>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 128px ${({ theme }) => theme.pageOptions.padding.default};

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 64px ${({ theme }) => theme.pageOptions.padding.tablet};
      scroll-margin-top: ${({ theme }) => theme.pageOptions.scrollMargin};
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

const FeaturesContainer = styled.div`
  display: flex;
  gap: 64px;

  > div {
    width: calc(100% / 3);
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      flex-direction: column;

      > div {
        width: 100%;
      }
    }
  `}
`;

const Title = styled.h5`
  font-size: 2.25rem;
  font-weight: 700;
  margin-inline-end: 16px;
  text-align: center;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 2rem;
    }
  `};
`;

const Text = styled.p`
  text-align: justify;
  margin: 24px 0;
`;
