import { useMemo } from "react";

export const useFilterState = (filters: Record<string, string>) => {
  const filterState = useMemo(() => {
    const isAnySelected = Object.values(filters).some((v) => v !== "");
    return isAnySelected ? "1" : "";
  }, [filters]);

  const filterLabel = filterState === "1" ? "ON" : "OFF";

  return { filterLabel };
};
