import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import Logo from "@/assets/logo.png";
import Button from "@/components/Button";

export default function TopSection() {
  return (
    <Container>
      <div>
        <Image src={Logo} height={52} width={162} alt="blast" />
        <Header>
          IGNITE <p>YOUR</p> NIGHT
        </Header>
        <Button size="lg">Next</Button>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: ${({ theme }) => theme.pageOptions.padding.default};
  background-image: url("/backgrounds/blur.svg"),
    linear-gradient(to top, rgba(44, 46, 97, 0.29), rgba(44, 46, 97, 0.29)),
    url("/backgrounds/party.jpg");
  background-size: 512px, auto, cover;
  background-position: center, 0% 0%, 50% 50%;
  background-repeat: repeat, repeat, repeat;

  div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: ${({ theme }) => theme.pageOptions.padding.tablet};
    }
  `}
`;

const Header = styled.h1`
  width: 100%;
  font-size: 4rem;
  font-weight: 700;
  word-spacing: 100vw;
  font-family: ${({ theme }) => theme.families.heebo};
  text-align: center;
  margin: 30px 0;
  letter-spacing: -2px;
  line-height: 0.8;

  p {
    color: #ff3636;
    font-weight: 600;
    font-family: ${({ theme }) => theme.families.inter};
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 3.5rem;
      line-height: 2;

      p {
        font-size: 2.5rem;
      }
    }
  `}
`;
