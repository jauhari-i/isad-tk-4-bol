"use client";
import PageTitle from "@/component/PageTitle";
import TableRekamMedis from "@/component/TableRekamMedis";
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
