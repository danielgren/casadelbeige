import * as React from "react";
import styled from "styled-components";
import { ColorTypes, getColor } from "../design/colors";

const textSizes = {
  xs: "12px",
  s: "14px",
  m: "16px",
  l: "18px",
  xl: "24px",
  xxl: "32px",
};

type Props = {
  children: React.ReactNode;
  color?: ColorTypes;
  size?: keyof typeof textSizes;
};

type TextCompProps = {
  textColor: ColorTypes;
  size: keyof typeof textSizes;
};

const TextComponent = styled.p<TextCompProps>`
  color: ${(p) => getColor(p.textColor)};
  font-size: ${(p) => textSizes[p.size]};
`;

export default function Text({
  children,
  color = "text",
  size = "m",
}: Props): JSX.Element {
  return (
    <TextComponent textColor={color} size={size}>
      {children}
    </TextComponent>
  );
}
