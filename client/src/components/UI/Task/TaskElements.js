import styled from "styled-components";

export const TaskWrapper = styled.div`
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "#fff")};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  max-width: 360px;
  padding: 1.5rem;
  cursor: pointer;
`;
