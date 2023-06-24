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
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: 8px;
    }
  }
`;
