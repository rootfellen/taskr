import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff30;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.span`
  width: 64px;
  height: 64px;
  position: relative;
  border-radius: 50%;
  box-shadow: -10px 8px 0 18px inset #fff;
  animation: rotate 2s ease-in infinite alternate;
  &::before {
    content: "";
    position: absolute;
    left: 14px;
    bottom: 16px;
    background: #0fc9a7;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    animation: scale 1s ease-in infinite alternate;
  }
  @keyframes rotate {
    100% {
      transform: rotate(750deg);
    }
  }
  @keyframes scale {
    100% {
      transform: scale(0.5) translateY(5px);
    }
  }
`;
