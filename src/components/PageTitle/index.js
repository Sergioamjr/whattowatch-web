import styled from "styled-components";

interface PageTitleType {
  left?: number;
  top?: number;
}

const PageTitle: PageTitleType = styled.h2`
  font-weight: bold;
  font-size: 5em;
  position: absolute;
  color: #38416b;
  top: ${({ top }: PageTitleType) => `${top}px`};
  left: ${({ left }: PageTitleType) => `${left}px`};
  transform: rotate(-90deg);
`;

export default PageTitle;
