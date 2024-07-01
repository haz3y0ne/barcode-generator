import { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { handleOptionChange } from "../../../handlers/handleOptionChange";
import { ConfigContext } from "../../../context/ConfigContext";

const BarcodeFormatSelect = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <FormControl fullWidth variant="outlined" style={{ marginTop: "16px" }}>
      <InputLabel>Barcode Format</InputLabel>
      <Select
        name="barcodeOptions.format"
        value={barcodeOptions.format}
        onChange={(event) =>
          handleOptionChange(event, barcodeFormats, currentConfig, updateConfig)
        }
        label="Barcode Format"
      >
        {Object.keys(barcodeFormats).map((format) => (
          <MenuItem key={format} value={format}>
            {format.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BarcodeFormatSelect;
