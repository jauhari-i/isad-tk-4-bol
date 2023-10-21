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
import { Doctor, generateDoctorData } from "@/data/dummy";
import { getPaginationDataFromArray } from "@/utils/utils";
import { Chip, ColorPaletteProp } from "@mui/joy";
import { AutorenewRounded, Block, CheckRounded } from "@mui/icons-material";
import TableMenu from "./TableMenu";

const TabelDokter = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [doctorData, setDoctorData] = React.useState<Doctor[]>([]);
  const [tempDoctorData, setTempDoctorData] = React.useState<Doctor[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(true);

  const { currentPage, currentPageData, totalPages } =
    getPaginationDataFromArray(doctorData, page, 10);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const tableHeader = [
    { label: "Name", align: "left" },
    { label: "Specialized", align: "left" },
    { label: "Schedule", align: "left" },
    { label: "Status", align: "left" },
    { label: "Phone", align: "left" },
    { label: "Action", align: "right" },
  ];

  const filterData = [
    {
      name: "Status",
      placeholder: "Select status",
      options: [
        { label: "All", value: "" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      onSelectFilter: (value: string) => {
        if (value === "") return setDoctorData(tempDoctorData);
        const filteredData = doctorData.filter((item) => item.status === value);
        setDoctorData(filteredData);
      },
    },
    {
      name: "Schedule",
      placeholder: "Select schedule",
      options: [
        { label: "All", value: "" },
        { label: "Monday", value: "monday" },
        { label: "Tuesday", value: "tuesday" },
        { label: "Wednesday", value: "wednesday" },
        { label: "Thursday", value: "thursday" },
        { label: "Friday", value: "friday" },
        { label: "Saturday", value: "saturday" },
        { label: "Sunday", value: "sunday" },
      ],
      onSelectFilter: (value: string) => {
        if (value === "") return setDoctorData(tempDoctorData);

        const filteredData = doctorData.filter((item) =>
          item.schedule.toLowerCase().includes(value.toLowerCase())
        );
        setDoctorData(filteredData);
      },
    },
    {
      name: "Specialized",
      placeholder: "Select specialized",
      options: [
        { label: "All", value: "" },
        { label: "Dentist", value: "dentist" },
        { label: "Dermatologist", value: "dermatologist" },
        { label: "Cardiologist", value: "cardiologist" },
        { label: "Neurologist", value: "neurologist" },
        { label: "Ophthalmologist", value: "ophthalmologist" },
        { label: "Pediatrician", value: "pediatrician" },
      ],
      onSelectFilter: (value: string) => {
        if (value === "") return setDoctorData(tempDoctorData);

        const filteredData = doctorData.filter((item) =>
          item.specialty.toLowerCase().includes(value.toLowerCase())
        );
        setDoctorData(filteredData);
      },
    },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      const filtered = doctorData.filter((item) => {
        const regex = new RegExp(event.target.value, "gi");
        return (
          item.fullName.match(regex) ||
          item.email.match(regex) ||
          item.specialty.match(regex) ||
          item.schedule.match(regex) ||
          item.status.match(regex)
        );
      });
      setDoctorData(filtered);
    } else {
      setDoctorData(tempDoctorData);
    }
  };

  React.useEffect(() => {
    const data = generateDoctorData(50);
    setDoctorData(data);
    setTempDoctorData(data);
    setIsLoaded(false);
  }, []);

  return (
    <React.Fragment>
      <TableFilter
        open={open}
        setOpen={setOpen}
        filterData={filterData}
        onSearch={handleSearchChange}
        searchPlaceholder="Search by name, email, specialized, schedule, status"
        searchTitle="Search Doctor"
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
              {tableHeader.map((headCell) => (
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
              <tr>
                <td colSpan={7}>
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
          ) : (
            <tbody>
              {currentPageData.map((row, index) => (
                <tr key={row.id}>
                  <td style={{ textAlign: "center", padding: "12px 6px" }}>
                    <Checkbox
                      size="sm"
                      checked={selected.indexOf(row.id) !== -1}
                      onChange={(event) => {
                        const selectedIndex = selected.indexOf(row.id);
                        let newSelected: readonly number[] = [];

                        if (selectedIndex === -1) {
                          newSelected = newSelected.concat(
                            selected,
                            row.id
                          ) as readonly number[];
                        } else if (selectedIndex === 0) {
                          newSelected = newSelected.concat(
                            selected.slice(1)
                          ) as readonly number[];
                        } else if (selectedIndex === selected.length - 1) {
                          newSelected = newSelected.concat(
                            selected.slice(0, -1)
                          ) as readonly number[];
                        } else if (selectedIndex > 0) {
                          newSelected = newSelected.concat(
                            selected.slice(0, selectedIndex),
                            selected.slice(selectedIndex + 1)
                          ) as readonly number[];
                        }

                        setSelected(newSelected);
                      }}
                      color="primary"
                      sx={{ verticalAlign: "text-bottom" }}
                    />
                  </td>
                  <td style={{ padding: "12px 6px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        variant="outlined"
                        size="sm"
                        src={row.avatarUrl}
                        sx={{ mr: 2 }}
                      />
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="plain"
                          fontSize={14}
                          fontWeight={500}
                          color="neutral"
                        >
                          {"dr. " + row.fullName}
                        </Typography>
                        <Typography
                          variant="plain"
                          fontSize={12}
                          fontWeight={400}
                          color="neutral"
                        >
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </td>
                  <td style={{ padding: "12px 6px" }}>
                    <Typography
                      variant="plain"
                      fontSize={14}
                      fontWeight={500}
                      color="neutral"
                    >
                      {row.specialty}
                    </Typography>
                  </td>
                  <td style={{ padding: "12px 6px" }}>
                    <Typography
                      variant="plain"
                      fontSize={14}
                      fontWeight={500}
                      color="neutral"
                    >
                      {row.schedule}
                    </Typography>
                  </td>
                  <td style={{ padding: "12px 6px" }}>
                    <Chip
                      variant="soft"
                      size="sm"
                      startDecorator={
                        {
                          Active: <CheckRounded />,
                          Inactive: <Block />,
                        }[row.status]
                      }
                      color={
                        {
                          Active: "success",
                          Inactive: "danger",
                        }[row.status] as ColorPaletteProp
                      }
                    >
                      {row.status}
                    </Chip>
                  </td>
                  <td>
                    <Typography
                      variant="plain"
                      fontSize={14}
                      fontWeight={500}
                      color="neutral"
                    >
                      {row.phone}
                    </Typography>
                  </td>
                  <td>
                    <TableMenu />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </Sheet>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
        key={"pagination-dokter"}
      />
    </React.Fragment>
  );
};

export default TabelDokter;
