import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal as MuiModal,
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

type ModalType =
  | "pokemon"
  | "personality"
  | "subSkill"
  | "pokemonFilter"
  | null;

type Props = {
  isOpen: boolean;
  modalType: ModalType;
  filterLabel: string;
  selectedBerry: string;
  selectedSleepType: string;
  selectedStrengths: string;
  getFilteredPokemonKeys: () => string[];
  handleClose: () => void;
  handleOpen: (type: ModalType) => void;
  handleModalTypeChange: () => void;
  handleModalTypeNoChange: () => void;
  handleModalSelect: (
    type: "pokemon" | "personality" | "subSkill",
    value: string
  ) => void;
  resetFilterData: () => void;
  setSelectedBerry: (value: string) => void;
  setSelectedSleepType: (value: string) => void;
  setSelectedStrengths: (value: string) => void;
};

const SelectPokemonFilterModal = ({
  isOpen,
  selectedBerry,
  selectedSleepType,
  selectedStrengths,
  handleClose,
  handleModalTypeChange,
  handleModalTypeNoChange,
  setSelectedBerry,
  setSelectedSleepType,
  setSelectedStrengths,
}: Props) => {
  return (
    <>
      <MuiModal
        open={isOpen}
        onClose={handleClose}
        BackdropProps={{
          sx: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "60%" },
            bgcolor: "background.paper",
            borderRadius: 3,
          }}
        >
          <FormControl fullWidth sx={{ my: 2 }}>
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
          </FormControl>

          <Box
            sx={{
              borderTop: "1px solid #e0e0e0",
              py: 1,
              display: "flex",
              justifyContent: "space-around",
              bgcolor: "#fff",
              flexShrink: 0,
            }}
          >
            <Button
              disableRipple
              disableElevation
              onClick={handleModalTypeNoChange}
              sx={{
                fontSize: "12px",
                borderRadius: 6,
                px: 6,
                border: 0.5,
                boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                color: "#111827",
                borderColor: "#999",
                backgroundColor: "#ffffff",
                ":hover": {
                  backgroundColor: "#ffffff",
                  transform: "scale(0.95)",
                  boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                },
              }}
            >
              キャンセル
            </Button>
            <Button
              disableRipple
              disableElevation
              onClick={handleModalTypeChange}
              sx={{
                fontSize: "12px",
                borderRadius: 6,
                px: 8,
                border: 0.5,
                boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                color: "#ffffff",
                borderColor: "#388E3C",
                backgroundColor: "#4CAF50",
                ":hover": {
                  backgroundColor: "#4CAF50",
                  transform: " scale(0.95)",
                  boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                },
              }}
            >
              OK
            </Button>
          </Box>
        </Card>
      </MuiModal>
    </>
  );
};

export default SelectPokemonFilterModal;
