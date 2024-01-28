import Image from "next/image";
import styled, { css } from "styled-components";
import appDemoImage from "@/assets/app-demo.png";
import appDemoMobileImage from "@/assets/app-demo-mobile.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import theme from "@/styles/theme";
import { DownloadButton } from "@/components/Button";

export default function TopSection() {
  const isLaptop = useMediaQuery(theme.breakpoints.laptop);

  return (
    <Container id="top">
      <SectionDivider>
        <div>
          <div>
            <Header>IGNITE</Header>
            <Header $isRed={true}>YOUR</Header>
            <Header>NIGHT</Header>
            {!isLaptop && <DownloadButton />}
          </div>
        </div>
        <Image
          src={isLaptop ? appDemoMobileImage : appDemoImage}
          alt="app-demo"
          height={0}
          width={400}
          className="app-demo"
        />
        {isLaptop && <DownloadButton />}
      </SectionDivider>
    </Container>
  );
}

const Container = styled.section`
  padding: ${({ theme }) => theme.pageOptions.padding.default};
  padding-top: 192px;
  background-image: url("/backgrounds/blur.svg"),
    linear-gradient(to bottom, #220b7c30, #1b0a4499),
    url("/backgrounds/party.jpg");
  background-size: 512px, auto, cover;
  background-position: center, 0% 0%, 50% 50%;
  background-repeat: repeat, repeat, repeat;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 128px ${({ theme }) => theme.pageOptions.padding.tablet};
    }
  `}
`;

const Header = styled.h1<{ $isRed?: boolean }>`
  font-size: 5.7rem;
  font-weight: 900;
  word-spacing: 100vw;
  letter-spacing: 3px;
  color: ${({ $isRed }) => ($isRed ? "#e8115f" : "")};

  ${({ theme }) => css`
    @media ${theme.breakpoints.laptop} {
      font-size: 4.5rem;
    }
  `}
  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 3.5rem;

      p {
        font-size: 2.5rem;
      }
    }
  `};
`;

const SectionDivider = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    gap: 32px;
    margin-inline-start: 96px;

    > div {
      display: flex;
      flex-direction: column;

      .download-button {
        margin-top: 64px;
      }
    }
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.laptop} {
      flex-direction: column;

      > div {
        justify-content: center;
        margin-inline-start: 0;
      }

      .app-demo {
        margin: 32px 0 32px;
      }
    }
  `}

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      > div {
        .blast-rocket {
          height: 90px;
          width: 90px;
        }
      }
    }
  `}
`;
