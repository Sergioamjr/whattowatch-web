import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

export const Rating = styled.span`
  padding: 0px 10px;
  color: #fff;
  top: 279px;
  right: 3px;
  background: #40826d;
  border-radius: 10px;
  font-size: 0.9em;
  position: absolute;
`;

export const Img = styled.img`
  object-fit: unset;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Info = styled.p`
  color: #40826d;
  margin-bottom: 5px;
  font-size: 0.8em;
  white-space: pre;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Title = styled.p`
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: bold;
`;

export const Note = styled.span`
  position: absolute;
  bottom: 15px;
  right: 5px;
  background: #38416b;
  font-size: 0.8rem;
  padding: 3px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 1px #0f142b;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;
