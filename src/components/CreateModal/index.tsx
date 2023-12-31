import { FC, Fragment, useEffect, useState } from "react";
import * as S from "./styles";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  message,
} from "antd";
import { useActions } from "contexts/useActions/useActions";
import { dateFromIsoToApi, formatStringToDeadline } from "utils/formatters";
import { ArrowRight } from "@styled-icons/remix-line";
import { TasksI } from "contexts/useActions/types";

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
    getTasks,
    getEpics,
    loadingCreatingTask,
    loadingCreatingEpic,
    user,
  } = useActions();
  const [createAnother, setCreateAnother] = useState(false);
  const dateFormat = "DD/MM/YYYY";

  const [currentEpic, setCurrentEpic] = useState("");
  const [tasksInEpic, setTasksInEpic] = useState(
    user.tasks.filter((task) => task.epicId === currentEpic)
  );
  const [tasksAvailable, setTasksAvailable] = useState<TasksI[]>(
    user.tasks.filter((task) => !tasksInEpic.includes(task))
  );

  const addNewTaskInEpic = (newTask: TasksI) => {
    setTasksInEpic([...tasksInEpic, newTask]);
    setTasksAvailable(tasksAvailable.filter((task) => task.id !== newTask.id));
  };

  const removeNewTaskInEpic = (deleteTask: TasksI) => {
    const newTasks = tasksInEpic.filter((task) => task.id === deleteTask.id);

    setTasksInEpic(newTasks);
    setTasksAvailable(user.tasks.filter((task) => !newTasks.includes(task)));
  };

  useEffect(() => {
    if (open) {
      getTasks();
    }
    if (!open) {
      setTasksInEpic([]);
      setTasksAvailable(user.tasks);
    }
  }, [open]);

  const onSubmitTask = (values: {
    taskname: string;
    description: string;
    deadline: { ["$d"]: Date };
    another: boolean;
  }) => {
    createTask(
      values.taskname,
      values.description,

      values.deadline && dateFromIsoToApi(values.deadline["$d"].toISOString())
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
    const tasksInEpicDone = tasksInEpic.filter(
      (task) => task.inProgress === true
    );

    createEpic(
      values.taskname,
      values.description,
      tasksInEpicDone.length,
      tasksInEpic.length
    );

    form.resetFields();
    if (!createAnother) {
      closeModal();
      message.success("Épico criado com sucesso!");
    }
  };

  const selectOptions = user.epics.map((epic) => {
    return {
      value: epic.name,
      label: epic.name,
    };
  });

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

            <Form.Item
              label="Descrição"
              name="description"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira a descrição da tarefa.",
                },
              ]}
            >
              <Input placeholder="Descrição da tarefa" />
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
              <Input
                placeholder="Nome do épico"
                onChange={(event) => setCurrentEpic(event.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Descrição"
              name="description"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome do épico.",
                },
              ]}
            >
              <Input placeholder="Descrição do épico" />
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
                  {tasksInEpic.map((task) => (
                    <S.Task>
                      <div>
                        <p>{task.name}</p>
                        <p>{task.description}</p>
                      </div>
                      <S.ArrowButton
                        included
                        type="button"
                        onClick={() => removeNewTaskInEpic(task)}
                      >
                        <ArrowRight size={16} />
                      </S.ArrowButton>
                    </S.Task>
                  ))}
                </S.TaskContainer>
              </div>
              <div>
                <p>Disponíveis</p>
                <S.TaskContainer>
                  {tasksAvailable.map((task) => (
                    <S.Task>
                      <div>
                        <p>{task.name}</p>
                        <p>{task.description}</p>
                      </div>
                      <S.ArrowButton
                        included={false}
                        type="button"
                        onClick={() => addNewTaskInEpic(task)}
                      >
                        <ArrowRight size={16} />
                      </S.ArrowButton>
                    </S.Task>
                  ))}
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
      onCancel={() => {
        form.resetFields();
        closeModal();
      }}
      cancelText="Cancelar"
      footer={null}
      width={600}
    >
      {renderContent()}
    </S.Wrapper>
  );
};

export default CreateModal;
