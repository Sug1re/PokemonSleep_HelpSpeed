"use client";

import React, { useState } from "react";
import { Box, Grid, Input, Slider, Stack, Typography } from "@mui/material";

import { calculatePokemonSpeed } from "@/lib/api/pokemon";

import PokemonButton from "../Buttons/PokemonButton";
import PersonalityButton from "../Buttons/PersonalityButton";
import SubSkillButton from "../Buttons/SubSkillButton";
import FormSubmitButton from "../Buttons/FormSubmitButton";
import AddButton from "../Buttons/AddButton";
import { useGrid } from "@/hooks/useGrid";
import BaseGrid from "../Base/BaseGrid";
import { useLabel } from "@/hooks/useLabel";

const CalculatorForm = () => {
  const {
    formData,
    setFormData,
    handleSliderChange,
    handleInputChange,
    handleBlur,
  } = useGrid();

  const { selectedLabel, setLabel } = useLabel({ stateLabel: "" });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const data = await calculatePokemonSpeed(formData);
      setResult(data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  const handleAddSelect = (label: string) => {
    setLabel(label);
    setSelectedItems((prev) => [...prev, label]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <Stack spacing={2} alignItems="center">
          <PokemonButton
            value={formData.pokemonName}
            onSelect={(name) =>
              setFormData((prev) => ({ ...prev, pokemonName: name }))
            }
          />
          <PersonalityButton
            value={formData.personality}
            onSelect={(name) =>
              setFormData((prev) => ({ ...prev, personality: name }))
            }
          />
          <SubSkillButton
            value={formData.subSkill}
            onSelect={(name) =>
              setFormData((prev) => ({ ...prev, subSkill: name }))
            }
          />

          <AddButton
            value="add"
            onSelect={handleAddSelect}
            excludedItems={selectedItems}
          />

          <BaseGrid
            type="level"
            text="Lv."
            value={formData.level}
            onChange={handleSliderChange}
            onInputChange={handleInputChange}
            onBlur={handleBlur}
          />

          {selectedLabel === "おてつだいボーナス" && (
            <BaseGrid
              type="skill"
              text="おてつだいボーナス"
              value={formData.skill}
              onChange={handleSliderChange}
              onInputChange={handleInputChange}
              onBlur={handleBlur}
            />
          )}

          <FormSubmitButton />
        </Stack>
      </form>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mt: 8,
            mb: 4,
            width: "85%",
            borderRadius: 4,
            color: "#ffffff",
            backgroundColor: "#111827",
          }}
        >
          <Typography variant="subtitle1" sx={{ px: 2, py: 1 }}>
            おてつだい時間：
            {result && result.formatted_time}
          </Typography>
        </Box>
      </Box>

      {error && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}
    </>
  );
};

export default CalculatorForm;
