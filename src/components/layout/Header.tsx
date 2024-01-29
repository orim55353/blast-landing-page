import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import DownloadSVG from "@/assets/download.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import theme from "@/styles/theme";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sf } from "@/pages";

type HeaderProps = {
  darkenHeader?: boolean;
};

export default function Header({ darkenHeader }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const isLaptop = useMediaQuery(theme.breakpoints.laptop);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleNavbar = () => setIsNavBarOpen((prev) => !prev);

  const handleCustomScroll = (targetId: string) => {
    const targetElement = document.querySelector(`#${targetId}`);

    if (targetElement instanceof HTMLElement && isHomePage) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    setIsNavBarOpen(false);
  };

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

  const LogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0 });
      closeHeader();
    } else {
      window.location.href = "/";
    }
  };

  const closeHeader = () => {
    setIsNavBarOpen(false);
  };

  return (
    <Heading
      $isScrolled={isScrolled}
      $darkenHeader={darkenHeader}
      className={sf.className}
    >
      <nav>
        <Image
          src={Logo}
          height={0}
          width={200}
          alt="blast"
          className="app-logo"
          onClick={LogoClick}
        />
        {isLaptop && (
          <div
            onClick={toggleNavbar}
            className={`hamburger ${isNavBarOpen && "active"}`}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
        <StyledUl $isNavBarOpen={isNavBarOpen}>
          {isLaptop && (
            <Image
              src={Logo}
              height={0}
              width={235}
              alt="blast"
              onClick={LogoClick}
            />
          )}
          <li>
            {isHomePage ? (
              <a onClick={() => handleCustomScroll("middle")}>How it works</a>
            ) : (
              <Link href="/#middle" onClick={closeHeader}>
                How it works
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a onClick={() => handleCustomScroll("features")}>Key features</a>
            ) : (
              <Link href="/#features" onClick={closeHeader}>
                Key features
              </Link>
            )}
          </li>
          <li>
            <Image
              src={DownloadSVG}
              alt="download from app store"
              height={0}
              width={200}
              className="download-button img-link"
            />
          </li>
        </StyledUl>
      </nav>
    </Heading>
  );
}

const Heading = styled.header<{
  $isScrolled: boolean;
  $darkenHeader?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ $isScrolled, $darkenHeader }) =>
    $isScrolled ? "#1b0a4495" : $darkenHeader ? "#1b0a44" : "transparent"};
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: 5;

  nav {
    padding: 16px ${({ theme }) => theme.pageOptions.padding.default};
    max-width: 1408px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .app-logo {
      height: auto;
      cursor: pointer;
    }

    ${({ theme }) => css`
      @media ${theme.breakpoints.tablet} {
        padding-inline: 32px;

        .app-logo {
          width: 150px;
        }
      }
    `}

    .hamburger {
      z-index: 5;
    }

    .hamburger .line {
      width: 50px;
      height: 5px;
      background: #f7f7f7;
      margin: 8px auto;
      transition: all 0.3s ease-in-out;
      border-radius: 5px;

      ${({ theme }) => css`
        @media ${theme.breakpoints.tablet} {
          width: 30px;
          height: 3px;
        }
      `}
    }

    .hamburger.active .line:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .line:nth-child(1) {
      transform: translateY(13px) rotate(45deg);

      ${({ theme }) => css`
        @media ${theme.breakpoints.tablet} {
          transform: translateY(12px) rotate(45deg);
        }
      `}
    }

    .hamburger.active .line:nth-child(3) {
      transform: translateY(-13px) rotate(-45deg);

      ${({ theme }) => css`
        @media ${theme.breakpoints.tablet} {
          transform: translateY(-10px) rotate(-45deg);
        }
      `}
    }
  }
`;

const StyledUl = styled.ul<{ $isNavBarOpen: boolean }>`
  display: flex;
  gap: 48px;
  font-size: 24px;
  font-weight: 600;
  align-items: center;

  li {
    cursor: pointer;
  }

  .download-button {
    width: 150px;
  }

  ${({ theme, $isNavBarOpen }) => css`
    @media ${theme.breakpoints.laptop} {
      position: fixed;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      background-color: #1b0a44;
      margin: 0;
      padding-top: 64px;
      top: ${$isNavBarOpen ? "0" : "-100vh"};
      inset-inline-start: 0;
      transition: all 0.4s ease-in-out;
      font-size: 32px;
    }
  `}
`;
