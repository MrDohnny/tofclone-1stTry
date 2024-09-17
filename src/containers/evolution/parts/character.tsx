import { rotateAnimation } from "src/styles/animations";
import * as S from "./styles";
export const Character = () => {
    return (
        <S.characterWrapper>
          <S.backgroundImage
            mobile={{ img: "/Evolution/Characters/vrau.png", objFit: "cover" }}
            tablet={{ img: "/Evolution/Characters/vrau.png", objFit: "cover" }}
            desktop={{ img: "/Evolution/Characters/vrau.png", objFit: "cover" }}
            // imgCss={{ animation: `${rotateAnimation} 10s linear infinite`}}
          />
        </S.characterWrapper>
      );
}