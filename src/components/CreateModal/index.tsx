import { FC, Fragment } from "react";
import * as S from "./styles";
import { Button, DatePicker, Form, Input } from "antd";
import { useActions } from "contexts/useActions/useActions";

interface CreateModalI {
  open: boolean;
  closeModal: () => void;
  createMode: "task" | "goal" | "habit" | "epic";
}

const CreateModal: FC<CreateModalI> = ({ open, createMode, closeModal }) => {
  const [form] = Form.useForm();
  const { createTask } = useActions();
  const dateFormat = "DD/MM/YYYY";

  const onSubmitTask = (values: {
    taskname: string;
    description: string;
    deadline: string;
  }) => {
    createTask(values.taskname, values.description, values.deadline);
    closeModal();
  };

  const renderContent = () => {
    if (createMode === "task")
      return (
        <Fragment>
          <h1>Criar tarefa</h1>
          <h3>
            Ideal para ações únicas e/ou de curto prazo. ex: comprar pilha,
            fazer atividade de matemática, organizar o guarda-roupa...
          </h3>

          <Form layout="vertical" form={form} onFinish={onSubmitTask}>
            <Form.Item
              label="Nome"
              name="taskname"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome da tarefa.",
                },
              ]}
            >
              <Input placeholder="Nome da tarefa" />
            </Form.Item>

            <Form.Item label="Descrição" name="description">
              <Input placeholder="Descrição da tarefa (opcional)" />
            </Form.Item>

            <Form.Item label="Prazo final" name="deadline">
              <DatePicker placeholder="Selecionar data" format={dateFormat} />
            </Form.Item>

            <div className="footer">
              <Button
                onClick={() => {
                  form.resetFields();
                  closeModal();
                }}
              >
                Cancelar
              </Button>
              <Button htmlType="submit" type="primary">
                Criar
              </Button>
            </div>
          </Form>
        </Fragment>
      );
  };

  return (
    <S.Wrapper
      open={open}
      onCancel={closeModal}
      cancelText="Cancelar"
      footer={null}
    >
      {renderContent()}
    </S.Wrapper>
  );
};

export default CreateModal;
