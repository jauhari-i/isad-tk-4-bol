"use client";
import PageTitle from "@/components/PageTitle";
import TableStaff from "@/components/TableStaff";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle
        title="Staff"
        breadcrumbs={[
          { label: "Dashboard", to: "/" },
          { label: "Staff", to: "/staff" },
        ]}
      />
      <TableStaff />
    </>
  );
};

export default Page;
