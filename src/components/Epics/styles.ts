import styled from "styled-components";

export const Wrapper = styled.div`
  & > p {
    margin-top: 16px;
  }
`;

export const EpicsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 16px 0;
`;
