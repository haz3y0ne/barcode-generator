import BarcodeConfigMenu from "./components/BarcodeConfigMenu/BarcodeConfigMenu";
import BarcodeOutputList from "./components/BarcodeOutputList/BarcodeOutputList";
import styled, { useTheme } from "styled-components";

const OuterAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 10px 15px;
  background: ${(props) => props.theme.palette.background.default};
  color: #000;
`;

const InnerAppContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 5px;
  width: 100%;
`;

const App = () => {
  const bCodeProTheme = useTheme();

  return (
    <OuterAppContainer theme={bCodeProTheme}>
      <InnerAppContainer>
        <BarcodeConfigMenu />
        <BarcodeOutputList />
      </InnerAppContainer>
    </OuterAppContainer>
  );
};

export default App;
