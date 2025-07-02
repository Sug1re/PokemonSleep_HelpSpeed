import React from "react";

export const getStyledLabel = (label: string): JSX.Element => {
  if (label.includes("▲▲")) {
    return (
      <>
        おてつだいスピード
        <span style={{ color: "#f44336" }}>▲▲</span>
      </>
    );
  }

  if (label.includes("▼▼")) {
    return (
      <>
        おてつだいスピード
        <span style={{ color: "#2196f3" }}>▼▼</span>
      </>
    );
  }

  return <>{label}</>;
};
