import React from "react";
import { Link, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  //   const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();

  const handleCountries = (e) => {
    const name = e.target.innerText;
    navigate(`/universities/${name}`);
  };
  return (
    <Box sx={{ px: 3 }}>
      <List>
        <ListItem>
          <Link onClick={handleCountries}>Armenia</Link>
        </ListItem>
        <ListItem>
          <Link onClick={handleCountries}>Bangladesh</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Countries;
