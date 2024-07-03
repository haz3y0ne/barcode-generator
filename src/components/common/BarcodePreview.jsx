import { useContext, useEffect, useRef, useState } from "react";
import QRCode from "qrcode.react";
import { ConfigContext } from "../../context/ConfigContext";
import { generateBarcode } from "../../functions/generateBarcode";
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

const MessageContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 8px;
  border: 1px solid #00000025;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const BarcodePreview = () => {
  const { currentConfig } = useContext(ConfigContext);
  const { barcodeValue, barcodeOptions, isMultilineInput } = currentConfig;
  const barcodeRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isMultilineInput) {
      generateBarcode(
        barcodeRef.current,
        barcodeValue,
        barcodeOptions,
        setError
      );
    }
  }, [barcodeValue, barcodeOptions, isMultilineInput]);

  if (isMultilineInput) {
    return (
      <MessageContainer>
        Live preview is disabled while multiline input is enabled.
      </MessageContainer>
    );
  }

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
