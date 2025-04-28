import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toggleHabit } from "../../store/habit-slice";
import { removeHabit } from "../../store/habit-slice";

function HabitList() {
  const { habits } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();

  const today = new Date().toISOString().split("T")[0];
  return (
    <div>
      <h3>All Added Habits here...</h3>
      {habits.map((habit) => {
        return (
          <>
            <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
              <Grid container alignItems="center">
                <Grid>
                  <Typography variant="h6">{habit.name}</Typography>
                  <p>{habit.frequency}</p>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "flex-row", gap: 3 }}
                  >
                    <Button
                      variant="outlined"
                      color={
                        habit.completedDates.includes(today)
                          ? "success"
                          : "primary"
                      }
                      startIcon={<FaCheckCircle />}
                      onClick={() =>
                        dispatch(toggleHabit({ id: habit.id, date: today }))
                      }
                    >
                      {habit.completedDates.includes(today)
                        ? "Completed"
                        : "Mark Complete"}
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<MdDeleteForever />}
                      onClick={() => dispatch(removeHabit({ id: habit.id }))}
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </>
        );
      })}
    </div>
  );
}

export default HabitList;
