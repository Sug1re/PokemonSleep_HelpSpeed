import React from "react";

export const personalityColor = (label: string): React.ReactNode => {
  const parts = label.split(/(▲▲|▼▼)/);

  return (
    <>
      {parts.map((part, i) => {
        if (part === "▲▲") {
          return (
            <span key={i} style={{ color: "#f44336" }}>
              {part}
            </span>
          );
        }
        if (part === "▼▼") {
          return (
            <span key={i} style={{ color: "#2196f3" }}>
              {part}
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};
