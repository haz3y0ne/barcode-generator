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
  const { barcodeValue, barcodeOptions, barcodeStack, isMultilineInput, isCodeView, jsonOutput } = currentConfig;

  const handleClick = () => {
    console.log("JSON Output before parsing:", jsonOutput); // Debugging line

    if (isCodeView) {
      try {
        const parsed = JSON.parse(jsonOutput);
        addBarcodeToStack(
          parsed.barcodeValue,
          { ...barcodeOptions, ...parsed.barcodeOptions },
          barcodeStack,
          updateConfig,
          isMultilineInput,
          isCodeView,
          currentConfig
        );
      } catch (e) {
        updateConfig({ name: "error", value: "Invalid JSON format." });
        return;
      }
    } else {
      addBarcodeToStack(
        barcodeValue,
        barcodeOptions,
        barcodeStack,
        updateConfig,
        isMultilineInput,
        isCodeView,
        currentConfig
      );
    }
    updateConfig({ name: "error", value: "" });
  };

  const barcodeCount = isMultilineInput
    ? barcodeValue.split("\n").filter((line) => line.trim().length > 0).length
    : 1;

  return (
    <CustomButton
      variant="contained"
      startIcon={<AddOutlined />}
      onClick={handleClick}
    >
      {isMultilineInput
        ? `Add ${barcodeCount} Barcodes to Stack`
        : "Add Barcode to Stack"}
    </CustomButton>
  );
};

export default BarcodeAddButton;
