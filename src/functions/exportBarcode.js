export const exportBarcode = (barcode, index, outputFormat) => {
  const svg = document.getElementById(`barcode-${index}`);
  const svgData = new XMLSerializer().serializeToString(svg);
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
    downloadLink.download = `${barcode.options.format}-${barcode.value}.${outputFormat}`;
    downloadLink.click();
  };
  img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
};
