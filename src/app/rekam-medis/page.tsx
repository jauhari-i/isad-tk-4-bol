"use client";
import PageTitle from "@/components/PageTitle";
import TableRekamMedis from "@/components/TableRekamMedis";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle
        title="Rekam Medis"
        breadcrumbs={[
          { label: "Dashboard", to: "/" },
          { label: "Rekam Medis", to: "/rekam-medis" },
        ]}
      />
      <TableRekamMedis />
    </>
  );
};

export default Page;
