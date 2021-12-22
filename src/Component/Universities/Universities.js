import { Link, Paper, TableContainer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { CustomTable, CustomTd, CustomTh } from "../Styled/UseStyle";

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${countryName}`)
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, []);

  return (
    <>
      <Box
        style={{ background: "#262626" }}
        sx={{ textAlign: "center", py: "3rem" }}
      >
        <Box>
          <Typography variant="h5" color="white" mt={2}>
            See Below University list if don't then search it.
          </Typography>
        </Box>
        <Link to="/home" title="Go back home">
          <ArrowRightAltIcon sx={{ fontSize: "3rem", color: "white" }} />
        </Link>
      </Box>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          textAlign: "left",
          px: "10px 20px",
        }}
      >
        <TableContainer sx={{ maxHeight: 669 }}>
          <CustomTable>
            <thead
              style={{ position: "sticky", top: 0, backgroundColor: "white" }}
            >
              <tr>
                <CustomTh>S/N</CustomTh>
                <CustomTh>Name</CustomTh>
                <CustomTh>Country</CustomTh>
                <CustomTh>Details</CustomTh>
                <CustomTh>Domains</CustomTh>
              </tr>
            </thead>
            <tbody>
              {universities.map((item, index) => (
                <tr style={{ border: "1px solid red" }}>
                  <CustomTd>{index + 1}</CustomTd>
                  <CustomTd>{item.name}</CustomTd>
                  <CustomTd>{item.country}</CustomTd>
                  <CustomTd>
                    <Link href={item.web_pages} target="_blank">
                      {item.web_pages}
                    </Link>
                  </CustomTd>
                  <CustomTd>{item.domains}</CustomTd>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Universities;
