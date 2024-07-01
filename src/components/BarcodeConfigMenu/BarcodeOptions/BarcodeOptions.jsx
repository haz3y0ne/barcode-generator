import BarcodeSizeOptions from "./BarcodeSizeOptions";
import BarcodeColorOptions from "./BarcodeColorOptions";
import BarcodeDisplayOptions from "./BarcodeDisplayOptions";
import BarcodeTextPositionOptions from "./BarcodeTextPositionOptions";
import BarcodeFontOptions from "./BarcodeFontOptions";

const BarcodeOptions = () => {
  return (
    <>
      <BarcodeSizeOptions />
      <BarcodeColorOptions />
      <BarcodeDisplayOptions />
      <BarcodeTextPositionOptions />
      <BarcodeFontOptions />
    </>
  );
};

export default BarcodeOptions;
