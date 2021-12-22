import styled from "styled-components";

export const CustomTable = styled.table`
  border: 1px solid rgba(0, 0, 0, 0.4);
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

export const CustomBtn = styled.button`
  padding: 12px 25px;
  background-color: #262626;
  color: #ffffff;
  margin: 15px 6px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #262626;
  transform: scale(1);
  transition: 0.4s ease-out;
  &:hover {
    transform: scale(1.1);
    background-color: transparent;
    color: #262626;
  }
`;
