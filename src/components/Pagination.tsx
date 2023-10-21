import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, IconButton, iconButtonClasses } from "@mui/joy";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButton = (page: string | number) => {
    const isCurrentPage = Number(page) === currentPage;
    const variant = Number(page) ? "outlined" : "plain";

    return (
      <IconButton
        key={page}
        size="sm"
        variant={variant}
        color="neutral"
        disabled={isCurrentPage}
        onClick={() => handlePageChange(Number(page))}
      >
        {page}
      </IconButton>
    );
  };

  return (
    <>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeft />}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
          renderPageButton(page)
        )}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRight />}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default Pagination;
