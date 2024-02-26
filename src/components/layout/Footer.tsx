import styled, { css } from "styled-components";
import { DownloadButton } from "@/components/Button";
import { Input } from "@/components/Input";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Instagram from "@/assets/instagram.svg";
import Twitterx from "@/assets/twitterx.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import theme from "@/styles/theme";
import { sf } from "@/pages";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery(theme.breakpoints.tablet);

  const Copyright = () => (
    <div className="copyright">
      <p>Copyright © {currentYear}</p>
      <p>Blastit inc. all rights reserved</p>
    </div>
  );

  return (
    <FooterContainer className={sf.className}>
      <div>
        <div className="logo">
          <Image src={Logo} alt="blast" height={150} width={150} />
        </div>
        <div className="info-links">
          <h6>Info</h6>
          <nav>
            <ul>
              <li>
                <Link href="terms-and-conditions">Terms and conditions</Link>
              </li>
              <li>
                <Link href="privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link href="guidelines">Guidelines</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="newsletter">
          <h6>Stay up to date!</h6>
          <InputContainer>
            <Input $withButton placeholder="Sign me up!" />
            <InputButton type="button">Submit</InputButton>
          </InputContainer>
        </div>
        <div className="button-container">
          <DownloadButton />
        </div>
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
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 32px ${({ theme }) => theme.pageOptions.padding.default};
  background-color: #1b0a44;

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;

    ${({ theme }) => css`
      @media ${theme.breakpoints.tablet} {
        grid-template-columns: repeat(1, 1fr);
        gap: 32px;
      }
    `}
  }

  .logo,
  .info-links,
  .copyright,
  .button-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h6 {
    font-size: 2rem;
  }

  .newsletter {
    h6 {
      margin-bottom: 16px;
    }

    ${({ theme }) => css`
      @media ${theme.breakpoints.tablet} {
        text-align: center;
      }
    `}
  }

  .info-links {
    nav {
      font-weight: 300;
      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputButton = styled.button`
  position: absolute;
  inset-inline-end: 4px;
  top: 50%;
  transform: translateY(-50%);
  height: calc(100% - 8px);
  border: 0;
  color: #f7f7f7;
  font-size: 18px;
  background: linear-gradient(250deg, #250d5f40 0%, #4d22b2 100%);
  border-radius: 6.125px;
  padding-inline: 12px;
  cursor: pointer;
`;
