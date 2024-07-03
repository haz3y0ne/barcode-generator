import PropTypes from "prop-types";
import { createContext, useState } from "react";
import {
  defaultBarcodeValue,
  defaultIsMultiline,
  defaultIsCodeView,
  defaultBarcodeOptions,
  defaultBarcodeStack,
  defaultExportMode,
  defaultOutputFormat,
  defaultDocumentSize,
  defaultDocumentOrientation,
} from "../data/defaultSettings";
import { barcodeFormats } from "../data/barcodeFormats";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [currentConfig, setCurrentConfig] = useState({
    barcodeValue: defaultBarcodeValue,
    isMultilineInput: defaultIsMultiline,
    isCodeView: defaultIsCodeView,
    barcodeOptions: defaultBarcodeOptions,
    barcodeStack: defaultBarcodeStack,
    exportMode: defaultExportMode,
    outputFormat: defaultOutputFormat,
    documentSize: defaultDocumentSize,
    documentOrientation: defaultDocumentOrientation,
    barcodeFormats: barcodeFormats,
    jsonOutput: JSON.stringify({ barcodeValue: defaultBarcodeValue, barcodeOptions: defaultBarcodeOptions }),
  });

  const updateConfig = ({ name, value }) => {
    const path = name.split(".");
    setCurrentConfig((prevConfig) => {
      const updatedConfig = { ...prevConfig };

      if (path.length === 1) {
        updatedConfig[path[0]] = typeof value === "boolean" ? !prevConfig[path[0]] : value;
      } else if (path.length === 2) {
        switch (path[0]) {
          case "barcodeOptions":
            updatedConfig.barcodeOptions = {
              ...prevConfig.barcodeOptions,
              [path[1]]: value,
            };
            break;
          case "documentSize":
            updatedConfig.documentSize = {
              ...prevConfig.documentSize,
              [path[1]]: value,
            };
            break;
          default:
            break;
        }
      }

      if (path[0] === "barcodeValue" || path[0] === "barcodeOptions") {
        updatedConfig.jsonOutput = JSON.stringify({
          barcodeValue: updatedConfig.barcodeValue,
          barcodeOptions: updatedConfig.barcodeOptions,
        });
      }

      return updatedConfig;
    });
  };

  return (
    <ConfigContext.Provider value={{ currentConfig, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

