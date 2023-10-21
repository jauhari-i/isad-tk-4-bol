/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import TableFilter from "./TableFilter";
import Pagination from "./Pagination";
import { Medicine, generateMedicineData } from "@/data/dummy";
import { getPaginationDataFromArray } from "@/utils/utils";
import { Chip } from "@mui/joy";
import { AutorenewRounded } from "@mui/icons-material";
import TableMenu from "./TableMenu";
import moment from "moment";

moment.locale("id");

const TableObat = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [data, setData] = React.useState<Medicine[]>([]);
  const [tempData, setTempData] = React.useState<Medicine[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const { currentPage, currentPageData, totalPages } =
    getPaginationDataFromArray(data, page, 10);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const tableHeaderUser = [
    { label: "Name", align: "left" },
    { label: "Composition", align: "left" },
    { label: "Description", align: "left" },
    { label: "Side Effect", align: "left" },
    { label: "Price", align: "left" },
    { label: "Stock", align: "left" },
    { label: "Manufacturer", align: "left" },
    { label: "Action", align: "center" },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      const filtered = data.filter((item) => {
        const regex = new RegExp(event.target.value, "gi");
        return (
          item.name.match(regex) ||
          item.composition.match(regex) ||
          item.manufacturer.match(regex) ||
          item.sideEffects.match(regex) ||
          item.description.match(regex)
        );
      });
      setData(filtered);
    } else {
      setData(tempData);
    }
  };

  React.useEffect(() => {
    const medicine = generateMedicineData(100);
    setData(medicine);
    setTempData(medicine);
    setIsLoaded(true);
  }, []);

  return (
    <React.Fragment>
      <TableFilter
        searchPlaceholder="Search..."
        onSearch={handleSearchChange}
        searchTitle="Search Medicine"
        open={open}
        setOpen={setOpen}
      />
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{ width: 48, textAlign: "center", padding: "12px 6px" }}
              >
                <Checkbox
                  size="sm"
                  indeterminate={
                    selected.length > 0 &&
                    selected.length !== currentPageData.length
                  }
                  checked={selected.length === currentPageData.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked
                        ? currentPageData.map((row) => row.id)
                        : []
                    );
                  }}
                  color={
                    selected.length > 0 ||
                    selected.length === currentPageData.length
                      ? "primary"
                      : undefined
                  }
                  sx={{ verticalAlign: "text-bottom" }}
                />
              </th>
              {tableHeaderUser.map((headCell) => (
                <th key={headCell.label} style={{ padding: "12px 6px" }}>
                  <Typography
                    variant="plain"
                    fontSize={12}
                    fontWeight={500}
                    color="neutral"
                  >
                    {headCell.label}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {isLoaded ? (
            <tbody>
              {currentPageData.map((item, index) => {
                return (
                  <tr key={item.id + index}>
                    <td style={{ textAlign: "center", padding: "12px 6px" }}>
                      <Checkbox
                        size="sm"
                        checked={selected.indexOf(item.id) !== -1}
                        onChange={(event) => {
                          const selectedIndex = selected.indexOf(item.id);
                          let newSelected: readonly number[] = [];

                          if (selectedIndex === -1) {
                            newSelected = newSelected.concat(selected, item.id);
                          } else if (selectedIndex === 0) {
                            newSelected = newSelected.concat(selected.slice(1));
                          } else if (selectedIndex === selected.length - 1) {
                            newSelected = newSelected.concat(
                              selected.slice(0, -1)
                            );
                          } else if (selectedIndex > 0) {
                            newSelected = newSelected.concat(
                              selected.slice(0, selectedIndex),
                              selected.slice(selectedIndex + 1)
                            );
                          }

                          setSelected(newSelected);
                        }}
                        color="primary"
                        sx={{ verticalAlign: "text-bottom" }}
                      />
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ minWidth: 0 }}>
                          <Typography
                            variant="plain"
                            fontSize={14}
                            fontWeight={500}
                            color="neutral"
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </Box>
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Typography
                        variant="plain"
                        fontSize={14}
                        fontWeight={500}
                      >
                        {item.composition}
                      </Typography>
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Typography
                        variant="plain"
                        fontSize={14}
                        fontWeight={500}
                      >
                        {item.description}
                      </Typography>
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Typography
                        variant="plain"
                        fontSize={14}
                        fontWeight={500}
                      >
                        {item.sideEffects}
                      </Typography>
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Typography
                        variant="plain"
                        fontSize={14}
                        fontWeight={500}
                      >
                        {item.price}
                      </Typography>
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Typography
                        variant="plain"
                        fontSize={14}
                        fontWeight={500}
                      >
                        {item.stock + " Pcs"}
                      </Typography>
                    </td>
                    <td style={{ padding: "12px 6px" }}>
                      <Chip variant="soft" size="sm">
                        {item.manufacturer}
                      </Chip>
                    </td>

                    <td>
                      <TableMenu />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: 200,
                    }}
                  >
                    <AutorenewRounded sx={{ mr: 1 }} />
                    <Typography variant="plain" fontSize={14} fontWeight={500}>
                      Loading...
                    </Typography>
                  </Box>
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      </Sheet>
      <Pagination
        currentPage={currentPage}
        key={"pagination-users"}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

export default TableObat;
