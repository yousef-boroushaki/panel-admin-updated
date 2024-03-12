import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Checkbox,
  ButtonGroup,
  Modal,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ScheduleData from "./ScheduleData.json";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import CloseIcon from "@mui/icons-material/Close";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ScheduleList() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [rows, setRows] = useState(ScheduleData);
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
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
            }}
          >
            <Typography variant="h5" fontWeight={600}>Schedule List</Typography>
            <Stack direction="row">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  padding: "10px 25px",
                }}
                onClick={handleOpen}
                startIcon={<AddIcon />}
              >
                add new
              </Button>
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
              },
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: {
                  lg: "30%",
                  md: "100%",
                },
                backgroundColor: "#fff",
                margin: "20px 20px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: {
                  lg: "column",
                  md: "row",
                  sm: "row",
                  xs: "row",
                },
              }}
            >
              <Box
                sx={{
                  mx: "auto",
                  width: {
                    lg: "100%",
                    md: "40%",
                    sm: "40%",
                    xs: "40%",
                  },
                }}
              >
                <Stack my={5} mx="auto">
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    size="large"
                    sx={{ padding: "10px 70px", borderRadius: "6px" }}
                  >
                    Create Schedule
                  </Button>
                </Stack>
                <Stack
                  sx={{
                    border: "1px solid #f5f2f2",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    borderRadius: "6px",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "DateCalendar",
                        "DateCalendar",
                        "DateCalendar",
                      ]}
                    >
                      <DemoItem>
                        <DateCalendar
                          defaultValue={dayjs("2022-04-17")}
                          views={["year", "month", "day"]}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>
              </Box>
              <Stack
                direction="column"
                sx={{
                  p: 2,
                  width: {
                    lg: "90%",
                    md: "40%",
                    sm: "40%",
                    xs: "40%",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  People
                </Typography>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#f0ebeb",
                    margin: "15px 0",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="search for People"
                    inputProps={{ "aria-label": "search for People" }}
                  />
                </Paper>
                <Stack
                  direction="row"
                  mt={3}
                  sx={{
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #f0ebeb",
                    paddingBottom: "20px",
                  }}
                >
                  <Stack>
                    <Avatar src="Assets/images/setting/image.png" alt="E" sx={{ width: 56, height: 56 }} />
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="h6" fontWeight="bold">
                      Eddie Lobanovskiy
                    </Typography>
                    <Typography variant="p">
                      Eddielobanovskiy@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  mt={3}
                  sx={{
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #f0ebeb",
                    paddingBottom: "20px",
                  }}
                >
                  <Stack>
                    <Avatar src="Assets/images/setting/image (1).png" alt="E" sx={{ width: 56, height: 56 }} />
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="h6" fontWeight="bold">
                      Eddie Lobanovskiy
                    </Typography>
                    <Typography variant="p">
                      Eddielobanovskiy@gmail.com
                    </Typography>
                  </Stack>
                </Stack>{" "}
                <Stack
                  direction="row"
                  mt={3}
                  sx={{
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #f0ebeb",
                    paddingBottom: "20px",
                  }}
                >
                  <Stack>
                    <Avatar src="Assets/images/setting/image (2).png" alt="E" sx={{ width: 56, height: 56 }} />
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="h6" fontWeight="bold">
                      Eddie Lobanovskiy
                    </Typography>
                    <Typography variant="p">
                      Eddielobanovskiy@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
                <Link to={"/schedule"} style={{ margin: "0 auto" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      padding: "10px 70px",
                      borderRadius: "6px",
                      marginTop: {
                        lg: "200px",
                        md: "10px",
                        sm: "10px",
                        xs: "10px",
                      },
                      color: "#4157a6",
                    }}
                  >
                    My Schedule
                  </Button>
                </Link>
              </Stack>
            </Stack>
            <Stack
              m={5}
              sx={{
                height: "100%",
                width: {
                  lg: "80%",
                  md: "100%",
                },
                margin: "20px 20px",
                flexGrow: 1,
                mt: 1,
              }}
            >
              <Stack sx={{ justifyContent: "center" }}>
                <Grid container sx={{ p: 1 }}>
                  <Grid
                    item
                    xs
                    lg={2}
                    md={2}
                    sm={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox />
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    lg={2}
                    md={3}
                    sm={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: {
                        lg: "start",
                        md: "center",
                        sm: "center",
                        xs: "center",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Date <ArrowDropDownIcon />
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    lg={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: {
                        lg: "center",
                        md: "start",
                        sm: "start",
                        xs: "start",
                      },
                      mx: {
                        lg: 0,
                        md: 5,
                        sm: 5,
                        xs: 5,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Time <ArrowDropDownIcon />
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    lg={4}
                    sx={{
                      display: {
                        lg: "flex",
                        md: "none",
                        sm: "none",
                        xs: "none",
                      },
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Location <ArrowDropDownIcon />
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
              {rows.map((data, index) => (
                <Stack sx={{}}>
                  {" "}
                  <Grid
                    container
                    sx={{
                      borderRadius: "16px",
                      bgcolor: "#fff",
                      justifyContent: "start",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translate(0, -5px)",
                      },
                      transition: "all 0.2s ease-in-out ",
                      marginY: 1,
                      p: 1,
                    }}
                    key={index}
                  >
                    <Grid item xs lg={1}>
                      <Box
                        sx={{
                          textAlign: "left",
                          padding: "0 40px",
                          display: "flex",
                          alignItems: "center",
                          mx: 1,
                        }}
                      >
                        <Checkbox />
                      </Box>
                    </Grid>
                    <Grid item xs lg={3}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CalendarMonthIcon
                          sx={{ color: "#3da5ff", fontSize: "15px" }}
                        />{" "}
                        {data.Date}
                      </Box>
                    </Grid>
                    <Grid item xs md={4} lg={3}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AccessTimeIcon
                          sx={{ color: "#016904", fontSize: "15px" }}
                        />{" "}
                        <Typography>{data.Time}</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs
                      lg={3}
                      sx={{
                        display: {
                          lg: "block",
                          md: "none",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<FmdGoodIcon />}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          width: "90%",
                          justifyContent: "start",
                          borderRadius: "20px",
                          bgcolor: "#edf1fa",
                          color: "#605BFF",
                          // gap: 1,
                          "&:hover": {
                            bgcolor: "#605BFF",
                            color: "#fff",
                          },
                        }}
                      >
                        {data.Location}
                      </Button>
                    </Grid>
                    <Grid item xs lg={1}>
                      <Button
                        sx={{
                          backgroundColor: "#e0e7ff",
                          borderRadius: "50%",
                          padding: "15px 1px",
                          marginRight: "10px",
                        }}
                      >
                        <EditIcon color="info" />
                      </Button>
                    </Grid>
                    <Grid item xs lg={1}>
                      <Button
                        sx={{
                          backgroundColor: "#fce3e3",
                          borderRadius: "50%",
                          padding: "15px 1px",
                          color: "#ff0000",
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* *************************************************** Modal *******************************************************/}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          sx={{
            width: "467px",
            height: "567",
            margin: "40px auto",
            borderRadius: "7px",
            padding: "35px 35px",
            bgcolor: "#fff",
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Create an Event
            </Typography>
            <Button onClick={handleClose}>
              <CloseIcon
                sx={{
                  color: "#E71D36",
                  borderRadius: "50%",
                  padding: "10px",
                  backgroundColor: "#fff5f5",
                }}
              />
            </Button>
          </Stack>
          <Stack mt={4}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Button
                sx={{
                  backgroundColor: "#fff5f5",
                  color: "#332b2b",
                  border: "#FF8F6B",
                  "&:hover": {
                    backgroundColor: "#FF8F6B",
                    color: "white",
                    border: "#FF8F6B",
                  },
                }}
              >
                Event
              </Button>
              <Button
                sx={{
                  backgroundColor: "#fff5f5",
                  color: "#332b2b",
                  border: "#FF8F6B",
                  "&:hover": {
                    backgroundColor: "#FF8F6B",
                    color: "white",
                    border: "#FF8F6B",
                  },
                }}
              >
                Reminder
              </Button>
              <Button
                sx={{
                  backgroundColor: "#fff5f5",
                  color: "#332b2b",
                  border: "#FF8F6B",
                  "&:hover": {
                    backgroundColor: "#FF8F6B",
                    color: "white",
                    border: "#FF8F6B",
                  },
                }}
              >
                Task
              </Button>
            </ButtonGroup>
          </Stack>
          <Stack mt={4}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#F7F7F8",
                height: "40px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Add title"
                inputProps={{ "aria-label": "Add title" }}
              />
            </Paper>
          </Stack>
          <Stack direction="row" sx={{}} mt={4}>
            <Stack
              sx={{
                marginRight: "15px",
              }}
            >
              <AccessTimeIcon
                fontSize="medium"
                sx={{
                  padding: "10px",
                  borderRadius: "50%",
                  color: "#FF8F6B",
                  backgroundColor: "#fff5f5",
                }}
              />
            </Stack>
            <Stack
              direction="column"
              sx={{
                lineHeight: "2rem",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Thursday. December 5 12:00pm - 1:00pm
              </Typography>
              <Typography variant="p" color="##bfbdbd " fontWeight="bold">
                Time zone - Does not repeat
              </Typography>
              <Typography variant="p" color="#FF8F6B" fontWeight="bold">
                Find a Time
              </Typography>
            </Stack>
          </Stack>
          <Stack mt={3} direction="row" width="100%">
            <Button
              size="large"
              sx={{
                marginRight: "30px",
                borderRadius: "10px",
                padding: "10px 15px",
              }}
              variant="contained"
              startIcon={<GroupsIcon />}
            >
              Add People
            </Button>
            <Button
              size="large"
              sx={{
                borderRadius: "10px",
                padding: "10px 15px",
              }}
              variant="outlined"
              startIcon={<LocationOnIcon />}
            >
              Add People
            </Button>
          </Stack>
          <Stack direction="row" sx={{}} mt={5}>
            <Stack
              sx={{
                marginRight: "15px",
              }}
            >
              <CalendarMonthIcon
                fontSize="medium"
                sx={{
                  padding: "10px",
                  borderRadius: "50%",
                  color: "#FF8F6B",
                  backgroundColor: "#fff5f5",
                }}
              />
            </Stack>
            <Stack
              direction="column"
              sx={{
                lineHeight: "2rem",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                John Deo{" "}
              </Typography>
              <Typography variant="p" color="##bfbdbd " fontWeight="bold">
                Busy - Default visibllity - notity 30 minutes before
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              justifyContent: "end",
            }}
            mt={5}
            direction="row"
            width="100%"
          >
            <Button
              size="small"
              sx={{
                marginRight: "30px",
                borderRadius: "10px",
                padding: "10px 15px",
              }}
              variant="outlined"
              startIcon={<GroupsIcon />}
            >
              Add People
            </Button>
            <Button
              size="small"
              sx={{
                borderRadius: "10px",
                padding: "10px 15px",
              }}
              variant="contained"
              startIcon={<LocationOnIcon />}
            >
              Add People
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
