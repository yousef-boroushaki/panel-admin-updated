import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Grid,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Paper from "@mui/material/Paper";
import TaskPreviewData from "./TaskPreviewData.json";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function ScheduleStatus() {
  const [btnColorFirst, setBtnColorFirst] = useState(false);
  const [btnColorSecond, setBtnColorSecond] = useState(false);
  const [btnColorThird, setBtnColorThird] = useState(true);

  const handleBtnColorFirst = () => {
    setBtnColorFirst(!btnColorFirst);
    setBtnColorSecond(false);
    setBtnColorThird(false);
  };
  const handleBtnColorSecond = () => {
    setBtnColorSecond(!btnColorSecond);
    setBtnColorFirst(false);
    setBtnColorThird(false);
  };
  const handleBtnColorThird = () => {
    setBtnColorThird(!btnColorThird);
    setBtnColorFirst(false);
    setBtnColorSecond(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [rows, setRows] = useState(TaskPreviewData);

  return (
    <>
      <Box sx={{ bgcolor: "#f6f6f6", display: "flex", width: "100%" }}>
        <SideBar />
        <Box
          component={"main"}
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: "#f6f6f6",
          }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Task Preview
            </Typography>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              sx={{
                padding: "15px 20px",
                borderRadius: "10px",
              }}
            >
              Filter
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ mt: 4 }}
            justifyContent={"space-between"}
          >
            <ButtonGroup aria-label="Basic button group" variant="text">
              <Link to={"/schedule/list"}>
                <Button
                  onClick={handleBtnColorFirst}
                  sx={{
                    padding: "15px 20px",
                    bgcolor: btnColorFirst ? "#757ce8" : "#fff",
                    color: btnColorFirst ? "#fff" : "#757ce8",
                  }}
                >
                  list
                </Button>
              </Link>
              <Link to={"/schedule"}>
                <Button
                  onClick={handleBtnColorSecond}
                  sx={{
                    padding: "15px 20px",
                    bgcolor: btnColorSecond ? "#757ce8" : "#fff",
                    color: btnColorSecond ? "#fff" : "#757ce8",
                  }}
                >
                  Board
                </Button>
              </Link>

              <Link to={"/schedule/status"}>
                <Button
                  onClick={handleBtnColorThird}
                  sx={{
                    padding: "15px 20px",
                    bgcolor: btnColorThird ? "#757ce8" : "#fff",
                    color: btnColorThird ? "#fff" : "#757ce8",
                  }}
                >
                  Status
                </Button>
              </Link>
            </ButtonGroup>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
                borderRadius: "10px",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Stack>
          <Stack
            sx={{
              backgroundColor: "#fff",
              height: "200px",
              borderRadius: "20px",
              padding: "30px",
              mt: 5,
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                To Do
              </Typography>
              <Button variant="text">See More</Button>
            </Stack>
            <Box mt={4} sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Stack sx={{ display: "flex", color: "black" }}>
                    Check Box
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </Stack>
                </Grid>{" "}
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Task Name <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      color: "black",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Start Day
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    End Day
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      color: "black",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Member <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Status
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      color: "black",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Actions
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            {rows.Task1.map((data, index) => (
              <Grid key={index} container spacing={1}>
                <Grid mt={1} item xs>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <Checkbox />
                  </Typography>
                </Grid>{" "}
                <Grid mt={1} item xs>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#4a52a8",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.TaskName}
                  </Stack>
                </Grid>{" "}
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.StartDate}
                  </Stack>
                </Grid>{" "}
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fc7777",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.EndDate}
                  </Stack>
                </Grid>{" "}
                <Grid mt={1} item xs>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.Member}
                  </Stack>
                </Grid>
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      justifyContent: "center",
                      backgroundColor: "#FF8F6B",
                      padding: "10px 0",
                      borderRadius: "10px",
                    }}
                  >
                    {data.Status}
                  </Stack>
                </Grid>
                <Grid mt={1} item xs>
                  <Stack
                    sx={{ alignItems: "center", justifyContent: "center" }}
                    direction="row"
                  >
                    <EditIcon
                      fontSize="small"
                      sx={{
                        marginRight: "30px",
                        backgroundColor: "#d3e1f2",
                        color: " #605BFF",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                    />
                    <DeleteIcon
                      fontSize="small"
                      sx={{
                        backgroundColor: "#fcd1cc",
                        color: " #E71D36",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
          <Stack
            sx={{
              backgroundColor: "#fff",
              height: "200px",
              borderRadius: "20px",
              padding: "30px",
              mt: 5,
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Doing
              </Typography>
              <Button variant="text">See More</Button>
            </Stack>
            <Box mt={4} sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Stack sx={{ display: "flex", color: "black" }}>
                    Check Box
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </Stack>
                </Grid>{" "}
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Task Name <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Start Day
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    End Day
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Member <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Status
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Actions
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            {rows.Task2.map((data, index) => (
              <Grid key={index} container spacing={1}>
                <Grid mt={1} item xs>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <Checkbox />
                  </Typography>
                </Grid>{" "}
                <Grid mt={1} item xs>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#4a52a8",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.TaskName}
                  </Stack>
                </Grid>{" "}
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.StartDate}
                  </Stack>
                </Grid>{" "}
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fc7777",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.EndDate}
                  </Stack>
                </Grid>{" "}
                <Grid mt={1} item xs>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.Member}
                  </Stack>
                </Grid>
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      justifyContent: "center",
                      backgroundColor: "#605BFF",
                      padding: "10px 0",
                      borderRadius: "10px",
                    }}
                  >
                    {data.Status}
                  </Stack>
                </Grid>
                <Grid mt={1} item xs>
                  <Stack
                    sx={{ alignItems: "center", justifyContent: "center" }}
                    direction="row"
                  >
                    <EditIcon
                      fontSize="small"
                      sx={{
                        marginRight: "30px",
                        backgroundColor: "#d3e1f2",
                        color: " #605BFF",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                    />
                    <DeleteIcon
                      fontSize="small"
                      sx={{
                        backgroundColor: "#fcd1cc",
                        color: " #E71D36",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
          <Stack
            sx={{
              backgroundColor: "#fff",
              height: "200px",
              borderRadius: "20px",
              padding: "30px",
              mt: 5,
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Done
              </Typography>
              <Button variant="text">See More</Button>
            </Stack>
            <Box mt={4} sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Stack sx={{ display: "flex", color: "black" }}>
                    Check Box
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </Stack>
                </Grid>{" "}
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Task Name <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Start Day
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    End Day
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>{" "}
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Member <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Status
                    <ArrowDropDownIcon sx={{ color: "#deddd9" }} />
                  </Stack>
                </Grid>
                <Grid item xs>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      justifyContent: "center",
                    }}
                  >
                    Actions
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            {rows.Task3.map((data, index) => (
              <Grid key={index} container spacing={1}>
                <Grid mt={1} item xs>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <Checkbox />
                  </Typography>
                </Grid>{" "}
                <Grid mt={1} item xs>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#4a52a8",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.TaskName}
                  </Stack>
                </Grid>{" "}
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.StartDate}
                  </Stack>
                </Grid>{" "}
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fc7777",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.EndDate}
                  </Stack>
                </Grid>{" "}
                <Grid mt={1} item xs>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    {data.Member}
                  </Stack>
                </Grid>
                <Grid
                  mt={1}
                  item
                  xs
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      justifyContent: "center",
                      backgroundColor: "#2B9943",
                      padding: "10px 0",
                      borderRadius: "10px",
                    }}
                  >
                    {data.Status}
                  </Stack>
                </Grid>
                <Grid mt={1} item xs>
                  <Stack
                    sx={{ alignItems: "center", justifyContent: "center" }}
                    direction="row"
                  >
                    <EditIcon
                      fontSize="small"
                      sx={{
                        marginRight: "30px",
                        backgroundColor: "#d3e1f2",
                        color: " #605BFF",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                    />
                    <DeleteIcon
                      fontSize="small"
                      sx={{
                        backgroundColor: "#fcd1cc",
                        color: " #E71D36",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
