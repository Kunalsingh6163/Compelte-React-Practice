"use client";
import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Certificate from "./Certificate/Certificate";

interface Props {
  id: number;
  Title: string;
  Year: string;
  imdbId: string;
  Type: string;
  Poster: string;
}

function AllData() {
  const [data, setData] = useState<Props[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.omdbapi.com/?apikey=f7981f31&s=titanic"
      );
      const result = await res.json();
      console.log(result);
      if (result.Response === "True") {
        setData(result?.Search || []);
      } else {
        console.log(result.Error || "Failed to fetch data.");
      }
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <Card
              key={index}
              sx={{
                minWidth: 250,
                maxWidth: 300,
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#f5f5f5",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={item?.Poster}
                alt={item?.Title}
                sx={{
                  width: "auto",
                  height: 200,
                  marginTop: "16px",
                  objectFit: "contain",
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  sx={{
                    color: "text.primary",
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  {item?.Title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                  }}
                >
                  Type: {item?.Type}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                  }}
                >
                  Year: {item?.Year}
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <Typography variant="h6">No Data Found</Typography>
      )}

      <Certificate />
    </Box>
  );
}

export default AllData;
