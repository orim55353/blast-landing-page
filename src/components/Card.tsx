import { cardData } from "@/types/types";
import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import theme from "@/styles/theme";

interface cardProps extends cardData {
  isOdd: boolean;
}

export default function Card({
  title,
  text,
  imageUrl,
  buttonLink,
  isOdd,
}: cardProps) {
  const imageData = { src: imageUrl, alt: "", height: 0, width: 0 };
  const PreviewImage = () => (
    <div>
      <Image className="preview-image" {...imageData} />
    </div>
  );
  const isMobile = useMediaQuery(theme.breakpoints.tablet);

  return (
    <Container>
      {(!isOdd || isMobile) && <PreviewImage />}
      <div>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Button onClick={() => window.open(buttonLink)}>Next</Button>
      </div>
      {isOdd && !isMobile && <PreviewImage />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 64px;
  padding: 96px 64px;
  background-color: #292929;
  background-image: url("/backgrounds/blur.svg");
  border-radius: 10px;

  > div {
    width: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
  }

  .preview-image {
    border-radius: 5px;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 64px;
      flex-direction: column;

      > div {
        width: 100%;
      }
    }
  `}
`;

const Title = styled.h6`
  letter-spacing: -0.8px;
  font-size: 1.75rem;
  line-height: 1.375rem;
  font-weight: 600;
`;

const Text = styled.p`
  text-align: justify;
  font-family: ${({ theme }) => theme.families.sourceSans};
  font-weight: 300;
  color: #ffffffab;
`;
