import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

function Summery() {
  const { habits } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();

  const totalHabits = habits.length;
  const completedHabits = () => {
    const today = new Date().toISOString().split("T")[0];
    return habits.filter((habit) => habit.completedDates.includes(today))
      .length;
  };

  return (
    <div>
      <p>total items is: {totalHabits}</p>
      <p>Total Completed is: {completedHabits()}</p>
    </div>
  );
}

export default Summery;
