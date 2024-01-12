import React from "react";
import styled, { css } from "styled-components";
import DJ from "@/assets/dj.jpg";
import Image from "next/image";
import Button from "@/components/Button";

export default function MiddleSection() {
  return (
    <Container>
      <div>
        <div>
          <Title>Euismod morbi sed dolore</Title>
          <Subtitle>
            Nunc lorem mauris in aliquam sed euismod amet adipiscing
          </Subtitle>
          <Text>
            Sit lorem ipsum dolor amet. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Curabitur
            sapien risus, commodo eget turpis at, elementum convallis enim
            turpis, lorem ipsum dolor. Sed amet nisl tempus. lacinia malesuada
            et a elit. Donec urna ex lacinia. Lorem ipsum dolor sit amet nullam
            consequat etiam.
          </Text>
        </div>
        <div>
          <Image src={DJ} alt="dj" height={0} width={0} />
          <Text>
            Tempus malesuada et a elit. Donec urna ex, lacinia in purus ac,
            pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam at,
            euismod in lectus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Curabitur sapien risus,
            commodo eget turpis aliquam.
          </Text>
        </div>
        <div>
          <Image src={DJ} alt="dj" height={0} width={0} />
          <Text>
            Lorem ipsum malesuada et a elit. Donec urna ex, lacinia in purus ac,
            pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam
            amet euismod in pellentesque habitant morbi.
          </Text>
          <Button>Next</Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 128px ${({ theme }) => theme.pageOptions.padding.default};
  background-image: url("/backgrounds/lines.svg"),
    linear-gradient(135deg, #284269 0%, #732e4e 100%);
  background-size: 118px, cover;
  background-position: center, 0% 0%;
  background-repeat: repeat, repeat;

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    display: flex;
    gap: 64px;
    justify-content: center;

    > div {
      width: calc(100% / 3);

      img {
        border-radius: 10px;
      }
    }
  }

  h5,
  p {
    font-weight: 300;
    font-family: ${({ theme }) => theme.families.sourceSans};
    color: #ffffffab;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: ${({ theme }) => theme.pageOptions.padding.tablet};

      > div {
        flex-direction: column;

        > div {
          width: 100%;
        }
      }
    }
  `}
`;

const Title = styled.h3`
  font-size: 2.75rem;
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: -0.8px;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      font-size: 2rem;
    }
  `}
`;

const Subtitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

const Text = styled.p`
  text-align: justify;
  margin: 24px 0;
`;
