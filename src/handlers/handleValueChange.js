import { barcodeFormats } from "../data/barcodeFormats";

export const handleValueChange = (
  event,
  barcodeOptions,
  setBarcodeValue,
  setError,
  isMultilineInput,
  isCodeView,
  updateConfig
) => {
  const value = event.target.value;

  if (isCodeView) {
    try {
      const parsed = JSON.parse(value);
      const { barcodeValue, barcodeOptions } = parsed;
      
      updateConfig({ name: "barcodeValue", value: barcodeValue });
      updateConfig({ name: "barcodeOptions", value: barcodeOptions });
      setError("");
    } catch (e) {
      setError("Invalid JSON format.");
    }
    return;
  }

  const maxLength = barcodeFormats[barcodeOptions.format].maxLength;

  if (isMultilineInput) {
    const lines = value.split("\n");
    const invalidLine = lines.find((line) => line.length > maxLength);
    if (invalidLine) {
      setError(
        `One or more lines exceed the max length for ${barcodeOptions.format}, which is ${maxLength} characters.`
      );
    } else {
      setBarcodeValue(value);
      setError("");
    }
  } else {
    if (value.length <= maxLength) {
      setBarcodeValue(value);
      setError("");
    } else {
      setError(
        `Max length for ${barcodeOptions.format} is ${maxLength} characters.`
      );
    }
  }
};
