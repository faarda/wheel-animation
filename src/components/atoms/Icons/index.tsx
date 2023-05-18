import React from "react";
import cx from "classnames";

import {
  CameraIcon,
  NavigationIcon,
  NoiseCancellationIcon,
  TravelIcon,
  DeviceIcon,
  SoundIcon,
  WaterDropIcon,
  ShutterIcon,
} from "./SolidIcons";

export interface IconProps {
  type: IconType;
  width?: number;
  height?: number;
  className?: string;
  color?: "primary" | "white";
  label?: string;
  style?: React.CSSProperties;
}

const Icons: React.FC<IconProps> = (props) => {
  const { type, width, height, className, color, label, style } = props;
  return (
    <figure
      aria-label={label}
      className={cx(className, iconColorMap[color ?? "primary"])}
      style={{ width: `${width}px`, height: `${height}px`, ...style }}
      role="img"
    >
      {iconTypeMap[type]}
    </figure>
  );
};

export enum IconType {
  CAMERA = "CAMERA",
  DEVICE = "DEVICE",
  NAVIGATION = "NAVIGATION",
  NOISE_CANCELLATION = "NOISE_CANCELLATION",
  SHUTTER = "SHUTTER",
  SOUND = "SOUND",
  TRAVEL = "TRAVEL",
  WATER_DROP = "WATER_DROP",
}

const iconTypeMap = {
  [IconType.CAMERA]: CameraIcon(),
  [IconType.DEVICE]: DeviceIcon(),
  [IconType.NAVIGATION]: NavigationIcon(),
  [IconType.NOISE_CANCELLATION]: NoiseCancellationIcon(),
  [IconType.SHUTTER]: ShutterIcon(),
  [IconType.SOUND]: SoundIcon(),
  [IconType.TRAVEL]: TravelIcon(),
  [IconType.WATER_DROP]: WaterDropIcon(),
};

const iconColorMap = {
  primary: "text--primary",
  white: "text--white",
};

export default Icons;
