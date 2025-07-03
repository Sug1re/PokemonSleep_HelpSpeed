export const sectionTitleSx = {
  py: 2,
  pl: 1,
  mb: 0.5,
  borderRadius: 4,
  fontSize: "0.8rem",
  color: "#ffffff",
  backgroundColor: "#111827",
};

export const groupBoxSx = {
  mb: 3,
  border: "0.5px solid #ffffff",
};

export const groupRowSx = (index: number) => ({
  px: 2,
  py: 1,
  gap: 1,
  color: "#ffffff",
  backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
});

export const linkSx = {
  fontSize: "0.8rem",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    color: "#2196f3",
  },
};