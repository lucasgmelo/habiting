import Checkbox from "components/Checkbox";
import * as S from "./styles";

const TaskCard = () => (
  <S.Wrapper>
    <p className="deadline">até 10/06</p>
    <S.Group>
      <Checkbox />
      <p>Marcar psicóloga</p>
    </S.Group>
    <p>Ligar e tentar marcar na Segunda, às 16h ou na Terça, às 14h.</p>
  </S.Wrapper>
);

export default TaskCard;
