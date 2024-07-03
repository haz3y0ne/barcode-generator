import { useContext } from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";
import { handleOptionChange } from "../../../handlers/handleOptionChange";
import { ConfigContext } from "../../../context/ConfigContext";
import styled from "@emotion/styled";

const FlexRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BarcodeMarginOptions = () => {
    const { currentConfig, updateConfig } = useContext(ConfigContext);
    const { barcodeOptions, barcodeFormats } = currentConfig;
    return (
        <FlexRow style={{ width: "100%" }}>
            <FormControl>
                <TextField
                    type="number"
                    variant="outlined"
                    label="Top Margin"
                    name="barcodeOptions.marginTop"
                    value={barcodeOptions.marginTop}
                    onChange={(event) =>
                        handleOptionChange(
                            event,
                            barcodeFormats,
                            currentConfig,
                            updateConfig
                        )
                    }
                    inputProps={{ min: 0 }}

                />
                <FormHelperText>Default: 0px</FormHelperText>
            </FormControl>
            <FormControl>
                <TextField
                    type="number"
                    variant="outlined"
                    label="Right Margin"
                    name="barcodeOptions.marginRight"
                    value={barcodeOptions.marginRight}
                    onChange={(event) =>
                        handleOptionChange(
                            event,
                            barcodeFormats,
                            currentConfig,
                            updateConfig
                        )
                    }
                    inputProps={{ min: 0 }}
                />
                <FormHelperText>Default: 0px</FormHelperText>
            </FormControl>
            <FormControl>
                <TextField
                    type="number"
                    variant="outlined"
                    label="Bottom Margin"
                    name="barcodeOptions.marginBottom"
                    value={barcodeOptions.marginBottom}
                    onChange={(event) =>
                        handleOptionChange(
                            event,
                            barcodeFormats,
                            currentConfig,
                            updateConfig
                        )
                    }
                    inputProps={{ min: 0 }}
                />
                <FormHelperText>Default: 0px</FormHelperText>
            </FormControl>
            <FormControl>
                <TextField
                    type="number"
                    variant="outlined"
                    label="Left Margin"
                    name="barcodeOptions.marginLeft"
                    value={barcodeOptions.marginLeft}
                    onChange={(event) =>
                        handleOptionChange(
                            event,
                            barcodeFormats,
                            currentConfig,
                            updateConfig
                        )
                    }
                    inputProps={{ min: 0 }}
                />
                <FormHelperText>Default: 0px</FormHelperText>
            </FormControl>
        </FlexRow>
    )
}

export default BarcodeMarginOptions;