import { Box, Breadcrumbs, Link as LinkComponent, Typography } from "@mui/joy";
import React from "react";
import Link from "next/link";
import { ChevronRightRounded, HomeRounded } from "@mui/icons-material";

interface PageTitleProps {
  title: string;
  breadcrumbs?: { label: string; to: string }[];
}

const PageTitle = ({ title, breadcrumbs }: PageTitleProps) => {
  return (
    <>
      <Typography variant="plain" fontSize={24}>
        {title}
      </Typography>
      {breadcrumbs && (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeRounded fontSize="small" sx={{ mr: 1 }} />
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRounded fontSize="small" />}
              sx={{ pl: 0 }}
            >
              {breadcrumbs.map(({ label, to }, index) => (
                <LinkComponent
                  key={index}
                  fontSize={12}
                  fontWeight={500}
                  component={Link}
                  href={to}
                  underline="hover"
                  color="neutral"
                >
                  {label}
                </LinkComponent>
              ))}
            </Breadcrumbs>
          </Box>
        </>
      )}
    </>
  );
};

export default PageTitle;
