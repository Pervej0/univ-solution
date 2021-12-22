import styled from "styled-components";

export const CustomContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  @media (max-width: 667px) {
    max-width: 95%;
  }
`;

export const CustomTable = styled.table`
  width: 100%;
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

export const CustomList = styled.li`
  border: 1px solid;
`;

export const CustomLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
`;

export const InputField = styled.div`
  border: 1px solid #262626;
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  & input {
    padding: 16px 5px;
    font-size: 15px;
    border: 0;
    width: 100%;
  }

  & button {
    padding: 16px 15px;
    font-size: 15px;
    border: 0;
    border-left: 1px solid #262626;
    text-transform: uppercase;
    font-weight: 600;
    background: #262626;
    color: white;
    transition: 0.4s all ease;
  }

  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 567px) {
    width: 95%;
  }
  & button:hover {
    background: transparent;
    color: #262626;
  }
`;
