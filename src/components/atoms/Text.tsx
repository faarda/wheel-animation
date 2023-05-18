import React from "react";
import cx from "classnames";

export enum TextColor {
  "white" = "white",
  "black" = "black",
  "primary" = "primary",
}

export enum TextWeight {
  "bold" = "bold",
  "normal" = "normal",
  "medium" = "medium",
}

export enum TextSize {
  "sm" = "sm",
  "md" = "md",
}

export interface TextProps {
  children: React.ReactNode;
  color?: TextColor;
  size?: TextSize;
  fontWeight?: TextWeight;
  className?: string;
}

const TextEl: React.FC<TextProps> = (props) => {
  const { children, color = "black", size = "sm", fontWeight = "medium", className } = props;
  return (
    <span className={cx("text", textColorMap[color], textSizeMap[size], textWeightMap[fontWeight], className)}>
      {children}
    </span>
  );
};

const textColorMap = {
  [TextColor.black]: "text--black",
  [TextColor.primary]: "text--primary",
  [TextColor.white]: "text--white",
};

const textWeightMap = {
  [TextWeight.bold]: "text--bold",
  [TextWeight.medium]: "text--medium",
  [TextWeight.normal]: "text--normal",
};

const textSizeMap = {
  [TextSize.md]: "text--md",
  [TextSize.sm]: "text--sm",
};

export default TextEl;
