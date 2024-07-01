export const handleFontOptionChange = (option, barcodeOptions, setBarcodeOptions) => {
  const newFontOptions = barcodeOptions.fontOptions.includes(option)
    ? barcodeOptions.fontOptions.filter((opt) => opt !== option)
    : [...barcodeOptions.fontOptions, option];
  setBarcodeOptions({
    ...barcodeOptions,
    fontOptions: newFontOptions,
  });
};
