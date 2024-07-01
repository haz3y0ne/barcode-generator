import { useContext } from "react";
import { TextField } from "@mui/material";
import { handleValueChange } from "../../../handlers/handleValueChange";
import styled from "@emotion/styled";
import { ConfigContext } from "../../../context/ConfigContext";

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 8px;
`;

const BarcodeValueInput = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeValue, barcodeOptions, barcodeFormats, error } = currentConfig;
  const { format, maxLength } = barcodeOptions;
  const currentFormat = format || "CODE128";
  const currentMaxLength = maxLength || 255;

  const handleChange = (event) => {
    handleValueChange(
      event,
      barcodeOptions,
      (newBarcodeValue) => {
        updateConfig({
          name: "barcodeValue",
          value: newBarcodeValue,
        });
      },
      (error) => {
        updateConfig({ name: "error", value: error });
      }
    );
  };

  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        label="Barcode Value"
        name="barcodeValue"
        value={barcodeValue}
        onChange={handleChange}
        inputProps={{
          maxLength: currentMaxLength,
          placeholder: barcodeFormats[currentFormat]?.placeholder || "",
        }}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default BarcodeValueInput;
