// LottieAnimation.js
import { useLottie } from "lottie-react";
import animation2 from "../../assets/Animation - 1702322922746.json";

const LottieAnimation = () => {
  const options = {
    animationData: animation2,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LottieAnimation;
