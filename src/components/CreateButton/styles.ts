import styled from "styled-components";

export const Wrapper = styled.div`
  button {
    width: 50px !important;
    height: 50px !important;
  }

  .ant-float-btn-icon {
    width: 20px !important;
  }

  .ant-float-btn-body {
    background-color: ${({ theme }) => theme.colors.darkPrimary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
