export const removeBarcodeFromStack = (index, barcodeStack, updateConfig) => {
  const updatedStack = barcodeStack.filter((_, i) => i !== index);
  updateConfig({ name: "barcodeStack", value: updatedStack });
};
