"use client";

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { calculatePokemonSpeed } from "@/lib/api/pokemon";

import PokemonButton from "../Buttons/PokemonButton";
import PersonalityButton from "../Buttons/PersonalityButton";
import SubSkillButton from "../Buttons/SubSkillButton";
import EnergyButton from "../Buttons/EnergyButton";
import FormSubmitButton from "../Buttons/FormSubmitButton";
import AddButton from "../Buttons/AddButton";
import BaseGrid from "../Base/BaseGrid";
import { useGrid } from "@/hooks/useGrid";
import { useLabel } from "@/hooks/useLabel";
import RibbonButton from "../Buttons/RibbonButton";
import BaseSwitch from "../Base/BaseSwitch";

const CalculatorForm = () => {
  const {
    formData,
    setFormData,
    handleSliderChange,
    handleInputChange,
    handleBlur,
  } = useGrid();

  const { selectedLabels, addLabel } = useLabel({ stateLabel: "" });

  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    console.log("Submitting form with data:", formData);

    try {
      const data = await calculatePokemonSpeed(formData);
      setResult(data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  const handleAddSelect = (label: string) => {
    addLabel(label);
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
          {selectedLabels.includes("げんき") && (
            <EnergyButton
              value={formData.energy}
              onSelect={(name) =>
                setFormData((prev) => ({ ...prev, energy: name }))
              }
            />
          )}
          {/* {selectedLabels.includes("おやすみリボン") && (
            <RibbonButton
              value={formData.ribbon}
              onSelect={(name) =>
                setFormData((prev) => ({ ...prev, ribbon: name }))
              }
            />
          )} */}
          <AddButton
            value="add"
            onSelect={handleAddSelect}
            excludedItems={selectedLabels}
          />

          <BaseGrid
            type="level"
            text="Lv."
            value={formData.level}
            onChange={handleSliderChange}
            onInputChange={handleInputChange}
            onBlur={handleBlur}
          />

          {selectedLabels.includes("おてつだいボーナス") && (
            <BaseGrid
              type="skillBonus"
              text="おてつだいボーナス"
              value={formData.skillBonus}
              onChange={handleSliderChange}
              onInputChange={handleInputChange}
              onBlur={handleBlur}
            />
          )}

          {selectedLabels.includes("キャンチケ") && (
            <BaseSwitch
              text="キャンチケ"
              checked={formData.ticket}
              onChange={(checked) =>
                setFormData((prev) => ({ ...prev, ticket: checked }))
              }
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

      {Array.isArray(error)
        ? error.map((errMsg, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Typography color="error">{errMsg}</Typography>
            </Box>
          ))
        : error && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
    </>
  );
};

export default CalculatorForm;
