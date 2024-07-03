import { useContext, useState, useEffect } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { ConfigContext } from "../../../context/ConfigContext";
import { VscThreeBars } from "react-icons/vsc";
import { Code } from "@mui/icons-material";
import ConfirmationModal from "../../common/ConfirmationModal";
import ErrorMessage from "../../common/ErrorMessage";

const BarcodeValueInput = () => {
  const { currentConfig, updateConfig } = useContext(ConfigContext);
  const {
    barcodeValue,
    barcodeOptions,
    barcodeFormats,
    error,
    isMultilineInput,
    isCodeView,
    jsonOutput,
  } = currentConfig;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const { format, maxLength } = barcodeOptions;
  const currentFormat = format || "CODE128";
  const currentMaxLength = maxLength || 255;

  useEffect(() => {
    const jsonString = JSON.stringify({ barcodeValue, barcodeOptions });
    updateConfig({ name: "jsonOutput", value: jsonString });
  }, [barcodeValue, barcodeOptions, updateConfig]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (isCodeView) {
      updateConfig({ name: "jsonOutput", value });
    } else {
      updateConfig({
        name: "barcodeValue",
        value: value,
      });
    }
  };

  const handleSwitchClick = (type) => {
    if (type === "isCodeView" && !isCodeView) {
      setModalType(type);
      setShowModal(true);
    } else if (
      barcodeValue !== barcodeFormats[currentFormat]?.placeholder ||
      barcodeValue.includes("\n")
    ) {
      setModalType(type);
      setShowModal(true);
    } else {
      updateConfig({ name: type, value: !currentConfig[type] });
    }
  };

  const confirmSwitch = () => {
    if (modalType === "isMultilineInput") {
      updateConfig({
        name: "barcodeValue",
        value: barcodeFormats[currentFormat]?.placeholder || "",
      });
    }
    updateConfig({ name: modalType, value: !currentConfig[modalType] });
    setShowModal(false);
  };

  const displayValue = isCodeView ? jsonOutput : barcodeValue;

  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        label={isCodeView ? "JSON" : "Barcode Value"}
        name="barcodeValue"
        value={displayValue}
        onChange={handleChange}
        inputProps={{
          maxLength: currentMaxLength,
          placeholder: barcodeFormats[currentFormat]?.placeholder || "",
          multiline: isMultilineInput || isCodeView,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {!isCodeView && (
                <Button
                  variant="text"
                  title="Switch to Multiline"
                  onClick={() => handleSwitchClick("isMultilineInput")}
                >
                  <VscThreeBars style={{ fontSize: "1.2rem" }} />
                </Button>
              )}
              <Button
                variant="text"
                title="Switch to JSON"
                onClick={() => handleSwitchClick("isCodeView")}
              >
                <Code style={{ fontSize: "1.2rem" }} />
              </Button>
            </InputAdornment>
          ),
        }}
        multiline={isMultilineInput || isCodeView}
        rows={isMultilineInput ? 4 : isCodeView ? 15 : 1}
      />
      {error && <ErrorMessage message={error} />}

      <ConfirmationModal
        title={modalType === "isMultilineInput" ? "Confirm Switch" : "Switch to Code View"}
        content={
          modalType === "isMultilineInput"
            ? "Switching input will revert the value back to default. Are you sure you would like to do this?"
            : "Switching to code view is for advanced users only and does not provide the same barcode value validation as the form view. Are you sure you want to proceed?"
        }
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmSwitch}
      />
    </>
  );
};

export default BarcodeValueInput;
