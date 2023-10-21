"use client";
import PageTitle from "@/components/PageTitle";
import TabelDokter from "@/components/TabelDokter";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle
        title="Dokter"
        breadcrumbs={[
          { label: "Dashboard", to: "/" },
          { label: "Dokter", to: "/dokter" },
        ]}
      />
      <TabelDokter />
    </>
  );
};

export default Page;
