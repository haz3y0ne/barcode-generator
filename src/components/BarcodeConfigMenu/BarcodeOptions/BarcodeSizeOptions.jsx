import { useContext } from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";
import { handleOptionChange } from "../../../handlers/handleOptionChange";
import { ConfigContext } from "../../../context/ConfigContext";
import styled from "@emotion/styled";

const FlexRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

const BarcodeSizeOptions = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <FlexRow>
      <FormControl fullWidth>
        <TextField
          type="number"
          variant="outlined"
          label="Width"
          name="barcodeOptions.width"
          value={barcodeOptions.width}
          onChange={(event) =>
            handleOptionChange(
              event,
              barcodeFormats,
              currentConfig,
              updateConfig
            )
          }
          inputProps={{ min: 1 }}
          fullWidth
        />
        <FormHelperText>Default: 2px</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          type="number"
          variant="outlined"
          label="Height"
          name="barcodeOptions.height"
          value={barcodeOptions.height}
          onChange={(event) =>
            handleOptionChange(
              event,
              barcodeFormats,
              currentConfig,
              updateConfig
            )
          }
          inputProps={{ min: 10 }}
          fullWidth
        />
        <FormHelperText>Default: 100px</FormHelperText>
      </FormControl>
    </FlexRow>
  );
};

export default BarcodeSizeOptions;
