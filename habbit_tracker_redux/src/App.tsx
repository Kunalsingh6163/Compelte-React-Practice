import { Provider } from "react-redux";
import "./App.css";
import { store } from "../store/store";
import { Container, Typography, Box } from "@mui/material";
import AddHabit_Form from "./components/AddHabit_Form";
import HabitList from "./components/HabitList";
import Summery from "./components/Summery";

function App() {
  return (
    <>
      <Provider store={store}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center">
            Happy Habits Tracker
          </Typography>
          <Box>
            <AddHabit_Form />
          </Box>
          <Box>
            <HabitList />
          </Box>
          <Box>
            <Summery />
          </Box>
        </Container>
      </Provider>
    </>
  );
}

export default App;
