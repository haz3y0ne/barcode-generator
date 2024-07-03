import { useContext } from "react";
import { IconButton } from "@mui/material";
import {
  Visibility as VisibilityOutlined,
  VisibilityOff as VisibilityOffOutlined,
} from "@mui/icons-material";
import { ConfigContext } from "../../../context/ConfigContext";
import { handleOptionChange } from "../../../handlers/handleOptionChange";

const BarcodeDisplayOptions = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <IconButton
      name="barcodeOptions.displayValue"
      onClick={(event) =>
        handleOptionChange(event, barcodeFormats, currentConfig, updateConfig)
      }
      title={barcodeOptions.displayValue ? "Hide Value" : "Show Value"}
    >
      {barcodeOptions.displayValue ? (
        <VisibilityOutlined />
      ) : (
        <VisibilityOffOutlined />
      )}
    </IconButton>
  );
};

export default BarcodeDisplayOptions;
