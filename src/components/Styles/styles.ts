import styled from "styled-components";

export const CardLayout = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  width: 20%;
  margin-right: 16px;
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  padding: 1px 8px;
`;

export const TextValue = styled.div`
  margin: 6px;
  font-family: "Titillium Web";
  font-variant: petite-caps;
  font-size: 16px;
  word-break: break-word;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`;

export const HeaderBar = styled.div`
  height: 3.5rem;
  background-color: #0a121c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Title = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.8;
`;

export const Button = styled.button`
  background-color: #1890ff;
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Titillium Web", sans-serif;
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  display: inline-block;
  &:hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }
`;