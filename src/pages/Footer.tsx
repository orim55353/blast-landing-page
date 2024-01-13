import React from "react";
import styled, { css } from "styled-components";
import { DownloadButton } from "@/components/Button";
import Image from "next/image";
import BlastLogo from "@/assets/blast-with-text.png";
import Instagram from "@/assets/instagram.svg";
import Twitterx from "@/assets/twitterx.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import theme from "@/styles/theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery(theme.breakpoints.tablet);

  const Copyright = () => (
    <div className="copyright">
      <p>Copyright © {currentYear}</p>
      <p>Blast inc. all rights reserved</p>
    </div>
  );

  return (
    <FooterContainer>
      <div>
        <TopSection>
          <div className="logo">
            <h6>Ignite your night</h6>
            <Image src={BlastLogo} alt="blast" height={150} width={150} />
          </div>
          <div className="info-links">
            <h6>Info</h6>
            <nav>
              <ul>
                <li>
                  <a>Terms and conditions</a>
                </li>
                <li>
                  <a>Privacy policy</a>
                </li>
                <li>
                  <a>Guidelines</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="newsletter">
            <h6>Stay up to date!</h6>
            <input />
          </div>
        </TopSection>
        <BottomSection>
          <DownloadButton />
          {!isMobile && <Copyright />}
          <div className="social-links">
            <Image
              src={Instagram}
              alt="instagram"
              height={40}
              width={40}
              className="img-link"
            />
            <Image
              src={Twitterx}
              alt="twitter / x"
              height={40}
              width={40}
              className="img-link"
            />
          </div>
          {isMobile && <Copyright />}
        </BottomSection>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 32px ${({ theme }) => theme.pageOptions.padding.default};

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;

  .logo,
  .info-links,
  .newsletter {
    width: calc(100% / 3);
  }

  .logo {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h6 {
    font-size: 2rem;
  }

  .info-links {
    nav {
      font-weight: 300;

      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }

    .logo,
    .info-links,
    .newsletter {
      width: 100%;
    }
  `}
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .copyright,
  .social-links {
    width: calc(100% / 3);
  }

  .copyright {
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 32px;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;

      .copyright,
      .social-links {
        width: 100%;
      }

      .copyright {
        text-align: start;
      }

      .social-links {
        justify-content: flex-start;
      }
    }
  `}
`;
