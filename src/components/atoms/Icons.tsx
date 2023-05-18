import React from "react";
import cx from "classnames";
import CameraIcon from "@/assets/svg/camera.svg";
import DeviceIcon from "@/assets/svg/device.svg";
import NavigationIcon from "@/assets/svg/navigation.svg";
import NoiseCancelIcon from "@/assets/svg/noise-cancel.svg";
import ShutterIcon from "@/assets/svg/shutter.svg";
import SoundIcon from "@/assets/svg/sound.svg";
import TravelIcon from "@/assets/svg/travel.svg";
import WaterDropIcon from "@/assets/svg/water-drop.svg";

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
  [IconType.NOISE_CANCELLATION]: NoiseCancelIcon(),
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
