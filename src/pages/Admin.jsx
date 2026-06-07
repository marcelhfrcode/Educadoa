import { useState } from "react";
import HeaderAdm from "../components/headerAdm";
import Dashboard from "./admin/dashboard";

function AdminPage() {
  const [tab, setTab] = useState("dashboard");

  return (
    <>
      <HeaderAdm tab={tab} setTab={setTab} />

      <div className="p-8">
        {tab === "dashboard" && <Dashboard />}
        {tab === "ongs" && <h1>Gerenciar ONGs</h1>}
        {tab === "doacoes" && <h1>Doações</h1>}
        {tab === "usuarios" && <h1>Usuários</h1>}
      </div>
    </>
  );
}

export default AdminPage;
