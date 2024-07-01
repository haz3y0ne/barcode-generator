import jspdf from "jspdf";

export const exportToDocument = (barcodeStack, documentSize) => {
  const doc = new jspdf({
    orientation:
      documentSize.width > documentSize.height ? "landscape" : "portrait",
    unit: "in",
    format: [documentSize.width, documentSize.height],
  });
  barcodeStack.forEach((barcode, index) => {
    const svg = document.getElementById(`barcode-${index}`);
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL("image/png");
      doc.addImage(
        dataUrl,
        "PNG",
        (documentSize.width - img.width / 96) / 2,
        (documentSize.height - img.height / 96) / 2,
        img.width / 96,
        img.height / 96
      );
      if (index < barcodeStack.length - 1) doc.addPage();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  });
  setTimeout(() => doc.save("barcodes.pdf"), 2000);
};
