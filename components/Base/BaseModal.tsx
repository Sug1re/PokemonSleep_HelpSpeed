import React from "react";
import {
  Box,
  Card,
  FormControl,
  Modal as MuiModal,
  Typography,
} from "@mui/material";
import { RoundButton } from "./RoundButton";

type Props = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  type?: "filter" | "other";
};

const BaseModal = ({
  children,
  title,
  isOpen,
  onClose,
  type = "other",
}: Props) => {
  return (
    <>
      <MuiModal
        open={isOpen}
        onClose={onClose}
        BackdropProps={{
          sx: { backgroundColor: "rgba(170, 170, 170, 0.31)" },
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
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              bgcolor: "#f44336",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#FFFFFF",
                backgroundColor: "#f44336",
                width: "50%",
              }}
            >
              {title}
            </Typography>
            <RoundButton
              color="light"
              type="submit"
              size="small"
              onClick={onClose}
            >
              {type === "other" ? "キャンセル" : "リセット"}
            </RoundButton>
          </Box>

          <FormControl fullWidth>{children}</FormControl>

          {type === "filter" && (
            <Box
              sx={{
                borderTop: "1px solid #e0e0e0",
                py: 1,
                display: "flex",
                justifyContent: "space-around",
                bgcolor: "#fff",
              }}
            >
              <RoundButton
                color="light"
                type="submit"
                width="40%"
                onClick={onClose}
              >
                キャンセル
              </RoundButton>
              <RoundButton color="green" type="submit" width="40%">
                OK
              </RoundButton>
            </Box>
          )}
        </Card>
      </MuiModal>
    </>
  );
};

export default BaseModal;
