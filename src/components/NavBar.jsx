import React from "react";
// import { useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../data/mockData";


const NavBar = () => {
  // useEffect(() => {
  //     setSelectedLink(link);
  // }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      //   flex: 3,
      cellClassName: "name-column--cell",
      width: 140,
    },

    {
      field: "mobile",
      headerName: "Mobile",
      //   flex: 3,
      cellClassName: "name-column--cell",
      width: 150,
    },

    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 90,
    },

    { field: "email", headerName: "Email", width: 220, },

    { field: "address", headerName: "Address", width: 200, },

    {
      field: "status",
      headerName: "Status",
      width: 100, type:'boolean', editable: true,
    },
  ];

  return (
<div>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 0.5 }}>
            <IconButton size="large" color="inherit">
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Cook's Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar> 

      <Box m="100px"
        sx={{
    
          height: 450,
          width: "80%",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 3, mb: 3 }}
        >
          Manage Cooks
        </Typography>

        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    
</div>    
  );
};

export default NavBar;
