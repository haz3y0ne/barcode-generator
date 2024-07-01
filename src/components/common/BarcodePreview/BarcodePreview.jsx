import { useContext, useEffect, useRef, useState } from "react";
import QRCode from "qrcode.react";
import { ConfigContext } from "../../../context/ConfigContext";
import { generateBarcode } from "../../../functions/generateBarcode";
import styled from "@emotion/styled";

const PreviewContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #00000025;
`;

const BarcodePreview = () => {
  const { currentConfig } = useContext(ConfigContext);
  const { barcodeValue, barcodeOptions } = currentConfig;
  const barcodeRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    generateBarcode(barcodeRef.current, barcodeValue, barcodeOptions, setError);
  }, [barcodeValue, barcodeOptions]);

  return (
    <PreviewContainer>
      {barcodeOptions.format === "QR" ? (
        <QRCode
          value={barcodeValue}
          size={barcodeOptions.height}
          bgColor={barcodeOptions.background}
          fgColor={barcodeOptions.lineColor}
          level={barcodeOptions.qrLevel || "H"}
        />
      ) : (
        <svg id="barcode-preview" ref={barcodeRef}></svg>
      )}
    </PreviewContainer>
  );
};

export default BarcodePreview;
