import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SideBar from "../../components/SideBar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dataFnsLocalizer } from "react-big-calendar";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "invite by friends",
    allDay: true,
    start: new Date(2024, 2, 14),
    end: new Date(2024, 2, 18),
  },
];

export default function Setting() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvent, setAllEvent] = useState(events);

  function handleAddEvent() {
    setAllEvent([...allEvent, newEvent]);
  }

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
            <Typography variant="h5" fontWeight={600}>
              Setting
            </Typography>
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
                    <Avatar
                      src="Assets/images/setting/image.png"
                      alt="Remy Sharp"
                      sx={{ width: 56, height: 56 }}
                    />
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
                    <Avatar
                      src="Assets/images/setting/image (1).png"
                      alt="Remy Sharp"
                      sx={{ width: 56, height: 56 }}
                    />
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
                    <Avatar
                      src="Assets/images/setting/image (2).png"
                      alt="Remy Sharp"
                      sx={{ width: 56, height: 56 }}
                    />
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
            <Box
              sx={{
                width: {
                  lg:'60%',
                  md:'100%',
                  sm:'100%',
                  xs:'100%'
                },
                bgcolor: "#fff",
                padding: "20px",
                borderRadius: "5px",
                margin: "20px",
                height:{
                  lg:'auto',
                  md:'90vh',
                  sm:'90vh',
                  xs:'90vh'
                }
              }}
            >
              <Calendar
                localizer={localizer}
                events={allEvent}
                startAccessor={"start"}
                endAccessor={"end"}
                style={{ margin: "50px", backgroundColor: "#fff" }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
