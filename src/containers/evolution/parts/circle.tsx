import { rotateAnimation } from "src/styles/animations";
import * as S from "./styles";

export const MagicCircle = () => {
  return (
    <S.circleWrapper>
      <S.backgroundImage
        mobile={{ img: "/Evolution/Circles/circle(1).png", objFit: "cover" }}
        tablet={{ img: "/Evolution/Circles/circle(1).png", objFit: "cover" }}
        desktop={{ img: "/Evolution/Circles/circle(1).png", objFit: "cover" }}
        imgCss={{ animation: `${rotateAnimation} 10s linear infinite`}}
      />
    </S.circleWrapper>
  );
};
