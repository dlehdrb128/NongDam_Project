import styled, { css } from "styled-components";
import Theme from "../../../theme/theme";

export const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.ju || "center"};
  align-items: ${(props) => props.al};
  flex-direction: ${(props) => props.dir || "row"};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize || `${Theme.fontSize_40}`};
  font-family: ${(props) => props.fontFamily || "SCD-2"};
  color: ${(props) => props.color || `#525252`};
  flex: ${(props) => props.flex};
  border-radius: ${(props) => props.radius};
  border-right: ${(props) => props.borderRight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  cursor: ${(props) => props.cursor};

  ${(props) =>
    props.borderTop &&
    css`
      border-top: 1px solid #959595;
    `};

  ${(props) =>
    props.borderBottom &&
    css`
      border-bottom: 1px solid #959595;
    `};
`;

export const RsWrapper = styled.div`
  width: 1280px;
  height: ${(props) => props.height || `100%`};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.ju || "center"};
  align-items: ${(props) => props.al || "start"};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  margin: ${(props) => props.margin || "50px 0"};
  padding: ${(props) => props.padding || "0 150px"};

  @media (max-width: 700px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Text = styled.p`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  margin: ${(props) => props.margin || "0 0 5px 0"};
  font-size: ${(props) => props.fontSize || `1.5rem`};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};

  ${(props) =>
    props.cursor &&
    css`
      cursor: pointer;
      &:hover {
        color: #c5dfad;
      }
    `};
`;

export const Title = styled.p`
  color: #525252;
  font-size: 2rem;
  margin: 0 0 10px 0;
  font-family: ${(props) => props.fontFamily || "SCD-6"};
`;

export const OrderTitle = styled.div`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize || `1.5rem`};
  font-family: ${(props) => props.fontFamily || "SCD-6"};
`;

export const OrderContent = styled(OrderTitle)`
  font-family: ${(props) => props.fontFamily || "SCD-2"};
  font-size: 1.3rem;
`;

export const Imge = styled.img`
  background-position: center;
  width: 60px;
  height: 60px;
`;
