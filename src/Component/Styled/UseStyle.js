import styled from "styled-components";

export const CustomTable = styled.table`
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 95%;
  margin: 0 auto;
  padding: 10px;
  border-collapse: collapse;
  margin-top: 20px;
  @media (max-width: 1024px) {
    overflow-x: scroll;
  }
`;

export const CustomTrow = styled.tr`
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px 3px;
`;

export const CustomTh = styled.th`
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px 6px;
`;
export const CustomTd = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px 6px;
`;
