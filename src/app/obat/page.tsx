"use client";
import PageTitle from "@/component/PageTitle";
import TableObat from "@/component/TableObat";
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
