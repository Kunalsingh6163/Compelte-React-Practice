import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";


interface Prop {
  id?: number;
  joke: string;
}

function RandomJoke() {
  const [jokes, setJokes] = useState<Prop | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://v2.jokeapi.dev/joke/Programming?type=single`
      );
      setJokes(response.data || null);
    } catch (error) {
      console.error("Error fetching the joke:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const handleJoke = () => {
    fetchJokes();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{
            height: "auto",
            width: "500px",
            backgroundColor: "#feffee",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ color: "#000000" }}>
              New Jokes
            </Typography>
            <Typography variant="h5" sx={{ color: "#7e7e7e" }}>
              {jokes?.joke || "No joke available!"}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              size="small"
              onClick={handleJoke}
              sx={{
                backgroundColor: "#1a52f3",
                color: "white",
                fontWeight: 700,
                height: "45px",
                width: "auto",
              }}
            >
              Click New Joke
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}

export default RandomJoke;
