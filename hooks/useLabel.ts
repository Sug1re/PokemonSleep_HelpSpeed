import { useCallback, useState } from "react";

type Props = {
    stateLabel: string;
};

export const useLabel = ({ stateLabel }: Props) => {

  const [selectedLabel, setSelectedLabel] = useState<string>(stateLabel);

  const setLabel = useCallback((label: string) => {
    if (typeof label === "string" && label.trim() !== "") {
      setSelectedLabel(label);
    }
  }, []);

  return {
    selectedLabel,
    setLabel,
  };
};
