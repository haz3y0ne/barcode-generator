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
      component="button"
      title={barcodeOptions.displayValue ? "Hide Value" : "Show Value"}
      onClick={(event) =>
        handleOptionChange(event, barcodeFormats, currentConfig, updateConfig)
      }
    >
      <span>
        {barcodeOptions.displayValue ? (
          <VisibilityOutlined name="barcodeOptions.displayValue"/>
        ) : (
          <VisibilityOffOutlined name="barcodeOptions.displayValue" />
        )}
      </span>
    </IconButton>
  );
};

export default BarcodeDisplayOptions;
