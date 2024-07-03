import styled from "@emotion/styled";

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 8px;
`;

const ErrorMessageComponent = ({ message }) => (
  <ErrorMessage>{message}</ErrorMessage>
);

export default ErrorMessageComponent;
