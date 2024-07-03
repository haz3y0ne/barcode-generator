export const handleOptionChange = (event, barcodeFormats, currentConfig, updateConfig) => {
  const { name, value, checked, type } = event.target;
  const targetValue = type === "checkbox" ? checked : value;

  updateConfig({ name, value: targetValue });

  if (name === "barcodeOptions.format") {
    const formatInfo = barcodeFormats[value];
    updateConfig({ name: "barcodeValue", value: formatInfo.placeholder });
  }
};
