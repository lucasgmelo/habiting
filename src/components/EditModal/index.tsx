import { FC, useEffect } from "react";
import { Button, DatePicker, Form, Input, Select, message } from "antd";

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
  const { user, loadingUpdateTask, getEpics, updateTask, getTasks } =
    useActions();

  const onFinish = async (values: {
    name: string;
    description: string;
    dueDate: string;
    epic: string;
  }) => {
    const updated = await updateTask({
      id: task.id,
      name: values.name,
      description: values.description,
      inProgress: task.inProgress,
      dueDate: values.dueDate,
      epic: values.epic,
    });

    if (updated) {
      getTasks();
      closeModal();
      return message.success("Editado com sucesso!");
    }

    return message.error("Não foi possível editar");
  };

  useEffect(() => {
    if (open) {
      getEpics();
      form.setFields([
        { name: "name", value: task.name },
        { name: "description", value: task.description },
        { name: "dueDate", value: task.dueDate },
      ]);
    }
  }, [open]);

  return (
    <S.Wrapper
      open={open}
      onCancel={closeModal}
      title="Editar tarefa"
      footer={[
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => form.submit()}
          loading={loadingUpdateTask}
        >
          OK
        </Button>,
      ]}
    >
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
