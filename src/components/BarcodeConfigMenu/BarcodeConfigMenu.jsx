import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import { useContext } from "react";

import BarcodeHeader from "./BarcodeHeader";
import BarcodeValueInput from "./BarcodeOptions/BarcodeValueInput";
import BarcodeFormatSelect from "./BarcodeOptions/BarcodeFormatSelect";
import BarcodeDescription from "./BarcodeOptions/BarcodeDescription";
import BarcodeSizeOptions from "./BarcodeOptions/BarcodeSizeOptions";
import BarcodeColorOptions from "./BarcodeOptions/BarcodeColorOptions";
import BarcodeMarginOptions from "./BarcodeOptions/BarcodeMarginOptions";
import BarcodeDisplayOptions from "./BarcodeOptions/BarcodeDisplayOptions";
import BarcodeTextPositionOptions from "./BarcodeOptions/BarcodeTextPositionOptions";
import BarcodeFontOptions from "./BarcodeOptions/BarcodeFontOptions";
import BarcodeAddButton from "./BarcodeOptions/BarcodeAddButton";
import BarcodePreview from "../common/BarcodePreview";
import { ConfigContext } from "../../context/ConfigContext";
import { Flex } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 40vw;
  padding: 16px;
  gap: 8px;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Details = styled.details``;
const Summary = styled.summary`
  padding-bottom: 16px;
  font-size: 1.2rem;
  font-weight: 600;
`;

const BarcodeConfigMenu = () => {
  const theme = useTheme();
  const { currentConfig } = useContext(ConfigContext);
  const { isCodeView } = currentConfig;

  return (
    <Container theme={theme}>
      <BarcodeHeader />
      <BarcodeValueInput />
      {!isCodeView && (
        <>
          <BarcodeFormatSelect />
          <BarcodeDescription />
          <Details>
            <Summary>Barcode Formatting</Summary>
            <Flex
              style={{
                gap: 8,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <BarcodeSizeOptions />
              <BarcodeColorOptions />
            </Flex>
            <Flex
              style={{
                gap: 8,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <BarcodeMarginOptions />
            </Flex>
          </Details>
          <Details>
            <Summary>Text Formatting</Summary>
            <Flex style={{ gap: 8 }}>
              <BarcodeDisplayOptions />
              <BarcodeFontOptions />
              <BarcodeTextPositionOptions />
            </Flex>
          </Details>
        </>
      )}
      <BarcodeAddButton />
      <BarcodePreview />
    </Container>
  );
};

export default BarcodeConfigMenu;
