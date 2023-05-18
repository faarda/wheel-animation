import React from "react";
import { IconProps, IconType, TextProps } from "../atoms";
import Icons from "../atoms/Icons";
import TextEl from "../atoms/Text";
import cx from "classnames";

export interface FeatureCardProps extends React.HTMLProps<HTMLDivElement> {
  icon: IconType;
  iconLabel: string;
  advantage: string;
  benefits: [string, string];
  isActive: boolean;
  // testId?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { icon, advantage, benefits, isActive, iconLabel, ...otherProps } = props;

  return (
    <article {...otherProps} className={cx("feature-card", { "feature-card--active": isActive })}>
      <div className="feature-card__inner">
        <Icons color="primary" type={icon} className="feature-card__icon" label={iconLabel} />
        <TextEl className="feature-card__text">{advantage}</TextEl>
      </div>
      <ul className="feature-card__benefits">
        {benefits.map((value, index) => (
          <li key={index}>
            <TextEl>{value}</TextEl>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FeatureCard;
