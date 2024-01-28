import styled, { css } from "styled-components";

export const ListPage = styled.main`
  margin-top: 160px;
  padding-inline: 64px;
  max-height: calc(100vh - 525px);
  overflow-y: scroll;

  > div {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      padding: 96px 32px 32px;
      margin: 0;
      max-height: unset;
    }
  `}

  ol {
    counter-reset: item;
    list-style-type: none;
    font-size: 1.25rem;

    ${({ theme }) => css`
      @media ${theme.breakpoints.tablet} {
        padding: 0;
      }
    `}
  }

  .toc-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  ol ol {
    counter-reset: subitem;
  }

  ol > li {
    counter-increment: item;
  }

  ol > li:before {
    content: counter(item) ". ";
    font-size: 1.5rem;
    font-weight: 700;
    color: #e8115f;
  }

  ol > li > ol > li {
    counter-increment: subitem;
  }

  ol > li > ol > li:before {
    content: counter(item) "." counter(subitem) " ";
  }
`;
