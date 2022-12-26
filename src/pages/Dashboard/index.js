import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../styles/Global";
import DashboardForm from "./DashboardForm/DashboardForm";


const Dashboard = () => {
  return (
    <div>
        <Header />
        <Container>
          <main>
            <DashboardForm/>
          </main>
        </Container>
    </div>
  );
};

export default Dashboard;
