import { FC } from "react";
import styled from "styled-components";
import { Checkbox as AntdCheckbox, CheckboxProps } from "antd";

export const StyledCheckbox: FC<CheckboxProps> = styled(AntdCheckbox)`
  .ant-checkbox span {
    border: ${({ theme }) =>
      `2px solid ${theme.colors.darkPrimary} !important`};
    border-radius: 1px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.darkPrimary};
    background: ${({ theme }) => theme.colors.darkPrimary};

    &:after {
      border-color: #fff;
      left: 20% !important;
    }
  }

  :where(.css-dev-only-do-not-override-1wazalj).ant-checkbox
    .ant-checkbox-input:focus-visible
    + .ant-checkbox-inner {
    outline: ${({ theme }) => `4px solid ${theme.colors.darkPrimary}`};
  }

  :where(.css-dev-only-do-not-override-1wazalj).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }

  :where(.css-dev-only-do-not-override-1wazalj).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
    border-color: ${({ theme }) => theme.colors.darkPrimary};
  }

  .ant-checkbox-checked::after {
    border: ${({ theme }) =>
      `2px solid ${theme.colors.darkPrimary} !important`};
  }
`;
