import { Add } from "@styled-icons/remix-line";
import { Dropdown, FloatButton, MenuProps } from "antd";
import CreateModal from "components/CreateModal";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import * as S from "./styles";

const CreateButton: FC = () => {
  const router = useRouter();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createMode, setCreateMode] = useState<
    "task" | "habit" | "goal" | "epic"
  >("task");

  if (
    router.pathname === "/perfil" ||
    router.pathname === "/cadastro" ||
    router.pathname === "/login"
  )
    return null;

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>Criar tarefa</p>,
      onClick: () => {
        setCreateMode("task");
        setIsCreateModalOpen(true);
      },
    },
    {
      key: "4",
      label: <p>Criar épico</p>,
      onClick: () => {
        setCreateMode("epic");
        setIsCreateModalOpen(true);
      },
    },
  ];

  return (
    <S.Wrapper>
      <Dropdown menu={{ items }} trigger={["click"]} placement="topLeft">
        <FloatButton icon={<Add />} type="primary" />
      </Dropdown>

      <CreateModal
        open={isCreateModalOpen}
        closeModal={() => setIsCreateModalOpen(false)}
        createMode={createMode}
      />
    </S.Wrapper>
  );
};

export default CreateButton;
