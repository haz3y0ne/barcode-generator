export const addBarcodeToStack = (
  barcodeValue,
  barcodeOptions,
  barcodeStack,
  updateConfig,
  isMultilineInput,
  isCodeView,
  currentConfig
) => {
  let newBarcodes = [];

  if (isCodeView) {
    try {
      console.log("Parsing JSON for barcode stack:", barcodeValue);
      const parsed = JSON.parse(barcodeValue);
      barcodeValue = parsed.barcodeValue;
      barcodeOptions = { ...barcodeOptions, ...parsed.barcodeOptions };
      console.log("Parsed JSON:", { barcodeValue, barcodeOptions });
    } catch (e) {
      console.error("Invalid JSON format:", e);
      return;
    }
  }

  if (Array.isArray(barcodeValue)) {
    newBarcodes = barcodeValue.map((value) => ({
      value,
      options: { ...barcodeOptions },
    }));
  } else if (isMultilineInput) {
    const lines = barcodeValue
      .split("\n")
      .filter((line) => line.trim().length > 0);
    newBarcodes = lines.map((line) => ({
      value: line,
      options: { ...barcodeOptions },
    }));
  } else if (barcodeValue.includes(",") || barcodeValue.includes(";")) {
    const separators = barcodeValue.includes(",") ? "," : ";";
    const values = barcodeValue
      .split(separators)
      .filter((value) => value.trim().length > 0);
    newBarcodes = values.map((value) => ({
      value,
      options: { ...barcodeOptions },
    }));
  } else {
    newBarcodes = [
      {
        value: barcodeValue,
        options: { ...barcodeOptions },
      },
    ];
  }

  console.log("New barcodes to be added:", newBarcodes);

  const updatedStack = [...barcodeStack, ...newBarcodes];
  updateConfig({ name: "barcodeStack", value: updatedStack });
};
