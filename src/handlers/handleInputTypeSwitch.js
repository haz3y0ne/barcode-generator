export const handleInputTypeSwitch = (key, currentConfig, updateConfig) => {
  if (key === "isCodeView" && currentConfig.isMultilineInput) {
    updateConfig({ name: "isMultilineInput", value: false });
  }
  updateConfig({
    name: key,
    value: !currentConfig[key],
  });
};
