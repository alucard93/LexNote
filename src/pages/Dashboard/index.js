import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../styles/Global";
import DashboardForm from "./DashboardForm/DashboardForm";
import NoteList from "./Notelist";


const Dashboard = () => {
  return (
    <div>
        <Header />
        <Container>
          <main>
            <DashboardForm/>
            <NoteList/>
          </main>
        </Container>
    </div>
  );
};

export default Dashboard;
