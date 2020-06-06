import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const getSmWidth = ({ sm, xs }: Props): string => {
  if (sm) {
    return `width: ${(sm / 12) * 100}%`;
  } else if (xs) {
    return `width: ${(xs / 12) * 100}%`;
  }
  return "width: 100%";
};

const getMdWidth = ({ md, sm, xs }: Props): string => {
  if (md) {
    return `width: ${(md / 12) * 100}%`;
  } else if (sm) {
    return `width: ${(sm / 12) * 100}%`;
  } else if (xs) {
    return `width: ${(xs / 12) * 100}%`;
  }
  return "width: 100%";
};

const getLgWidth = ({ md, sm, xs, lg }: Props): string => {
  if (lg) {
    return `width: ${(lg / 12) * 100}%`;
  } else if (md) {
    return `width: ${(md / 12) * 100}%`;
  } else if (sm) {
    return `width: ${(sm / 12) * 100}%`;
  } else if (xs) {
    return `width: ${(xs / 12) * 100}%`;
  }
  return "width: 100%";
};
const getXlWidth = ({ md, sm, xs, lg, xl }: Props): string => {
  if (xl) {
    return `width: ${(xl / 12) * 100}%`;
  } else if (lg) {
    return `width: ${(lg / 12) * 100}%`;
  } else if (md) {
    return `width: ${(md / 12) * 100}%`;
  } else if (sm) {
    return `width: ${(sm / 12) * 100}%`;
  } else if (xs) {
    return `width: ${(xs / 12) * 100}%`;
  }
  return "width: 100%";
};

export const Row = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  width: ${(props: Props) => (props.xs ? `${(props.xs / 12) * 100}%` : "100%")};
  @media screen and (min-width: 768px) {
    ${(props: Props) => getSmWidth(props)};
  @media screen and (min-width: 992px) {
    ${(props: Props) => getMdWidth(props)};
  @media screen and (min-width: 1024px) {
    ${(props: Props) => getLgWidth(props)};
    @media screen and (min-width: 1400px) {
      ${(props: Props) => getXlWidth(props)};
`;
