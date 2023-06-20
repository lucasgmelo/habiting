import { Table as AntdTable } from "antd";
import styled, { keyframes } from "styled-components";

const columnShrink = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const StyledTable: typeof AntdTable = styled(AntdTable)`
  .ant-checkbox-wrapper {
    padding-left: 8px;
  }

  .ant-table-row {
    .ant-table-cell {
      border-top: 4px solid white !important;
      border-bottom: 4px solid white !important;

      &:first-of-type {
        border-left: 8px solid white !important;
      }

      &:last-of-type {
        border-right: 8px solid white !important;
        border-radius: 5px !important;
      }
    }
  }

  .ant-table-row .ant-table-selection-column {
    position: relative;

    .ant-checkbox-wrapper-checked::before {
      content: "";
      position: absolute;

      width: 4px;
      left: 0;
      top: 0;
      bottom: 0;

      background: ${({ theme }) => theme.colors.darkPrimary};

      border-radius: 5px 0 0 5px;
    }
  }

  .ant-table-cell {
    animation: ${columnShrink} 0.5s !important;
  }

  .ant-table {
    box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  .ant-table-tbody > tr > td {
    border: none;
    color: #2a2a2a;
  }

  .ant-table-thead > tr > th {
    color: ${({ theme }) => theme.colors.darkDarkPrimary};
    background: #fff;
    border-bottom: 1px solid ${({ theme }) => theme.colors.contour};
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0;
  }

  .ant-pagination-item-active {
    border-color: ${({ theme }) => theme.colors.darkPrimary};

    a {
      color: ${({ theme }) => theme.colors.darkPrimary};
    }
  }
`;
