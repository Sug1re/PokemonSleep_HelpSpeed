export const selectButton = {
  color: "#111827",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  transition: "all 0.3s ease",
  ":hover": {
    color: "#ffffff",
    backgroundColor: "#111827",
    transform: "scale(0.95)",
  },
};

export const modalButton = {
  maxHeight: 300,
  overflowY: "auto",
  width: "60%",
  gap: 1,
  display: "flex",
  flexDirection: "column",
};

export const formControl = {
  display: "flex",
  justifyContent: "center",
};

export const customRadio = {
  color: "#111827",
  "&.Mui-checked": {
    color: "#111827",
  },
};

export const filterFormLabel = {
  color: "#111827 !important",
  borderLeft: "8px solid #4CAF50",
  pl: 1,
};

export const formBorder = {
  borderBottom: "1px solid #ccc",
  my: 1,
};

export const formRadioGroup = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  mb: 2,
};