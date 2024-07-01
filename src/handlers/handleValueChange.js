import { barcodeFormats } from "../data/barcodeFormats";

export const handleValueChange = (
  event,
  barcodeOptions,
  setBarcodeValue,
  setError
) => {
  const value = event.target.value;
  const maxLength = barcodeFormats[barcodeOptions.format].maxLength;

  if (value.length <= maxLength) {
    setBarcodeValue(value);
    setError("");
  } else {
    setError(
      `Max length for ${barcodeOptions.format} is ${maxLength} characters.`
    );
  }
};