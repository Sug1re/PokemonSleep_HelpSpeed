import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import {
  berryOptions,
  sleepTypeOptions,
  strengthsOptions,
} from "@/constants/options";
import * as styles from "@/styles/calculator";
import BaseModal from "../Base/BaseModal";

type Props = {
  opened: boolean;
  onClose: () => void;
  // filterLabel: string;
  // selectedBerry: string;
  // selectedSleepType: string;
  // selectedStrengths: string;
  // getFilteredPokemonKeys: () => string[];
  // handleClose: () => void;
  // handleModalTypeChange: () => void;
  // handleModalTypeNoChange: () => void;
  // handleModalSelect: (
  //   type: "pokemon" | "personality" | "subSkill",
  //   value: string
  // ) => void;
  // resetFilterData: () => void;
  // setSelectedBerry: (value: string) => void;
  // setSelectedSleepType: (value: string) => void;
  // setSelectedStrengths: (value: string) => void;
};

const PokemonFilterModal = ({
  opened,
  onClose,
}: // selectedBerry,
// selectedSleepType,
// selectedStrengths,
// setSelectedBerry,
// setSelectedSleepType,
// setSelectedStrengths,
Props) => {
  return (
    <>
      <BaseModal
        title="絞り込む"
        isOpen={opened}
        onClose={onClose}
        type="filter"
      >
        a
        {/* <FormControl fullWidth sx={{ my: 2 }}>
          <Stack
            spacing={1}
            sx={{
              maxHeight: 300,
              overflowY: "auto",
              mx: 12,
            }}
          >
            <FormControl>
              <FormLabel id="berry-label" sx={styles.filterFormLabel}>
                タイプ
              </FormLabel>
              <Box sx={styles.formBorder} />
              <RadioGroup
                aria-labelledby="berry-label"
                value={selectedBerry}
                onChange={(e) => setSelectedBerry(e.target.value)}
                name="berry"
                sx={styles.formRadioGroup}
              >
                {berryOptions.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio sx={styles.customRadio} />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="sleepType-label" sx={styles.filterFormLabel}>
                睡眠タイプ
              </FormLabel>
              <Box sx={styles.formBorder} />
              <RadioGroup
                aria-labelledby="sleepType-label"
                value={selectedSleepType}
                onChange={(e) => setSelectedSleepType(e.target.value)}
                name="sleepType"
                sx={styles.formRadioGroup}
              >
                {sleepTypeOptions.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio sx={styles.customRadio} />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="strengths-label" sx={styles.filterFormLabel}>
                とくいなもの
              </FormLabel>
              <Box sx={styles.formBorder} />
              <RadioGroup
                aria-labelledby="strengths-label"
                value={selectedStrengths}
                onChange={(e) => setSelectedStrengths(e.target.value)}
                name="strengths"
                sx={styles.formRadioGroup}
              >
                {strengthsOptions.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio sx={styles.customRadio} />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Stack>
        </FormControl> */}
      </BaseModal>
    </>
  );
};

export default PokemonFilterModal;
