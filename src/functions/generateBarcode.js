import JsBarcode from "jsbarcode";

export const generateBarcode = (barcodeRef, barcodeValue, barcodeOptions, setError) => {
  if (barcodeOptions.format !== "QR" && barcodeRef) {
    try {
      JsBarcode(barcodeRef, barcodeValue, barcodeOptions);
      setError("");
    } catch (e) {
      setError("Invalid barcode value for the selected format.");
    }
  }
};
