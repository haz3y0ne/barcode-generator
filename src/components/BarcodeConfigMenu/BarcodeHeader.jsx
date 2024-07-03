import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import {
  Delete as DeleteOutlined,
  SaveAlt as ExportOutlined,
  Download as ExportSettingsOutlined,
  Upload as ImportSettingsOutlined,
} from "@mui/icons-material";
import { FaBarcode } from "react-icons/fa";
import { clearBarcodeStack } from "../../functions/clearBarcodeStack";
import { exportSingleBarcode } from "../../functions/exportSingleBarcode";
import { useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ConfigContext } from "../../context/ConfigContext";
import ConfirmationModal from "../common/ConfirmationModal";

const FlexRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const BarcodeHeader = () => {
  const theme = useTheme();
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const { barcodeValue, barcodeOptions, outputFormat } = currentConfig;
  const [showModal, setShowModal] = useState(false);

  const handleClearStack = () => {
    updateConfig({ name: "barcodeStack", value: [] });
    setShowModal(false);
  };

  return (
    <>
      <FlexRow>
        <FlexRow
          style={{
            alignItems: "center",
            justifyContent: "start",
            gap: "8px",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <FaBarcode style={{ fontSize: "3rem" }} />
          <Title theme={theme} style={{ fontSize: "1.8rem" }}>
            BARCODE
            <span style={{ color: theme.palette.primary.main }}>PRO</span>
          </Title>
        </FlexRow>
        <FlexRow>
          <IconButton
            onClick={() => setShowModal(true)}
            title="Clear All"
            style={{ color: theme.palette.primary.main }}
          >
            <DeleteOutlined />
          </IconButton>
          <IconButton
            onClick={() =>
              exportSingleBarcode(barcodeValue, barcodeOptions, outputFormat)
            }
            title="Export Single"
            style={{ color: theme.palette.primary.main }}
          >
            <ExportOutlined />
          </IconButton>
          <IconButton
            title="Export Current Settings"
            style={{ color: theme.palette.primary.main }}
          >
            <ExportSettingsOutlined />
          </IconButton>
          <IconButton
            title="Import Settings"
            style={{ color: theme.palette.primary.main }}
          >
            <ImportSettingsOutlined />
          </IconButton>
        </FlexRow>
      </FlexRow>

      <ConfirmationModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleClearStack}
        title="Confirm Clear"
        content="Are you sure you want to clear all barcodes from the stack?"
      />
    </>
  );
};

export default BarcodeHeader;
