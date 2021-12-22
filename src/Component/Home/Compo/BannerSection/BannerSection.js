import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BGImg from "../../../../Images/university-ground.jpg";
import SchoolIcon from "@mui/icons-material/School";

const BannerSection = () => {
  const bgContent = {
    height: "60vh",
    width: "100%",
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)), url(${BGImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Box style={bgContent}>
      <Box>
        <Typography
          variant="h1"
          py={5}
          color="white"
          sx={{ fontFamily: "Italianno, cursive", lineHeight: 0, pt: 10 }}
        >
          Univ. Solution
        </Typography>
        <Typography variant="body2" mb={7} color="white" sx={{ lineHeight: 0 }}>
          Get the details info of your favourite University.
        </Typography>
        <SchoolIcon sx={{ color: "white", fontSize: "5rem" }} />
      </Box>
    </Box>
  );
};

export default BannerSection;
