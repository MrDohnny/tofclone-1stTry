import { Character } from "./parts/character";
import { MagicCircle } from "./parts/circle";
import { Particles } from "./parts/particles";
import * as S from "./styles";
export const Evolution = () => {
  return (
    <S.container>
      <Particles />
      <MagicCircle />
      <Character />
    </S.container>
  );
};
