import { FC, useEffect } from "react";
import { DatePicker, Form, Input, Select } from "antd";

import { TasksI } from "contexts/useActions/types";
import { useActions } from "contexts/useActions/useActions";

import * as S from "./styles";

interface EditModalI {
  open: boolean;
  closeModal: () => void;
  task: TasksI;
}

const EditModal: FC<EditModalI> = ({ open, task, closeModal }) => {
  const [form] = Form.useForm();
  const { user, getEpics } = useActions();

  const onFinish = (values: unknown) => {
    console.log(values);
    console.log("oii");
  };

  useEffect(() => {
    if (open) {
      getEpics();
      form.setFields([
        { name: "name", value: task.name },
        { name: "description", value: task.description },
      ]);
    }
  }, [open]);

  return (
    <S.Wrapper open={open} onCancel={closeModal} title="Editar tarefa">
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Nome"
          required
          rules={[
            {
              required: true,
              message: "Por favor, insira o nome da tarefa.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Descrição">
          <Input />
        </Form.Item>
        <p>Prazo atual: {task?.dueDate || "-"}</p>
        <Form.Item name="dueDate" label="Novo prazo">
          <DatePicker placeholder="Selecionar" />
        </Form.Item>
        <Form.Item name="epic" label="Épico">
          <Select options={user.epics} />
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};

export default EditModal;
