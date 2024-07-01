import { useContext } from "react";
import { Button } from "@mui/material";
import { Add as AddOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import { ConfigContext } from "../../../context/ConfigContext";
import { addBarcodeToStack } from "../../../functions/addBarcodeToStack";

const CustomButton = styled(Button)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  &:hover {
    background: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const BarcodeAddButton = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeValue, barcodeOptions, barcodeStack } = currentConfig;

  return (
    <CustomButton
      variant="contained"
      startIcon={<AddOutlined />}
      onClick={() =>
        addBarcodeToStack(
          barcodeValue,
          barcodeOptions,
          barcodeStack,
          updateConfig
        )
      }
    >
      Add Barcode to Stack
    </CustomButton>
  );
};

export default BarcodeAddButton;
