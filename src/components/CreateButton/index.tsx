import { FloatButton } from "antd";
import * as S from "./styles";
import { Add } from "@styled-icons/remix-line";
import { useRouter } from "next/router";

const CreateButton = () => {
  const router = useRouter();

  if (router.pathname === "/perfil") return null;

  return (
    <S.Wrapper>
      <FloatButton icon={<Add />} type="primary" />
    </S.Wrapper>
  );
};

export default CreateButton;
