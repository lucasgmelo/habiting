import { Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Modal)`
  form {
    margin-top: 24px;
  }

  .ant-picker {
    width: 30%;
  }

  .footer {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
`;
