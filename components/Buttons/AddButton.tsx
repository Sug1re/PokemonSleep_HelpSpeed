"use client";

import React from "react";
import BaseButton from "../Base/BaseButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddModal from "../Modals/AddModal";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  value: string;
  //   onSelect: (name: string) => void;
};

const AddButton = ({
  value,
}: // onSelect
Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  //   const handleSelect = (label: string) => {
  //     onSelect(label);
  //   };
  return (
    <>
      <BaseButton
        color="light"
        type="button"
        width="80%"
        leftIcon={<AddCircleOutlineIcon />}
        onClick={handlers.open}
      >
        追加
      </BaseButton>

      <AddModal
        opened={isOpened}
        onClose={handlers.close}
        // onSelect={handleSelect}
      />
    </>
  );
};

export default AddButton;
