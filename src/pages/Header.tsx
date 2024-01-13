import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Heading $isScrolled={isScrolled}>
      <nav>
        <Image
          src={Logo}
          height={52}
          width={162}
          alt="blast"
          className="app-logo"
          onClick={() => window.scrollTo({ top: 0 })}
        />
        <ul>
          <li>
            <a href="#middle">How it works</a>
          </li>
          {/* <li>
            <a href="#bottom">section 3</a>
          </li> */}
        </ul>
      </nav>
    </Heading>
  );
}

const Heading = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "#1b0a44" : "transparent"};
  transition: all 0.2s ease-in-out;
  width: 100%;

  nav {
    padding: 32px ${({ theme }) => theme.pageOptions.padding.default};
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;

    .app-logo {
      height: auto;
      cursor: pointer;
    }

    ul {
      display: flex;
      gap: 32px;
    }

    ${({ theme }) => css`
      @media ${theme.breakpoints.tablet} {
        .app-logo {
          height: 32px;
          width: 100px;
        }
      }
    `}
  }
`;
