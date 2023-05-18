import React, { useEffect, useMemo, useState } from "react";
import FeatureCard, { FeatureCardProps } from "../molecules/FeatureCard";
import { IconType } from "../atoms";
import FeatureBtn, { FeatureBtnProps } from "../molecules/FeatureBtn";
import { calculateShortestMoves, chunkArray, reorderArray } from "@/assets/js/utils";
import { Feature } from "@/pages";

interface WheelSystemProps {
  features: Feature[];
}

const WheelSystem: React.FC<WheelSystemProps> = (props) => {
  const { features } = props;
  const [rotation, setRotation] = useState(45);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [featurePositionTracker, setFeaturePositionTracker] = useState<string[]>([]); //this tracks the position of the feature on the wheel - ordered clockwise

  const chunkedFeatures = useMemo(() => chunkArray(features, 2), []);

  useEffect(() => {
    setFeaturePositionTracker([...features].sort((a, b) => a.circleIndex - b.circleIndex).map((f) => f.key));
  }, []);

  useEffect(() => {
    if (featurePositionTracker.length < 1) return;
    const index = featurePositionTracker.indexOf(activeFeature ?? features[0].key);
    const shortestMoves = calculateShortestMoves(featurePositionTracker, index);

    setRotation(rotation + shortestMoves * ROTATION_UNIT);
    setFeaturePositionTracker(reorderArray(featurePositionTracker, index));
  }, [activeFeature]);

  const btnIsActive = (key: string) => activeFeature === key || !activeFeature; //determines if a button is rendered as active
  const showTextBefore = (key: string) => featurePositionTracker[features.length - 1] === key; //the text should appear before icon if the feature is the last on the wheel

  return (
    <div className="wheel-system w-full">
      <div className="flex-centered">
        <div
          className="wheel bg-"
          style={
            {
              "--button-width": `${BUTTON_WIDTH}px`,
              "--wheel-width": `${WHEEL_WIDTH}px`,
              "--rotate-angle": `${rotation}deg`,
            } as React.CSSProperties
          }
        >
          {chunkedFeatures.map((f, i) => (
            <div className="wheel__section flex-between-centered" key={i}>
              {f.map((feature, index) => (
                <FeatureBtn
                  {...feature.btn}
                  isActive={btnIsActive(feature.key)}
                  buttonWidth={BUTTON_WIDTH}
                  showDescBefore={showTextBefore(feature.key)}
                  key={feature.key}
                  onClick={() => setActiveFeature(feature.key)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="cards">
        {[...features]
          .sort((a, b) => a.circleIndex - b.circleIndex)
          .map((feature, index) => (
            <FeatureCard {...feature.card} isActive={activeFeature === feature.key} key={feature.key} />
          ))}
      </div>
    </div>
  );
};

const BUTTON_WIDTH = 90;
const WHEEL_WIDTH = 162;
const ROTATION_UNIT = 90;

export default WheelSystem;
