import styled from "@emotion/styled";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  useTheme,
  FormControl,
  InputLabel,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  SaveAlt as ExportOutlined,
  Delete as DeleteOutlined,
} from "@mui/icons-material";
import QRCode from "qrcode.react";
import JsBarcode from "jsbarcode";
import { useContext, useEffect, useState } from "react";

// Functions
import { exportBarcode } from "../../functions/exportBarcode";
import { exportAllBarcodes } from "../../functions/exportAllBarcodes";
import { exportToDocument } from "../../functions/exportToDocument";
import { removeBarcodeFromStack } from "../../functions/removeBarcodeFromStack";
import { documentSizes } from "../../data/documentSizes";
import { outputFormats } from "../../data/outputFormats";

// Context
import { ConfigContext } from "../../context/ConfigContext";
import { FaRegFileImage, FaRegFilePdf } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 5px;
  width: 100%;
  max-width: 50vw;
`;

const ExportContainer = styled.div`
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.paper};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const BarcodeListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.paper};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BarcodeItem = styled.div`
  margin-bottom: 16px;
  padding: 16px 8px;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #00000025;
  flex-direction: row;
  & > svg {
    max-width: 50%;
    width: 100%;
    height: auto;
    max-height: 80px;
  }
`;

const BarcodeOutputList = () => {
  const theme = useTheme();

  // Context
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeStack, outputFormat, documentSize, documentOrientation } =
    currentConfig;

  const [sizes, setSizes] = useState(documentSizes);

  useEffect(() => {
    if (documentOrientation === "portrait") {
      setSizes(
        documentSizes.map((size) => ({
          width: size.height,
          height: size.width,
        }))
      );
    } else {
      setSizes(documentSizes);
    }
  }, [documentOrientation]);

  const handleOrientationToggle = () => {
    const newOrientation = documentOrientation === "portrait" ? "landscape" : "portrait";
    updateConfig({
      target: { name: "documentOrientation", value: newOrientation },
    });
  };

  return (
    <Container>
      <ExportContainer theme={theme}>
        <FlexRow>
          <Typography variant="h6">Image Export Settings</Typography>
        </FlexRow>
        <FlexRow>
          <Button
            startIcon={<ExportOutlined />}
            onClick={() => exportAllBarcodes(barcodeStack, outputFormat)}
            sx={{ minWidth: "30%" }}
            variant="outlined"
          >
            Export All
          </Button>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Image Format</InputLabel>
            <Select
              name="outputFormat"
              value={outputFormat}
              onChange={(event) =>
                updateConfig({
                  target: { name: "outputFormat", value: event.target.value },
                })
              }
              variant="outlined"
              label="Image Format"
              style={{ minWidth: 120 }}
            >
              {outputFormats.map((format, formatIndex) => (
                <MenuItem key={formatIndex} value={format.toLowerCase()}>
                  {format}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FlexRow>
        <FlexRow>
          <Typography variant="h6">PDF Export Settings</Typography>
        </FlexRow>
        <FlexRow>
          <Button
            startIcon={<ExportOutlined />}
            onClick={() => exportToDocument(barcodeStack, documentSize)}
            sx={{ minWidth: "30%" }}
            variant="outlined"
          >
            Export as PDF
          </Button>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Label Size</InputLabel>
            <Select
              name="documentSize"
              value={`${documentSize.width}x${documentSize.height}`}
              onChange={(event) => {
                const [width, height] = event.target.value
                  .split("x")
                  .map(Number);
                updateConfig({
                  target: { name: "documentSize", value: { width, height } },
                });
              }}
              variant="outlined"
              label="Label Size"
              style={{ minWidth: 120 }}
            >
              {sizes.map((size, sizeIndex) => (
                <MenuItem
                  key={sizeIndex}
                  value={`${size.width}x${size.height}`}
                >
                  {size.width}&quot; × {size.height}&quot;
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel>PDF Export Mode</InputLabel>
            <Select
              name="exportMode"
              value={currentConfig.exportMode}
              onChange={(event) =>
                updateConfig({
                  target: { name: "exportMode", value: event.target.value },
                })
              }
              variant="outlined"
              label="PDF Export Mode"
              style={{ minWidth: 120 }}
            >
              <MenuItem value="individual">Export Individually</MenuItem>
              <MenuItem value="merged">Export Merged</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={documentOrientation === "landscape"}
                onChange={handleOrientationToggle}
                color="primary"
              />
            }
            label="Landscape"
          />
        </FlexRow>
      </ExportContainer>
      <BarcodeListContainer theme={theme}>
        {barcodeStack.map((barcode, index) => (
          <BarcodeItem key={index} theme={theme}>
            {barcode.options.format === "QR" ? (
              <QRCode
                value={barcode.value}
                size={barcode.options.height}
                bgColor={barcode.options.background}
                fgColor={barcode.options.lineColor}
                level={barcode.options.qrLevel || "H"}
              />
            ) : (
              <svg
                id={`barcode-${index}`}
                ref={(el) =>
                  el && JsBarcode(el, barcode.value, barcode.options)
                }
              />
            )}
            <FlexRow style={{ justifyContent: "end" }}>
              <div style={{ textAlign: "end" }}>
                <Typography
                  style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  title={barcode.options.format.toUpperCase()}
                >
                  {barcode.options.format.toUpperCase()}
                </Typography>
                <Typography
                  style={{
                    textWrap: "nowrap",
                    overflow: "hidden",
                    maxWidth: "28ch",
                    textOverflow: "ellipsis",
                    fontFamily: "monospace",
                  }}
                  title={barcode.value}
                >
                  {barcode.value}
                </Typography>
              </div>
              <IconButton
                onClick={() => exportBarcode(barcode, index, "pdf")}
                title="Export to PDF"
              >
                <FaRegFilePdf />
              </IconButton>
              <IconButton
                onClick={() => exportBarcode(barcode, index, outputFormat)}
                title={`Export to ${outputFormat.toUpperCase()}`}
              >
                <FaRegFileImage />
              </IconButton>
              <IconButton
                onClick={() =>
                  removeBarcodeFromStack(index, barcodeStack, updateConfig)
                }
                title="Delete"
              >
                <DeleteOutlined />
              </IconButton>
            </FlexRow>
          </BarcodeItem>
        ))}
      </BarcodeListContainer>
    </Container>
  );
};

export default BarcodeOutputList;