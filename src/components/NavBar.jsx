import React, { useState } from "react";
// import { useEffect } from 'react';
import UserActions from "./UserActions";
import {
  AppBar,
  Avatar,
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

  const [pageSize, setPageSize] = useState(6);

  const [rowId, setRowId] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "avatar", headerName:"Profile", 
      width: 60,
      editable: true,
      renderCell: (params) => <Avatar src={params.row.avatar} />,
      sortable :false,
      filterable: false,
    },
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

    { field: "email", headerName: "Email", width: 220 },

    { field: "address", headerName: "Address", width: 200 },

    {
      field: "status",
      headerName: "Status",
      width: 160,
      type: "boolean",
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      renderCell: (params) => (
        <UserActions {...{params, rowId, setRowId}} />
      ),
    },
    [rowId],
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

      <Box
        m="70px"
        // display="flex"
        justifyContent="center"
        alignItems="center"

        sx={{
          height: 450,
          width: "65%",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 15, mb: 5 }}
        >
          Manage Cooks
        </Typography>

        <DataGrid
          sx={{
            boxShadow: 1,
            border: 1,
            borderColor: "blue",
          }}
          rows={mockDataTeam}
          columns={columns}
          // getRowId={(row) => row._id}
          rowsPerPageOptions={[6, 10]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      </Box>
    </div>
  );
};

export default NavBar;
