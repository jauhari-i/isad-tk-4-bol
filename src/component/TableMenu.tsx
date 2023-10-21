import { MoreHorizRounded } from "@mui/icons-material";
import {
  Divider,
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
} from "@mui/joy";
import React from "react";

const TableMenu = () => {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral", size: "sm" } }}
      >
        <MoreHorizRounded />
      </MenuButton>
      <Menu size="sm" sx={{ minWidth: 140 }}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Rename</MenuItem>
        <MenuItem>Move</MenuItem>
        <Divider />
        <MenuItem color="danger">Delete</MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default TableMenu;
