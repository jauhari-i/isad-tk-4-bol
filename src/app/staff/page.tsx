"use client";
import PageTitle from "@/component/PageTitle";
import TableStaff from "@/component/TableStaff";
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
