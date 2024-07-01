export const clearBarcodeStack = (updateConfig) => {
  updateConfig({ target: { name: "barcodeStack", value: [] } });
};
