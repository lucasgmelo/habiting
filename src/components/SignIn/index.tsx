import Logo from "components/Logo";
import * as S from "./styles";

import { useState } from "react";
import api from "api";
import { useRouter } from "next/router";

import { Button, Form, Input, message } from "antd";
import Link from "next/dist/client/link";

import { GoogleLogo } from "./assets/google";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);

      const { email, password } = values;

      const body = {
        email,
        password,
      };

      const { data } = await api.post("/users/signin", body);

      localStorage.setItem("token", data.oauthToken);
      router.push("/");
    } catch {
      message.error("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Wrapper>
      <S.FormContainer>
        <Logo />
        <h1>Faça o seu login</h1>
        <p>Insira suas credenciais para acessar sua conta</p>
        <S.Container>
          <S.Buttons>
            <Button block size="large">
              <GoogleLogo />
              Entrar com o Google
            </Button>
          </S.Buttons>
          <S.Divider>
            <span /> <p>ou</p> <span />
          </S.Divider>
          <Form layout="vertical" onFinish={onSubmit}>
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
              <Input.Password placeholder="Insira a seu senha" size="large" />
            </Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              block
              loading={loading}
            >
              Entrar
            </Button>
          </Form>

          <p>
            Não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
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

export default SignIn;
