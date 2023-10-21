"use client";
import PageTitle from "@/components/PageTitle";
import TabelUser from "@/components/TabelUser";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle
        title="User"
        breadcrumbs={[
          { label: "Dashboard", to: "/" },
          { label: "User", to: "/user" },
        ]}
      />
      <TabelUser />
    </>
  );
};

export default Page;
