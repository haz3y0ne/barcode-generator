import { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { handleOptionChange } from "../../../handlers/handleOptionChange";
import { ConfigContext } from "../../../context/ConfigContext";

const BarcodeTextPositionOptions = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <FormControl fullWidth variant="outlined" style={{ marginTop: "16px" }}>
      <InputLabel>Text Position</InputLabel>
      <Select
        name="barcodeOptions.textPosition"
        value={barcodeOptions.textPosition}
        onChange={(event) =>
          handleOptionChange(event, barcodeFormats, currentConfig, updateConfig)
        }
        label="Text Position"
      >
        <MenuItem value="top">Top</MenuItem>
        <MenuItem value="bottom">Bottom</MenuItem>
      </Select>
      <FormHelperText>Default: Bottom</FormHelperText>
    </FormControl>
  );
};

export default BarcodeTextPositionOptions;
