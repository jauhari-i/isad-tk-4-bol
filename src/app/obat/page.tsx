"use client";
import PageTitle from "@/components/PageTitle";
import TableObat from "@/components/TableObat";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle
        title="Obat"
        breadcrumbs={[
          { label: "Dashboard", to: "/" },
          { label: "Obat", to: "/obat" },
        ]}
      />
      <TableObat />
    </>
  );
};

export default Page;
