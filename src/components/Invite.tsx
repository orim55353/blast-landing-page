import styled, { css } from "styled-components";
import { DownloadButton } from "./Button";

export default function Invite() {
  return (
    <Container>
      <div>
        <Title>{"You've"} been invited to join Blast!</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
          assumenda, debitis quaerat quae sapiente facere saepe, ratione nihil,
          blanditiis aliquam nulla esse iusto nam.
        </Subtitle>
        <DownloadButton />
      </div>
    </Container>
  );
}

const Container = styled.section`
  min-height: calc(100vh - 557px);

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 128px ${({ theme }) => theme.pageOptions.padding.tablet};
      min-height: unset;
    }
  `}
`;

const Title = styled.h1`
  font-size: 4rem;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 3rem;
    }
  `}
`;

const Subtitle = styled.h4`
  font-size: 1.75rem;
  font-weight: 300;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 1.5rem;
    }
  `}
`;
