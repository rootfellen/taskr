import styled from "styled-components";

export const StagesWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const AddStageButton = styled.button`
  background: none;
  color: #0fc9a7;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  border: 2px solid rgba(153, 153, 153, 0.24);
  border-radius: 15px;
  align-self: flex-start;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0fc9a7;
    color: #fff;
  }
`;
