export const handleOptionChange = (
  event,
  barcodeFormats,
  currentConfig,
  updateConfig
) => {
  const { name, value, checked, type } = event.target;
  const targetValue = type === "checkbox" ? checked : value;

  const updateNestedConfig = (path, value) => {
    const keys = path.includes(".") ? path.split(".") : [path];
    const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

    let newConfig = deepClone(currentConfig);
    let nestedObject = newConfig;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        nestedObject[key] = value;
      } else {
        if (!nestedObject[key]) nestedObject[key] = {};
        nestedObject = nestedObject[key];
      }
    });

    updateConfig({ name: keys[0], value: newConfig[keys[0]] });
  };

  updateNestedConfig(name, targetValue);

  if (name === "barcodeOptions.format") {
    const formatInfo = barcodeFormats[value];
    updateNestedConfig("barcodeValue", formatInfo.placeholder);
  }
};
