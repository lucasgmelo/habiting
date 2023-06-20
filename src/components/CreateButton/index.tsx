import { FloatButton } from "antd";
import * as S from "./styles";
import { Add } from "@styled-icons/remix-line";

const CreateButton = () => (
  <S.Wrapper>
    <FloatButton icon={<Add />} type="primary" />
  </S.Wrapper>
);

export default CreateButton;
