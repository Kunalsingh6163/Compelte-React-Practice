import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "300px",
  margin: "20px auto",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  position: "sticky",
  top: 0,
  zIndex: 1,
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const BgContainer = styled(Box)({
  height: "200vh", // Make sure there's enough scrollable space
  backgroundImage: "url('/path-to-your-image.jpg')", // Replace with your image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
});

const cards = [
  { id: 1, title: "Card 1", description: "This is card 1." },
  { id: 2, title: "Card 2", description: "This is card 2." },
  { id: 3, title: "Card 3", description: "This is card 3." },
];

const Certificate = () => {
  return (
    <BgContainer>
      {cards.map((card) => (
        <StyledCard key={card.id}>
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </StyledCard>
      ))}
    </BgContainer>
  );
};

export default Certificate;
