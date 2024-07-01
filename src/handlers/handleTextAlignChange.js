export const handleTextAlignChange = (value, setBarcodeOptions, barcodeOptions) => {
  setBarcodeOptions({
    ...barcodeOptions,
    textAlign: value,
  });
};
