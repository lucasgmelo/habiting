import Logo from "components/Logo";
import * as S from "./styles";

import { Button, Form, Input } from "antd";
import Link from "next/dist/client/link";

import { GoogleLogo } from "./assets/google";

import { useGoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const responseGoogle = (response: unknown) => {
    console.log(response);
    // Manipule a resposta recebida do Google aqui (por exemplo, envie para o servidor Spring Boot).
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const onSubmit = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log(values);
  };

  console.log(process.env);

  return (
    <S.Wrapper>
      <S.FormContainer>
        <Logo />
        <h1>Comece agora</h1>
        <p>Crie uma conta para continuar</p>
        <S.Container>
          <S.Buttons>
            <Button block size="large" onClick={login}>
              <GoogleLogo />
              Cadastrar com o Google
            </Button>
          </S.Buttons>
          <S.Divider>
            <span /> <p>ou</p> <span />
          </S.Divider>
          <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
              name="name"
              label="Nome"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o seu nome.",
                },
              ]}
            >
              <Input placeholder="Insira o seu nome" size="large" />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o seu e-mail.",
                },
              ]}
            >
              <Input placeholder="Insira o seu e-mail" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Senha"
              required
              rules={[
                {
                  required: true,
                  message: "Por favor, insira a sua senha.",
                },
              ]}
            >
              <Input placeholder="Insira a seu senha" size="large" />
            </Form.Item>
            <Button htmlType="submit" type="primary" size="large" block>
              Cadastrar
            </Button>
          </Form>

          <p>
            Já tem uma conta? <Link href="/login">Faça o Login</Link>
          </p>
        </S.Container>
      </S.FormContainer>
      <S.ContentContainer>
        <h1>A maneira mais simples de organizar a sua vida</h1>
        <p>Todas as metas e tarefas em um só lugar</p>
        <S.Card />
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default SignUp;
