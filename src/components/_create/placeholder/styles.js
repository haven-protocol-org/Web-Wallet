import styled from "styled-components";
import { background } from "../../../constants/colors.js";

export const Container = styled.div`
  height: 220px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.div`
  height: 180px;
  width: 100%;
  border: 1px dashed ${background};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: grey;
`;