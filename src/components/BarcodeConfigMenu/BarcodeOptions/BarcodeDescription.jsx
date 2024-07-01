import { useContext } from "react";
import { Divider, Link, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import styled from "@emotion/styled";
import { ConfigContext } from "../../../context/ConfigContext";

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  background-color: #f0f2f5;
  margin: 8px 16px 24px 16px;
  border-radius: 8px;
`;

const BarcodeDescription = () => {
  const { currentConfig } = useContext(ConfigContext);
  const { barcodeOptions, barcodeFormats } = currentConfig;

  return (
    <Description>
      <Info />
      <Typography sx={{ fontSize: "0.8rem" }}>
        <strong>{`${barcodeOptions.format[0].toUpperCase()}${barcodeOptions.format.slice(
          1
        )}`}</strong>{" "}
        is a{" "}
        {barcodeFormats[barcodeOptions.format]?.description || "barcode format"}
      </Typography>
      <Divider flexItem />
      <Typography sx={{fontSize: "0.8rem",}}>
        <Link variant="sublte" href={barcodeFormats[barcodeOptions.format]?.link} target="_blank">Read more</Link>
      </Typography>
    </Description>
  );
};

export default BarcodeDescription;
