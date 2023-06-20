import CardIcon from "components/CardIcon";
import * as S from "./styles";
import { QuillPen, Seedling } from "@styled-icons/remix-fill";
import CustomTable from "components/CustomTable";
import { Progress } from "antd";
import { useActions } from "contexts/useActions/useActions";

type AlignType = "center" | "left" | "right";

const Goals = () => {
  const { user } = useActions();

  const dataSource = user.goals.map((goal, idx) => {
    return {
      key: idx + 1,
      name: goal.name,
      current: goal.current,
      goal: goal.total,
      progress: Number(((goal.current / goal.total) * 100).toFixed(2)),
    };
  });

  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Academia",
  //     current: 1,
  //     goal: 15,
  //     progress: Number(((1 / 15) * 100).toFixed(2)),
  //   },
  //   {
  //     key: "2",
  //     name: "Faxina",
  //     current: 1,
  //     goal: 4,
  //     progress: Number(((1 / 4) * 100).toFixed(2)),
  //   },
  //   {
  //     key: "3",
  //     name: "Ler Crianças Índigo",
  //     current: 50,
  //     goal: 177,
  //     progress: Number(((50 / 177) * 100).toFixed(2)),
  //   },
  //   {
  //     key: "4",
  //     name: "Tomar remédio corretamente",
  //     current: 1,
  //     goal: 31,
  //     progress: Number(((1 / 31) * 100).toFixed(2)),
  //   },
  //   {
  //     key: "5",
  //     name: "Não acumular tarefas - CIn",
  //     current: 1,
  //     goal: 31,
  //     progress: Number(((1 / 31) * 100).toFixed(2)),
  //   },
  //   {
  //     key: "6",
  //     name: "Bater ponto",
  //     current: 2,
  //     goal: 31,
  //     progress: Number(((2 / 31) * 100).toFixed(2)),
  //   },
  //   {
  //     key: "7",
  //     name: "3 refeições diárias",
  //     current: 1,
  //     goal: 31,
  //     progress: Number(((1 / 31) * 100).toFixed(2)),
  //   },
  // ];

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Atual",
      dataIndex: "current",
      key: "current",
    },
    {
      title: "Meta",
      dataIndex: "goal",
      key: "goal",
    },
    {
      title: "Progresso",
      dataIndex: "progress",
      key: "progress",
      render: (progress: number) => <Progress percent={progress} />,
    },
    {
      title: "Atualizar",
      dataIndex: "update",
      key: "update",
      render: (update: number) => (
        <S.Button>
          <QuillPen />
        </S.Button>
      ),
      align: "center" as AlignType,
      width: 64,
    },
  ];

  return (
    <S.Wrapper>
      <h1>Suas metas</h1>
      <h2>
        Monitore seus objetivos aqui. Essa categoria serve para acompanhar ações
        que possuem um marco tangível de finalização.
      </h2>
      <S.Grid>
        <CardIcon IconComponent={<Seedling />} bgColor="#32B768">
          <S.CardIconContent>
            <p>
              Você possui <span>{user.goals.length}</span> <br />
              metas cadastradas!
            </p>
            <p className="description">Planeje seus objetivos com cautela</p>
          </S.CardIconContent>
        </CardIcon>
        <S.ChartContainer />
        <CardIcon IconComponent={<Seedling />} bgColor="#32B768">
          <S.CardIconContent>
            <p>
              Você possui <span>{user.goals.length}</span> <br />
              metas cadastradas!
            </p>
            <p className="description">Planeje seus objetivos com cautela</p>
          </S.CardIconContent>
        </CardIcon>
      </S.Grid>

      <S.DetailsContainer>
        <h1>Detalhes</h1>

        <CustomTable columns={columns} dataSource={dataSource} />
      </S.DetailsContainer>
    </S.Wrapper>
  );
};

export default Goals;
