import { FC } from "react";
import * as S from "./styles";

interface CreateModalI {
  open: boolean;
  closeModal: () => void;
  createMode: "task" | "goal" | "habit" | "epic";
}

const CreateModal: FC<CreateModalI> = ({ open, createMode, closeModal }) => (
  <S.Wrapper open={open} onCancel={closeModal}>
    <h1>{createMode}</h1>
  </S.Wrapper>
);

export default CreateModal;
