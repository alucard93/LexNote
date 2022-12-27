import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../styles/Global";
import DashboardForm from "./DashboardForm/DashboardForm";
import NoteList from "./Notelist";
import { StyledMain } from "./style";


const Dashboard = ({ setLogin, addNotes, removeNotes, notes, setTitle, title, setText, text }) => {
  return (
    <div>
        <Header setLogin={setLogin}/>
        <Container>
          <StyledMain>
            <DashboardForm
              addNotes={addNotes}
              title={title}
              setTitle={setTitle}
              text={text}
              setText={setText}
            />
            <NoteList 
              addNotes={addNotes} 
              removeNotes={removeNotes} 
              notes={notes}
              />
          </StyledMain>
        </Container>
    </div>
  );
};

export default Dashboard;
