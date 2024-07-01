export const handleDocumentSizeChange = (
  event,
  updateConfig
) => {
  const { value } = event.target;
  const [width, height] = value.split("x").map(Number);
  updateConfig({
    target: { name: "documentSize", value: { width, height } },
  });
};
