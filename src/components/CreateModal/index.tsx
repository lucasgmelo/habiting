import { FC, Fragment, useState } from "react";
import * as S from "./styles";
import { Button, Checkbox, DatePicker, Form, Input, message } from "antd";
import { useActions } from "contexts/useActions/useActions";

interface CreateModalI {
  open: boolean;
  closeModal: () => void;
  createMode: "task" | "goal" | "habit" | "epic";
}

const CreateModal: FC<CreateModalI> = ({ open, createMode, closeModal }) => {
  const [form] = Form.useForm();
  const { createTask, user } = useActions();
  const [createAnother, setCreateAnother] = useState(false);
  const dateFormat = "DD/MM/YYYY";

  const onSubmitTask = (values: {
    taskname: string;
    description: string;
    deadline: string;
    another: boolean;
  }) => {
    console.log(values);
    createTask(values.taskname, values.description, values.deadline);
    form.resetFields();
    if (!createAnother) {
      closeModal();
      message.success("Tarefa criada com sucesso!");
    }
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
                {
                  message: "Já existe uma tarefa com esse nome",
                  validator: (_: unknown, value: string) => {
                    if (user.tasks.find((task) => task.name === value)) {
                      return Promise.reject();
                    }

                    return Promise.resolve();
                  },
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
              <Checkbox
                checked={createAnother}
                onChange={() => setCreateAnother(!createAnother)}
              >
                Criar outra tarefa
              </Checkbox>
              <div className="buttons">
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
