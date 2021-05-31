import styled from "styled-components";
import TriangleSVG from "../images/triangle.svg";

export const Circle = styled.div`
  width: ${(props) => props.width || "18px"};
  height: ${(props) => props.height || "18px"};

  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  background-color: ${(props) => props.backgroundColor || ""};
  border: 2px solid ${(props) => props.borderColor || "#4550a7"};
  border-radius: 100%;
`;

export const Rectangle = styled.div`
  width: ${(props) => props.width || "46px"};
  height: ${(props) => props.height || "4px"};

  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  background-color: ${(props) => props.backgroundColor || "#ec6374"};

  transform: ${(props) => props.transform || "rotate(14deg)"};
`;

export const Triangle = styled.div`
  width: ${(props) => props.width || "32px"};
  height: ${(props) => props.height || "28px"};

  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  background-image: url(${TriangleSVG});

  transform: ${(props) => props.transform || "rotate(0deg)"};
`;

export const Image = styled.img`
  width: ${(props) => props.width || "127px"};
  height: ${(props) => props.height || "127px"};

  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zindex || 0} !important;

  transform: ${(props) => props.transform || "rotate(0deg)"};
`;
