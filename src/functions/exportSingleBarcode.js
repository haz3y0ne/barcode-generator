import JsBarcode from "jsbarcode";

export const exportSingleBarcode = (
  barcodeValue,
  barcodeOptions,
  outputFormat
) => {
  const barcodeRef = document.createElement("svg");
  document.body.appendChild(barcodeRef);
  JsBarcode(barcodeRef, barcodeValue, barcodeOptions);
  const svgData = new XMLSerializer().serializeToString(barcodeRef);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const outputFile = canvas.toDataURL(`image/${outputFormat}`);
    const downloadLink = document.createElement("a");
    downloadLink.href = outputFile;
    downloadLink.download = `${barcodeOptions.format}-${barcodeValue}.${outputFormat}`;
    downloadLink.click();
    document.body.removeChild(barcodeRef);
  };
  img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
};
