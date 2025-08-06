import { useCallback, useState } from "react";

type Props = {
    stateLabel: string;
    stateLabels?: string[];
};

export const useLabel = ({ stateLabel,stateLabels = [], }: Props) => {

  const [selectedLabel, setSelectedLabel] = useState<string>(stateLabel);
  const [selectedLabels, setSelectedLabels] = useState<string[]>(stateLabels);

  const setLabel = useCallback((label: string) => {
    if (typeof label === "string" && label.trim() !== "") {
      setSelectedLabel(label);
    }
  }, []);

    const addLabel = useCallback((label: string) => {
    if (
      typeof label === "string" &&
      label.trim() !== "" &&
      !selectedLabels.includes(label)
    ) {
      setSelectedLabels((prev) => [...prev, label]);
    }
  }, [selectedLabels]);

  return {
    selectedLabel,
    selectedLabels,
    setLabel,
    addLabel
  };
};
