import styled from "@emotion/styled";
import { useTheme } from "@mui/material";

import BarcodeHeader from "./BarcodeHeader";
import BarcodeValueInput from "./BarcodeOptions/BarcodeValueInput";
import BarcodeFormatSelect from "./BarcodeOptions/BarcodeFormatSelect";
import BarcodeDescription from "./BarcodeOptions/BarcodeDescription";
import BarcodeSizeOptions from "./BarcodeOptions/BarcodeSizeOptions";
import BarcodeColorOptions from "./BarcodeOptions/BarcodeColorOptions";
import BarcodeDisplayOptions from "./BarcodeOptions/BarcodeDisplayOptions";
import BarcodeTextPositionOptions from "./BarcodeOptions/BarcodeTextPositionOptions";
import BarcodeFontOptions from "./BarcodeOptions/BarcodeFontOptions";
import BarcodeAddButton from "./BarcodeOptions/BarcodeAddButton";
import BarcodePreview from "../common/BarcodePreview/BarcodePreview";
import { Flex } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 40vw;
  padding: 16px;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BarcodeConfigMenu = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <BarcodeHeader />
      <BarcodeValueInput />
      <BarcodeFormatSelect />
      <BarcodeDescription />
      <BarcodeSizeOptions />
      <BarcodeColorOptions />
      
      <Flex style={{gap: 8}}>
        <BarcodeDisplayOptions />
        <BarcodeFontOptions />
        <BarcodeTextPositionOptions />
      </Flex>
      <BarcodeAddButton />
      <BarcodePreview />
    </Container>
  );
};

export default BarcodeConfigMenu;
