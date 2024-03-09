import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import inReview from "./images/In-Review.png";
import doneImgFirst from "./images/Done-1.png";
import doneImgSecond from "./images/Done-2.png";
import inProgressFirst from "./images/In-Progress-1.png";
import inProgressSecond from "./images/In-Progress-2.png";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function Schedule() {
  const [btnColorFirst, setBtnColorFirst] = useState(false);
  const [btnColorSecond, setBtnColorSecond] = useState(true);
  const [btnColorThird, setBtnColorThird] = useState(false);

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
              endIcon={<TuneIcon />}
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

              <Link to={'/schedule/status'}>
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
                display: {
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  xs: "none",
                },
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
          <Grid container sx={{ mt: 4 }} spacing={3}>
            <Grid
              item
              lg={3}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Stack>
                <Typography variant="h5" component={"p"} mb={4}>
                  ToDo
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Dashboard Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#FF6A77", borderRadius: "20px" }}
                    >
                      Low
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FFD66B",
                        borderRadius: "20px",
                        color: "#000",
                      }}
                    >
                      On Track
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Landing Page Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#FF8F6B", borderRadius: "20px" }}
                    >
                      medium
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#D11A2A",
                        borderRadius: "20px",
                        color: "#fff",
                      }}
                    >
                      at risk
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="E-Shop Mobile App"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#26C0E2 ", borderRadius: "20px" }}
                    >
                      high
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              lg={3}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Stack>
                <Typography variant="h5" component={"p"} mb={4}>
                  In Progress
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Dashboard Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#26C0E2", borderRadius: "20px" }}
                    >
                      high
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FFD66B",
                        borderRadius: "20px",
                        color: "#000",
                      }}
                    >
                      On Track
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Landing Page Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#FF6A77", borderRadius: "20px" }}
                    >
                      low
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack direction={"row"} gap={3}>
                    <img src={inProgressFirst} alt="" />
                    <img src={inProgressSecond} alt="" />
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="E-Shop Mobile App"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#FF6A77", borderRadius: "20px" }}
                    >
                      low
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FFD66B",
                        borderRadius: "20px",
                        color: "#000",
                      }}
                    >
                      On Track
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              lg={3}
              md={5}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Stack>
                <Typography variant="h5" component={"p"} mb={4}>
                  In Review
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Dashboard Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#FF8F6B", borderRadius: "20px" }}
                    >
                      medium
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Box>
                    <img src={inReview} alt="" />
                  </Box>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Landing Page Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#FF6A77", borderRadius: "20px" }}
                    >
                      low
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack direction={"row"} gap={3}>
                    <img src={inProgressFirst} alt="" />
                    <img src={inProgressSecond} alt="" />
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              lg={3}
              md={5}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Stack>
                <Typography variant="h5" component={"p"} mb={4}>
                  Done
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    padding: "7px 20px",
                    gap: 2,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Dashboard Design"
                      />
                    </FormGroup>
                    <MoreHorizIcon />
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#26C0E2", borderRadius: "20px" }}
                    >
                      high
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FFD66B",
                        borderRadius: "20px",
                        color: "#000",
                      }}
                    >
                      On Track
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px" }}>
                    Discussion for management dashboard ui design
                  </Typography>
                  <Stack direction={"row"} gap={2}>
                    <img src={doneImgFirst} alt="" />
                    <img src={doneImgSecond} alt="" />
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <AvatarGroup>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar sx={{ bgcolor: "#26C0E2" }}>
                        <AddIcon />
                      </Avatar>
                    </AvatarGroup>
                    <Stack direction={"row"} gap={1}>
                      <Stack direction={"row"} gap={1}>
                        <MapsUgcIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <FavoriteIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography sx={{ fontSize: "11px" }}>112</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
