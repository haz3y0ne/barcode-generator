import PropTypes from "prop-types";
import { createContext, useState } from "react";
import {
  defaultBarcodeValue,
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
    barcodeOptions: defaultBarcodeOptions,
    barcodeStack: defaultBarcodeStack,
    exportMode: defaultExportMode,
    outputFormat: defaultOutputFormat,
    documentSize: defaultDocumentSize,
    documentOrientation: defaultDocumentOrientation,
    barcodeFormats: barcodeFormats,
  });

  const updateConfig = ({ name, value }) => {
    const path = name.split(".");

    setCurrentConfig((prevConfig) => {
      let updatedConfig = { ...prevConfig };

      if (path.length === 1) {
        updatedConfig[path[0]] = value;
      } else {
        let currentLevel = updatedConfig;
        for (let i = 0; i < path.length - 1; i++) {
          if (!currentLevel[path[i]]) currentLevel[path[i]] = {};
          currentLevel = currentLevel[path[i]];
        }
        currentLevel[path[path.length - 1]] = value;
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
