"use client";
import PageTitle from "@/component/PageTitle";
import TabelUser from "@/component/TabelUser";
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
