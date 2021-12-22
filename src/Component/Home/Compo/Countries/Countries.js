import React, { useState } from "react";
import { Grid, Link, List, ListItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {
  CustomContainer,
  CustomLink,
  InputField,
} from "../../../Styled/UseStyle";

const Countries = () => {
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();

  const handleCountries = (e) => {
    const name = e.target.innerText;
    navigate(`/universities/${name}`);
  };

  const handleSearch = (e) => {
    navigate(`/universities/${countryName}`);
  };

  return (
    <CustomContainer>
      <Box sx={{ px: 3, my: 6 }}>
        <Box my={4}>
          <InputField>
            <input
              placeholder="Enter Country Name"
              onBlur={(e) => setCountryName(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </InputField>
        </Box>
        <Grid container spacing={2} my={10}>
          <Grid item md={4} sm={6} xs={12}>
            <List
              sx={{
                fontWeight: 500,
                background: "#262626",
                borderRadius: "10px",
              }}
            >
              <ListItem>
                <CustomLink onClick={handleCountries}>Armenia</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Bangladesh</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Canada</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Denmark</CustomLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} sm={6} xs={4}>
            <List
              sx={{
                fontWeight: 500,
                background: "#ba9906",
                borderRadius: "10px",
              }}
            >
              <ListItem>
                <CustomLink onClick={handleCountries}>Egypt</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>France</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Germany</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Denmark</CustomLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} sm={6} xs={4}>
            <List
              sx={{
                fontWeight: 500,
                background: "#358026",
                borderRadius: "10px",
              }}
            >
              <ListItem>
                <CustomLink onClick={handleCountries}>Armenia</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Bangladesh</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Canada</CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink onClick={handleCountries}>Denmark</CustomLink>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Countries;
