import styled from "styled-components";

export const StageWrapper = styled.div`
  max-width: 432px;
  width: 100%;
  border: 2px solid rgba(153, 153, 153, 0.24);
  border-radius: 25px;
  padding: 1.6875rem;
  flex: 1;
`;

export const StageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem 1rem 1rem;
`;

export const TaskList = styled.ul``;

export const StageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #42434a;
`;

export const Amount = styled.p`
  color: ${({ color }) =>
    color === "todo"
      ? "#FF1A0C"
      : color === "inprogress"
      ? "#FF800C"
      : "#0FC9A7"};
  font-size: 1.125rem;
  font-weight: 500;
`;

export const AddTaskBtn = styled.button`
  width: 2.5625rem;
  height: 2.5625rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 50%;
  color: #f4f7fc;
  align-self: flex-end;
  transition: all 0.3s ease-in-out;
  background-color: ${({ color }) =>
    color === "todo"
      ? "#FF1A0C"
      : color === "inprogress"
      ? "#FF800C"
      : "#0FC9A7"};
  &:hover {
    opacity: 0.7;
  }
`;
