import { useContext } from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";
import { handleOptionChange } from "../../../handlers/handleOptionChange";
import { ConfigContext } from "../../../context/ConfigContext";
import styled from "@emotion/styled";

const FlexRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BarcodeColorOptions = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <FlexRow style={{width: "50%"}}>
      <FormControl fullWidth>
        <TextField
          type="color"
          variant="outlined"
          label="Background Color"
          name="barcodeOptions.background"
          value={barcodeOptions.background}
          onChange={(event) =>
            handleOptionChange(
              event,
              barcodeFormats,
              currentConfig,
              updateConfig
            )
          }
          fullWidth
        />
        <FormHelperText>Default: White</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          type="color"
          variant="outlined"
          label="Line Color"
          name="barcodeOptions.lineColor"
          value={barcodeOptions.lineColor}
          onChange={(event) =>
            handleOptionChange(
              event,
              barcodeFormats,
              currentConfig,
              updateConfig
            )
          }
          
        />
        <FormHelperText>Default: Black</FormHelperText>
      </FormControl>
    </FlexRow>
  );
};

export default BarcodeColorOptions;
