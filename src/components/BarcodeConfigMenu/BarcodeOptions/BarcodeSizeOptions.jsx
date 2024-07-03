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

  const handleClick = (event) => {
    console.log(event);
    event.stopPropagation();
    handleOptionChange(
      {
        target: {
          name: "barcodeOptions.displayValue",
          type: "checkbox",
          checked: !barcodeOptions.displayValue,
        },
      },
      barcodeFormats,
      currentConfig,
      updateConfig
    );
  };

  return (
    <IconButton
      name="barcodeOptions.displayValue"
      component="button"
      title={barcodeOptions.displayValue ? "Hide Value" : "Show Value"}
      onClick={handleClick}
    >
      <div onClick={(event) => event.stopPropagation()}>
        {barcodeOptions.displayValue ? (
          <VisibilityOutlined />
        ) : (
          <VisibilityOffOutlined />
        )}
      </div>
    </IconButton>
  );
};

export default BarcodeDisplayOptions;