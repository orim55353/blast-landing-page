import Card from "@/components/Card";
import styled, { css } from "styled-components";
import cardsData from "@/data/cards-data";

export default function BottomSection() {
  return (
    <Container id="bottom">
      <div>
        <Header>Sapien lorem nulla consequat</Header>
        <Subtitle>
          Lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac,
          pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam at,
          euismod in lectus. Pellentesque habitant morbi tristique senectus
          consequat.
        </Subtitle>
        <CardsContainer>
          {cardsData.map((card, index) => (
            <Card key={crypto.randomUUID()} {...card} isOdd={!!(index % 2)} />
          ))}
        </CardsContainer>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 128px ${({ theme }) => theme.pageOptions.padding.default};

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: ${({ theme }) => theme.pageOptions.padding.tablet};
    }
  `}
`;

const Header = styled.h5`
  font-size: 2.75rem;
  font-weight: 600;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 2rem;
    }
  `}
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: #ffffffab;
  margin-top: 28px;
`;

const CardsContainer = styled.div`
  --container-gap: 64px;
  display: flex;
  flex-direction: column;
  gap: var(--container-gap);
  margin-top: var(--container-gap);
`;
