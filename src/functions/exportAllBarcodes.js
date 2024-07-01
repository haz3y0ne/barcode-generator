import { exportBarcode } from "./exportBarcode";

export const exportAllBarcodes = (barcodeStack, outputFormat) => {
  barcodeStack.forEach((barcode, index) => {
    exportBarcode(barcode, index, outputFormat);
  });
};
