import styled from "styled-components";
const Theme = {
  green: "rgba(128,195,66,1)",
  lightgray: "rgba(192,192,192,1)",
  gray: "rgba(149,149,149,1)",
  lightblack: "rgba(82,82,82,1)",
  white: "rgba(242,242,242,1)",
  orange: "rgba(243,152,0,1)",
  red: "rgba(255,0,0,1)",
  black: "rgba(0, 0, 0, 1)",
  realWhite: "rgba(255, 255, 255, 1)",

  fontSize_60: "6rem",
  fontSize_50: "5rem",
  fontSize_40: "4rem",
  fontSize_30: "3rem",
  fontSize_25: "2.5rem",
  fontSize_20: "2rem",
  btnTransition: "ease-in 0.3s",
};

const StyledButton = styled.button`
  color: ${(props) => props.color || Theme.realWhite};
  font-size: ${(props) => props.fs};
  font-family: ${(props) => props.fontFamily || "YANGJIN"};
  background: ${(props) => props.bg || Theme.green};
  width: ${(props) => props.wd};
  height: ${(props) => props.ht};
  border: ${(props) => props.border || "none"};
  border-radius: 1rem;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.1);
  transition: ${Theme.btnTransition};
  cursor: pointer;
  &:hover {
    background: ${Theme.orange};
  }
`;

// & a {
//     &:link {
//       text-decoration: none;
//       color: ${Theme.lightblack};
//     }
//     &:visited {
//       text-decoration: none;
//       color: ${Theme.lightblack};
//     }
//     &:active {
//       text-decoration: none;
//       color: ${Theme.lightblack};
//     }

//     &:hover {
//       cursor: pointer;
//       color: ${Theme.green};
//     }

export { Theme, StyledButton };
export default Theme;
