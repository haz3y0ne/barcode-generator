export const addBarcodeToStack = (
  barcodeValue,
  barcodeOptions,
  barcodeStack,
  updateConfig
) => {
  const newBarcode = {
    value: barcodeValue,
    options: { ...barcodeOptions },
  };
  const updatedStack = [...barcodeStack, newBarcode];
  updateConfig({ name: "barcodeStack", value: updatedStack });
};
