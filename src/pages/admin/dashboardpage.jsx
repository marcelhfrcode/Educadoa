import { useState } from "react";
import { ongs as initialOngs } from "../../data/ongs";

import Dashboard from "./Dashboard/Dashboard";
import FastActions from "./Dashboard/FastActions";
import FeaturedOngs from "./Dashboard/FeaturedOngs";

function DashboardPage() {
  const [ongsData, setOngsData] = useState(initialOngs);

  return (
    <div>
      <Dashboard ongsData={ongsData} />

      <FastActions ongsData={ongsData} setOngsData={setOngsData} />

      <FeaturedOngs ongsData={ongsData} setOngsData={setOngsData} />
    </div>
  );
}

export default DashboardPage;
