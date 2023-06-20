import Checkbox from "components/Checkbox";
import * as S from "./styles";
import { useState } from "react";

const TaskCard = () => {
  const [checked, setChecked] = useState(false);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <S.Wrapper checked={checked}>
      <p className="deadline">até 10/06</p>
      <S.Group>
        <Checkbox checked={checked} onChange={onCheck} />
        <p>Marcar psicóloga</p>
      </S.Group>
      <p>Ligar e tentar marcar na Segunda, às 16h ou na Terça, às 14h.</p>
    </S.Wrapper>
  );
};

export default TaskCard;
