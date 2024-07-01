export const handleOrientationToggle = ({}) => {
  const newOrientation = !isLandscape ? "landscape" : "portrait";
  updateConfig({
    target: { name: "documentOrientation", value: newOrientation },
  });
  setIsLandscape(!isLandscape);
};
