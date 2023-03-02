import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 200px;
  width: 100%;
  background: ${props => props.theme['--gray-700']};
  display: flex;
  justify-content: center;
  align-items: center;
`