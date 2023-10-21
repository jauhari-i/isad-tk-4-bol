"use client";
import PageTitle from "@/component/PageTitle";
import TabelDokter from "@/component/TabelDokter";
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
