import styled from "styled-components";

export const SignupWrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  flex: 1 1 50%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: #42434a;
  margin-top: 2rem;
`;
export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  color: #707070;
  margin: 1rem 0rem;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 30%;
  gap: 1.8rem;
`;

export const Input = styled.input`
  border: 1px solid #000;
  padding: 1.5rem;
  border-radius: 15px;
  width: 100%;
  &::placeholder {
    font-size: 1rem;
    color: rgba(153, 153, 153, 0.66);
  }
`;

export const Cta = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  color: rgba(112, 112, 112, 0.62);
  gap: 0.5rem;
  margin: 1.5rem 0rem;
  hr {
    flex: 40%;
    border: 1px solid #a6a6a6;
  }
`;

export const CreateAccBtn = styled.button`
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #0fc9a7;
  font-weight: 600;
  color: #42434a;
  font-size: 1.25rem;
  padding: 1.5rem;
  width: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #42434a;
  }
`;

export const GoogleLoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #42434a;
  font-weight: 600;
  color: #fff;
  font-size: 1.25rem;
  padding: 1.5rem;
  width: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #42434a;
    background-color: #fff;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
  }
`;

export const Message = styled.p`
  margin: 1.5rem 0rem;
  color: #707070;
  font-size: 1rem;
  font-weight: 500;
  a {
    color: #42434a;
  }
`;
