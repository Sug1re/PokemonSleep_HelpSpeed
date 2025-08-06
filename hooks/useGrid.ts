import { useState } from "react";

type GridKey = "level" | "skill";

export const useGrid = () => {
  const [formData, setFormData] = useState({
    pokemonName: "",
    personality: "",
    subSkill: "",
    energy: "",
    ribbon: "",
    level: 1,
    skill: 0,
    ticket: false,
  });

  const handleSliderChange = (key: GridKey, newValue: number) => {
    setFormData((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: GridKey
  ) => {
    const newValue =
      e.target.value === ""
        ? key === "skill"
          ? 0
          : 1
        : Number(e.target.value);

    setFormData((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const handleBlur = (key: GridKey) => {
    setFormData((prev) => {
      let adjustedValue = prev[key];

      if (key === "skill") {
        if (adjustedValue < 0) adjustedValue = 0;
        else if (adjustedValue > 5) adjustedValue = 5;
      } else {
        if (adjustedValue < 1) adjustedValue = 1;
        else if (adjustedValue > 100) adjustedValue = 100;
      }

      return {
        ...prev,
        [key]: adjustedValue,
      };
    });
  };

  return {
    formData,
    setFormData,
    handleSliderChange,
    handleInputChange,
    handleBlur,
  };
};
