import React, { useEffect } from "react";
import { IconType } from "../atoms";
import Icons from "../atoms/Icons";
import TextEl from "../atoms/Text";
import cx from "classnames";

export interface FeatureBtnProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  icon: IconType;
  iconLabel: string;
  description: string;
  isActive?: boolean;
  showDescBefore?: boolean;
  buttonWidth?: number;
  // onClick: (e: React.MouseEvent) => void;
}

const FeatureBtn: React.FC<FeatureBtnProps> = (props) => {
  const {
    label,
    icon,
    iconLabel,
    description,
    isActive = true,
    showDescBefore = false,
    onClick,
    ...extraProps
  } = props;

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const wheel = document.querySelector(".wheel");
    wheel?.classList.add("hide-descriptions");

    setTimeout(() => {
      wheel?.classList.remove("hide-descriptions");
    }, 1000);

    setTimeout(() => {
      onClick && onClick(e);
    }, 250);
  };

  return (
    <button aria-label={label} className="feature-btn" onClick={handleBtnClick} {...extraProps} role="button">
      <div className={cx("feature-btn__circle", { "feature-btn__circle--inactive": !isActive })}>
        <div className="feature-btn__circle__inner  flex-centered">
          <Icons type={icon} style={{ width: "36%" }} color="white" label={iconLabel} />
        </div>
      </div>
      <TextEl className={cx("feature-btn__description", { "feature-btn__description--show-before": showDescBefore })}>
        {description}
      </TextEl>
    </button>
  );
};

export default FeatureBtn;
