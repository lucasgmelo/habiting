import { FC, Fragment, useState } from "react";
import * as S from "./styles";
import { Button, Checkbox, DatePicker, Form, Input, message } from "antd";
import { useActions } from "contexts/useActions/useActions";
import { dateFromIsoToApi, formatStringToDeadline } from "utils/formatters";
import { ArrowRight } from "@styled-icons/remix-line";

interface CreateModalI {
  open: boolean;
  closeModal: () => void;
  createMode: "task" | "goal" | "habit" | "epic";
}

const CreateModal: FC<CreateModalI> = ({ open, createMode, closeModal }) => {
  const [form] = Form.useForm();
  const {
    createTask,
    createEpic,
    loadingCreatingTask,
    loadingCreatingEpic,
    user,
  } = useActions();
  const [createAnother, setCreateAnother] = useState(false);
  const dateFormat = "DD/MM/YYYY";

  const onSubmitTask = (values: {
    taskname: string;
    description: string;
    deadline: { ["$d"]: Date };
    another: boolean;
  }) => {
    createTask(
      values.taskname,
      values.description,
      dateFromIsoToApi(values.deadline["$d"].toISOString())
    );
    form.resetFields();
    if (!createAnother) {
      closeModal();
      message.success("Tarefa criada com sucesso!");
    }
  };

  const onSubmitEpic = (values: {
    taskname: string;
    description: string;
    deadline: string;
    another: boolean;
  }) => {
    createEpic(values.taskname, values.description);
    console.log(values);

    form.resetFields();
    if (!createAnother) {
      closeModal();
      message.success("Épico criado com sucesso!");
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
              <DatePicker placeholder="Selecionar data" />
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
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={loadingCreatingTask}
                >
                  Criar
                </Button>
              </div>
            </div>
          </Form>
        </Fragment>
      );

    if (createMode === "epic")
      return (
        <Fragment>
          <h1>Criar épico</h1>
          <h3>
            Específico para agrupar tarefas e acompanhar o progresso de um
            grande objetivo
          </h3>

          <Form layout="vertical" form={form} onFinish={onSubmitEpic}>
            <Form.Item
              label="Nome"
              name="taskname"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome do épico.",
                },
                {
                  message: "Já existe um épico com esse nome",
                  validator: (_: unknown, value: string) => {
                    if (user.tasks.find((task) => task.name === value)) {
                      return Promise.reject();
                    }

                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="Nome do épico" />
            </Form.Item>

            <Form.Item label="Descrição" name="description">
              <Input placeholder="Descrição do épico (opcional)" />
            </Form.Item>

            <Form.Item label="Prazo final" name="deadline">
              <DatePicker placeholder="Selecionar data" format={dateFormat} />
            </Form.Item>

            <h1>Vincular tarefas ao épico</h1>
            <h3>
              Adicione tarefas existentes a esse épico, você também pode fazer
              isso mais tarde. Cada tarefa só pode pertencer a um épico.
            </h3>

            <S.Columns>
              <div>
                <p>Adicionadas</p>
                <S.TaskContainer>
                  <S.Task>
                    <div>
                      <p>teste</p>
                      <p>123</p>
                    </div>
                    <S.ArrowButton included type="button">
                      <ArrowRight size={16} />
                    </S.ArrowButton>
                  </S.Task>
                  <S.Task>
                    <div>
                      <p>teste</p>
                      <p>123</p>
                    </div>
                    <S.ArrowButton included type="button">
                      <ArrowRight size={16} />
                    </S.ArrowButton>
                  </S.Task>
                </S.TaskContainer>
              </div>
              <div>
                <p>Disponíveis</p>
                <S.TaskContainer>
                  <S.Task>
                    <div>
                      <p>teste</p>
                      <p>123</p>
                    </div>
                    <S.ArrowButton included={false} type="button">
                      <ArrowRight size={16} />
                    </S.ArrowButton>
                  </S.Task>
                </S.TaskContainer>
              </div>
            </S.Columns>

            <div className="footer">
              <Checkbox
                checked={createAnother}
                onChange={() => setCreateAnother(!createAnother)}
              >
                Criar outro épico
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
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={loadingCreatingEpic}
                >
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
      width={600}
    >
      {renderContent()}
    </S.Wrapper>
  );
};

export default CreateModal;
