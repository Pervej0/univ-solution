import {
  CircularProgress,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { CustomBtn, CustomTable, CustomTd, CustomTh } from "../Styled/UseStyle";

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const { countryName } = useParams();
  const [showData, setShowData] = useState(20);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${countryName}`)
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, []);

  const hanldeLoadMore = () => {
    setShowData(showData + 15);
  };

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
        <Box sx={{ textAlign: "right", pr: 5 }}>
          <Link to="/home" title="Go back home">
            <ArrowRightAltIcon sx={{ fontSize: "3rem", color: "white" }} />
          </Link>
        </Box>
      </Box>
      {universities.length < 1 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            textAlign: "left",
            px: "10px 20px",
          }}
        >
          <TableContainer style={{ width: "95%", margin: "0 auto" }}>
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
                {universities.slice(0, showData).map((item, index) => (
                  <tr key={item.domains} style={{ border: "1px solid red" }}>
                    <CustomTd>{index + 1}</CustomTd>
                    <CustomTd>{item.name}</CustomTd>
                    <CustomTd>{item.country}</CustomTd>
                    <CustomTd>
                      <a href={item.web_pages} target="_blank">
                        {item.web_pages}
                      </a>
                    </CustomTd>
                    <CustomTd>{item.domains}</CustomTd>
                  </tr>
                ))}
              </tbody>
            </CustomTable>
            <Box sx={{ textAlign: "center" }}>
              <CustomBtn onClick={hanldeLoadMore}>Load More</CustomBtn>
            </Box>
          </TableContainer>
        </Paper>
      )}
    </>
  );
};

export default Universities;
