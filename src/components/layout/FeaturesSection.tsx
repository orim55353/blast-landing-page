import styled, { css } from "styled-components";
import blastRocketImage from "@/assets/blast-rocket.png";
import puzzle from "@/assets/puzzle.svg";
import ticket from "@/assets/ticket.svg";
import shield from "@/assets/shield.svg";
import chat from "@/assets/chat.svg";
import personal from "@/assets/personal.svg";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <Container id="features">
      <div>
        <Header>Key Features</Header>
        <FeaturesContainer>
          <div>
            <Image src={puzzle} alt="rocket" width={10} height={10} />
            <Title>User-Centric Matching</Title>
            <Text>
              Connect with your ideal party crowed based on shared interests
            </Text>
          </div>
          <div>
            <Image src={ticket} alt="rocket" width={0} height={0} />
            <Title>Tickets and Tables</Title>
            <Text>
              Book your spot at the hottest events and tables instantly
            </Text>
          </div>
          <div>
            <Image src={shield} alt="rocket" width={0} height={0} />
            <Title>Safe & Secure</Title>
            <Text>
              Party with peace of mind, thanks to our top-notch security
            </Text>
          </div>
          <div>
            <Image src={chat} alt="rocket" width={0} height={0} />
            <Title>In app Chat</Title>
            <Text>
              Coordinate easily with in-app messaging
            </Text>
          </div>
          <div>
            <Image src={personal} alt="rocket" width={0} height={0} />
            <Title>Personalized Picks</Title>
            <Text>
              Discover events and groups tailored just for you
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
      width: 40px;
      filter: invert(100%);
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
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin: 8px 0 8px 0;

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
