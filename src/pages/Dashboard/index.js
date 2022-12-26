import React from "react";
import Header from "../../components/Header/Header";
import DashboardForm from "./DashboardForm/DashboardForm";


const Dashboard = () => {
  return (
    <div>
        <Header />
        <main className="container">
          <DashboardForm/>
        </main>
    </div>
  );
};

export default Dashboard;
