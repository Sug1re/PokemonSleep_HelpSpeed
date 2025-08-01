import React from "react";
import {
  Box,
  Button,
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
};

const BaseModal = ({ children, title, isOpen, onClose }: Props) => {
  return (
    <>
      <MuiModal
        open={isOpen}
        onClose={onClose}
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
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#f44336",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#FFFFFF",
                pl: "5%",
                backgroundColor: "#f44336",
                width: "50%",
              }}
            >
              {title}
            </Typography>
            <RoundButton color="light" type="submit" width="40%">
              キャンセル
            </RoundButton>
          </Box>

          <FormControl fullWidth>{children}</FormControl>

          <Box
            sx={{
              borderTop: "1px solid #e0e0e0",
              py: 1,
              display: "flex",
              justifyContent: "space-around",
              bgcolor: "#fff",
            }}
          >
            <RoundButton color="light" type="submit" width="40%">
              キャンセル
            </RoundButton>
            <RoundButton color="green" type="submit" width="40%">
              OK
            </RoundButton>
          </Box>
        </Card>
      </MuiModal>
    </>
  );
};

export default BaseModal;
