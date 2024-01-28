import { sf } from "@/pages/index";
import Invite from "@/components/Invite";
import styled from "styled-components";
import { css } from "styled-components";

export default function table() {
  return (
    <Main className={sf.className}>
      <Invite />
    </Main>
  );
}

const Main = styled.main`
  padding-top: 192px;

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 0;
    }
  `}
`;
