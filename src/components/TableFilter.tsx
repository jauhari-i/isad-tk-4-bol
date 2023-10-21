import { FilterAlt, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
  Sheet,
  Typography,
} from "@mui/joy";
import React from "react";

export type FilterItem = {
  name: string;
  placeholder: string;
  options: { label: string; value: string }[];
  onSelectFilter: (value: string) => void;
};

interface TableFilterProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterData?: FilterItem[];
  onSearch: (Event: React.ChangeEvent<HTMLInputElement>) => void;
  searchPlaceholder: string;
  searchTitle: string;
}

const TableFilter = ({
  open,
  setOpen,
  filterData,
  onSearch,
  searchPlaceholder,
  searchTitle,
}: TableFilterProps) => {
  const renderFilterData = (filterData: FilterItem[]) => {
    return filterData.map((item, index) => (
      <FormControl key={index} size="sm">
        <FormLabel>{item.name}</FormLabel>
        <Select
          size="sm"
          onChange={(
            _event: React.SyntheticEvent | null,
            value: string | null
          ) => {
            if (value) {
              item.onSelectFilter(value);
            } else {
              item.onSelectFilter("");
            }
          }}
          placeholder={item.placeholder}
        >
          {item.options.map((option, index) => (
            <Option key={index} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </FormControl>
    ));
  };
  return (
    <React.Fragment>
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          my: 1,
          gap: 1,
        }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<Search />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAlt />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormControl sx={{ flex: 1 }} size="sm">
                <FormLabel>{searchTitle}</FormLabel>
                <Input
                  size="sm"
                  placeholder={searchPlaceholder}
                  startDecorator={<Search />}
                  onChange={onSearch}
                />
              </FormControl>
              {filterData && renderFilterData(filterData)}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: {
            xs: "none",
            sm: "flex",
          },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: {
              xs: "120px",
              md: "160px",
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>{searchTitle}</FormLabel>
          <Input
            size="sm"
            placeholder={searchPlaceholder}
            startDecorator={<Search />}
            onChange={onSearch}
          />
        </FormControl>
        <>{filterData && renderFilterData(filterData)}</>
      </Box>
    </React.Fragment>
  );
};

export default TableFilter;
