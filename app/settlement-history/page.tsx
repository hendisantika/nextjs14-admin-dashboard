import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import SettlementHistory from "@/components/SettlementHistory/SettlementHistory";

export const metadata: Metadata = {
  title: "Settlement History Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="SettlementHistory" />

      <div className="flex flex-col gap-10">
        <SettlementHistory />
      </div>
    </>
  );
};

export default TablesPage;
