import { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, FormHelperText } from "@mui/material";
import { handleOptionChange } from "../../../handlers/handleOptionChange";
import { ConfigContext } from "../../../context/ConfigContext";
import { availableFonts } from "../../../data/availableFonts";

const BarcodeFontOptions = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <>
      <FormControl fullWidth variant="outlined" style={{ marginTop: "16px" }}>
        <InputLabel>Font Face</InputLabel>
        <Select
          value={barcodeOptions.font}
          name="barcodeOptions.font"
          onChange={(event) =>
            handleOptionChange(
              event,
              barcodeFormats,
              currentConfig,
              updateConfig
            )
          }
          label="Font Face"
        >
          {availableFonts.map((font, fontIndex) => (
            <MenuItem key={fontIndex} value={font}>
              {font}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Default: Monospace</FormHelperText>
      </FormControl>
      <FormControl fullWidth variant="outlined" style={{ marginTop: "16px" }}>
        <TextField
          type="number"
          variant="outlined"
          label="Font Size"
          name="barcodeOptions.fontSize"
          value={barcodeOptions.fontSize}
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
        <FormHelperText>Default: 20px</FormHelperText>
      </FormControl>
    </>
  );
};

export default BarcodeFontOptions;
