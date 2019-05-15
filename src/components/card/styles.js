import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "../../constants/media.js";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #2b2e32;
  border: 1px solid #3a4048;
  border-radius: 4px;
  text-decoration: none;
  height: auto;
  transition: 500ms;

  &:hover {
    cursor: pointer;
    background: #2b2e32;
    border: 1px solid #3a4048;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition: 500ms;
  }

  ${media.laptop`
    grid-column: 1 / 3;
  `};
`;

export const Title = styled.div`
  font-family: Inter-Bold;

  font-size: 17px;
  color: white;
  letter-spacing: 0;
  line-height: 30px;
  text-align: ${props => (props.left ? "left" : "right")};
`;

export const Subtitle = styled.div`
  font-family: Inter-Regular;
  font-size: 14px;
  color: #8a8d90;
  letter-spacing: 0;
  line-height: 24px;
  text-align: ${props => (props.left ? "left" : "right")};
`;

export const Header = styled.div`
  height: auto;
  width: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #3a4048;
`;

export const Graph = styled.div`
  height: 0;
  padding-top: 56.25%;
  width: auto;
`;

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #3a4048;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Route = styled(Link)`
  font-family: Inter-Regular;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  text-decoration: none;
  line-height: 25px;
  text-align: ${props => (props.left ? "left" : "right")};
`;
