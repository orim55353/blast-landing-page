import styled, { css } from "styled-components";
import blastRocketImage from "@/assets/blast-rocket.png";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <Container id="features">
      <div>
        <Header>Key Features</Header>
        <FeaturesContainer>
          <div>
            <Image src={blastRocketImage} alt="rocket" width={0} height={0} />
            <Title>Title</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac.
            </Text>
          </div>
          <div>
            <Image src={blastRocketImage} alt="rocket" width={0} height={0} />
            <Title>Title</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac.
            </Text>
          </div>
          <div>
            <Image src={blastRocketImage} alt="rocket" width={0} height={0} />
            <Title>Title</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac.
            </Text>
          </div>
          <div>
            <Image src={blastRocketImage} alt="rocket" width={0} height={0} />
            <Title>Title</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac.
            </Text>
          </div>
          <div>
            <Image src={blastRocketImage} alt="rocket" width={0} height={0} />
            <Title>Title</Title>
            <Text>
              Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac.
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
      scroll-margin-top: 175px;
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 64px;

  > div {
    width: calc(100% / 3 - 48px);
    background-color: #1b0a44;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 18px;

    > img {
      width: 100px;
    }
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.laptop} {
      > div {
        width: calc(100% / 2 - 48px);
      }
    }
  `}

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      flex-direction: column;
      gap: 32px;

      > div {
        width: 100%;
      }
    }
  `}
`;

const Title = styled.h5`
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 2rem;
    }
  `};
`;

const Text = styled.p`
  text-align: center;
  padding-inline: 16px;
  font-weight: 300;
`;
