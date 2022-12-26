import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../styles/Global";
import DashboardForm from "./DashboardForm/DashboardForm";
import NoteList from "./Notelist";
import { StyledMain } from "./style";


const Dashboard = ({ setLogin, addNotes, removeNotes }) => {
  return (
    <div>
        <Header setLogin={setLogin}/>
        <Container>
          <StyledMain>
            <DashboardForm/>
            <NoteList addNotes={addNotes} removeNotes={removeNotes} />
          </StyledMain>
        </Container>
    </div>
  );
};

export default Dashboard;
