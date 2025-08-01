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
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectPokemonFilterModal from "./SelectPokemonFilterModal";
import {
  berryOptions,
  sleepTypeOptions,
  strengthsOptions,
} from "@/constants/options";
import * as utils from "@/utils/index";
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

const Modal = ({
  isOpen,
  modalType,
  filterLabel,
  selectedBerry,
  selectedSleepType,
  selectedStrengths,
  getFilteredPokemonKeys,
  handleClose,
  handleOpen,
  handleModalTypeChange,
  handleModalTypeNoChange,
  handleModalSelect,
  resetFilterData,
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
          {/* 上部固定 */}
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#FFFFFF",
                pl: "10%",
                py: 1,
                gap: 1,
                backgroundColor: "#f44336",
                width: "100%",
              }}
            >
              {modalType === "pokemon"
                ? "ポケモンを選択"
                : modalType === "personality"
                ? "性格を選択"
                : modalType === "subSkill"
                ? "サブスキルを選択"
                : modalType === "pokemonFilter"
                ? "絞り込む"
                : "選択肢を表示"}
            </Typography>
            <Button
              disableRipple
              disableElevation
              onClick={
                modalType === "pokemonFilter" ? resetFilterData : handleClose
              }
              sx={{
                position: "absolute",
                fontSize: "10px",
                borderRadius: 4,
                padding: 0,
                px: 2.5,
                py: 0.25,
                top: "50%", // 垂直方向中央の起点
                right: "5%",
                transform: "translateY(-50%)",
                boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                color: "#111827",
                backgroundColor: "#ffffff",
                ":hover": {
                  backgroundColor: "#ffffff",
                  transform: "translateY(-50%) scale(0.95)",
                  boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                },
              }}
            >
              {modalType === "pokemonFilter" ? "リセット" : "キャンセル"}
            </Button>
          </Box>

          <FormControl fullWidth sx={{ my: 2 }}>
            {modalType === "pokemon" && (
              <Stack spacing={1} sx={{ alignItems: "center" }}>
                {/* OFFボタンは常に固定表示 */}
                <Button
                  disableRipple
                  disableElevation
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#111827",
                    borderRadius: "4px",
                    px: 8,
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    ":hover": {
                      color: "#ffffff",
                      transform: "scale(0.95)",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#ffffff",
                      transition: "color 0.3s ease",
                    },
                    ":hover .MuiSvgIcon-root": {
                      color: "#ffffff",
                    },
                  }}
                  onClick={() => {
                    if (modalType === "pokemon") {
                      handleOpen("pokemonFilter");
                    }
                  }}
                >
                  <SearchIcon sx={{ mr: 1 }} />
                  {filterLabel}
                </Button>

                <Box sx={styles.modalButton}>
                  {getFilteredPokemonKeys().length === 0 ? (
                    <Box sx={styles.formControl}>
                      <Typography
                        sx={{
                          color: "#f44336",
                        }}
                      >
                        該当するポケモンが見つかりませんでした
                      </Typography>
                    </Box>
                  ) : (
                    getFilteredPokemonKeys().map((label, index) => (
                      <Button
                        key={index}
                        color="inherit"
                        disableRipple
                        disableElevation
                        sx={styles.selectButton}
                        onClick={() => handleModalSelect("pokemon", label)}
                      >
                        {label}
                      </Button>
                    ))
                  )}
                </Box>
              </Stack>
            )}

            {modalType === "pokemonFilter" && (
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
            )}

            {modalType === "personality" && (
              <Stack spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={styles.modalButton}>
                  {[
                    "おてつだいスピード▲▲",
                    "おてつだいスピード▼▼",
                    "無補正",
                  ].map((label, index) => (
                    <Button
                      key={index}
                      color="inherit"
                      disableRipple
                      disableElevation
                      sx={styles.selectButton}
                      onClick={() => handleModalSelect("personality", label)}
                    >
                      {utils.getStyledLabel(label)}
                    </Button>
                  ))}
                </Box>
              </Stack>
            )}

            {modalType === "subSkill" && (
              <Stack spacing={1} sx={{ alignItems: "center" }}>
                <Box sx={styles.modalButton}>
                  {[
                    "おてつだいスピードS",
                    "おてつだいスピードM",
                    "おてつだいスピードSとM",
                    "なし",
                  ].map((label, index) => {
                    return (
                      <Button
                        key={index}
                        color="inherit"
                        disableRipple
                        disableElevation
                        sx={styles.selectButton}
                        onClick={() => handleModalSelect("subSkill", label)}
                      >
                        {label}
                      </Button>
                    );
                  })}
                </Box>
              </Stack>
            )}
          </FormControl>

          {/* 下部固定 */}
          {modalType === "pokemonFilter" && (
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
                    transform: "scale(0.95)", // ← 拡大しつつ中央位置キープ
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
          )}
        </Card>
      </MuiModal>
    </>
  );
};

export default Modal;
