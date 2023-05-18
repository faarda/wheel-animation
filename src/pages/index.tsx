import Icons, { IconType } from "@/components/atoms/Icons";
import { FeatureBtnProps } from "@/components/molecules/FeatureBtn";
import { FeatureCardProps } from "@/components/molecules/FeatureCard";
import WheelSystem from "@/components/organisms/WheelSystem";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Wheel Animation App</title>
        <meta name="description" content="A wheel animation test app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-15 h-screen">
        <section className="container flex-centered h-full">
          <WheelSystem features={features} />
        </section>
      </main>
    </>
  );
};

export interface Feature {
  card: FeatureCardProps;
  btn: FeatureBtnProps;
  circleIndex: number;
  key: string;
}

const features: Feature[] = [
  {
    card: {
      icon: IconType.SHUTTER,
      advantage: "Capture Stunning, detailed photos and videos",
      iconLabel: "Shutter Icon",
      benefits: ["Preserve memories", "Create lasting impressions"],
      isActive: true,
    },
    btn: {
      icon: IconType.CAMERA,
      description: "High Resolution Camera",
      showDescBefore: false,
      iconLabel: "Camera Icon",
      isActive: true,
      label: "Camera feature button",
    },
    circleIndex: 1,
    key: "camera-resolution",
  },
  {
    card: {
      icon: IconType.SOUND,
      advantage: "Immerse yourself in pure, uninterrupted sound",
      iconLabel: "Volume On Icon",
      benefits: ["Block out background noise", "Enhance your productivity"],
      isActive: true,
    },
    btn: {
      icon: IconType.NOISE_CANCELLATION,
      description: "Noise Cancelling Technology",
      showDescBefore: false,
      iconLabel: "Volume off icon",
      isActive: true,
      label: "Noise cancellation feature button",
    },
    circleIndex: 2,
    key: "noise-cancellation",
  },
  {
    card: {
      icon: IconType.DEVICE,
      advantage: "Use the device worry-free in various environments",
      iconLabel: "Device Icon",
      benefits: ["Withstand water exposure", "Providing peace of mind"],
      isActive: true,
    },
    btn: {
      icon: IconType.WATER_DROP,
      description: "Waterproof Design",
      showDescBefore: false,
      iconLabel: "Water drop icon",
      isActive: true,
      label: "Waterproof feature button",
    },
    circleIndex: 4,
    key: "waterproof",
  },
  {
    card: {
      icon: IconType.TRAVEL,
      advantage: "Easily find your way to any destination",
      iconLabel: "Path icon",
      benefits: ["Seamlessly navigate", "Save time, reduce stress"],
      isActive: true,
    },
    btn: {
      icon: IconType.NAVIGATION,
      description: "GPS Navigation System",
      showDescBefore: false,
      iconLabel: "Wheel icon",
      isActive: true,
      label: "GPS navigation feature button",
    },
    circleIndex: 3,
    key: "gps-navigation",
  },
];

export default Home;
