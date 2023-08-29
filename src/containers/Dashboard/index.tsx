import { Routes, Route } from "react-router-dom"

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import { appRoutes } from "./data"
import "./styles.css";

export default function Dashboard() {
  return (
    <div className="dashbaord">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main className="main">
          <Routes>
            {
              appRoutes.map((route, key)=> (
                <Route path={route.path} element={route.component} key={key} />
              ))
            }
          </Routes>
        </main>
      </div>
    </div>
  )
}