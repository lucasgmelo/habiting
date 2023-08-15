import Logo from "components/Logo";
import * as S from "./styles";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input, message } from "antd";
import Link from "next/dist/client/link";

import { GoogleLogo } from "./assets/google";

import { useGoogleLogin } from "@react-oauth/google";
import api from "api";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      const googleInfos = {
        username: userInfo.name,
        email: userInfo.email,
        password: userInfo.email,
      };

      const { data } = await api.post("/googleLogin", googleInfos);

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.oauthToken);

      router.push("/home");
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);

      const { name, email, password } = values;

      const body = {
        username: name,
        email,
        password,
      };

      const { data } = await api.post("/users", body);

      const token = data.oAuthToken;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/");
    } catch {
      message.error("Erro ao fazer cadastro");
    } finally {
      setLoading(false);
    }
  };

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
              <Input.Password placeholder="Insira a seu senha" size="large" />
            </Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              block
              loading={loading}
            >
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
