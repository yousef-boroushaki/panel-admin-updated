import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import invoiceDb from "./NewInvoice.json";
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "../../../components/SideBar";
import PrintIcon from "@mui/icons-material/Print";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import J from "./images/J.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.05;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Website redesign", 60, 15),
  createRow("Newsletter template design", 20, 12),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function NewInvoice() {
  const [product, setProduct] = useState(invoiceDb);

  const handleDeleteRow = (targetIndex) => {
    setProduct(product.filter((_, idx) => idx !== targetIndex));
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
            display: "flex",
            flexDirection:{
              lg:'row',
              md:'column',
              sm:'column',
              xs:'column'
            },
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: {
                lg:'45%',
                md:'100%',
                sm:'100%',
                xs:'100%'
              },
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              bgcolor: "#fff",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Create New Invoice
            </Typography>
            <Avatar
              sx={{
                bgcolor: "#f6f6f6",
                width: "134px",
                height: "134px",
                mx: "auto",
                mt: 3,
              }}
            >
              <CameraAltIcon sx={{ color: "#000", fontSize: "40px" }} />
            </Avatar>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box
                sx={{
                  mt: 3,
                  // width: "45%",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Invoice Id</Typography>
                <TextField
                  variant="outlined"
                  label="#872571"
                  sx={{ bgcolor: "#f6f6f6", mt: 1 }}
                ></TextField>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  // width: "45%",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Date</Typography>
                <TextField
                  variant="outlined"
                  label="01/12/2021"
                  sx={{ bgcolor: "#f6f6f6", mt: 1 }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <CalendarMonthIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Box>
            </Stack>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontWeight: 600 }}>Name</Typography>
              <TextField
                fullWidth
                sx={{ bgcolor: "#f6f6f6", mt: 1 }}
                label="Alison G."
              />
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box
                sx={{
                  mt: 3,
                  // width: "45%",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                <TextField
                  variant="outlined"
                  label="Example@gmail.com"
                  sx={{ bgcolor: "#f6f6f6", mt: 1 }}
                ></TextField>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  // width: "45%",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Address</Typography>
                <TextField
                  variant="outlined"
                  label="Street"
                  sx={{ bgcolor: "#f6f6f6", mt: 1 }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <CalendarMonthIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              sx={{ mt: 3, justifyContent: "space-between" }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                Product Description
              </Typography>
              <Button variant="contained">
                <AddIcon />
              </Button>
            </Stack>
            <Box sx={{ flexGrow: 1, mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item lg={4} xs>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Product Name <ArrowDropDownIcon />
                  </Typography>
                </Grid>
                <Grid item lg={2} >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Rate <ArrowDropDownIcon />
                  </Typography>
                </Grid>
                <Grid item lg={2} xs>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    QTY <ArrowDropDownIcon />
                  </Typography>
                </Grid>
                <Grid item lg={4} xs>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Amount <ArrowDropDownIcon />
                  </Typography>
                </Grid>
              </Grid>
              {product.map((data, index) => (
                <Stack
                  direction={"row"}
                  key={index}
                  sx={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
                >
                  <Grid
                    container
                    sx={{
                      borderRadius: "16px",
                      bgcolor: "#fff",
                      mt: 1,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translate(0, -5px)",
                      },
                      transition: "all 0.2s ease-in-out ",
                    }}
                  >
                    <Grid item lg={3} xs>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#0341fc",
                        }}
                      >
                        {data.ProductName}
                      </Box>
                    </Grid>
                    <Grid item lg={3} xs>
                      <Box sx={{ textAlign: "center", padding: 2 }}>
                        {data.Rate}
                      </Box>
                    </Grid>
                    <Grid item lg={2} xs>
                      <Box sx={{}}>{data.QTY}</Box>
                    </Grid>
                    <Grid item lg={2} xs>
                      <Box
                        sx={{
                          width: "30%",
                          textAlign: "center",
                          padding: 1,
                          mx: "auto",
                          display: "flex",
                          justifyContent: "center",
                          color: "#38c202",
                        }}
                      >
                        {data.Amount}
                      </Box>
                    </Grid>
                    <Grid item lg={2} >
                      <Button
                        sx={{
                          width: "50%",
                          bgcolor: "#ffd8ce",
                          mx: 3,
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "100%",
                          py: 1,
                        }}
                        onClick={() => handleDeleteRow(index)}
                      >
                        <DeleteIcon color="error" />
                      </Button>
                    </Grid>
                  </Grid>
                </Stack>
              ))}
            </Box>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", mt: 3 }}
            >
              <Button variant="outlined" sx={{ width: "45%" }}>
                Send invoice
              </Button>
              <Button variant="contained" sx={{ width: "45%" }}>
                Create Invoice
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              width: {
                lg:'55%',
                md:'100%',
                sm:'100%',
                xs:'100%'
              },
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              bgcolor: "#fff",
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Preview
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Button>
                  <CloudDownloadIcon color="info" fontSize="large" />
                </Button>
                <Button>
                  <PrintIcon color="info" fontSize="large" />
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                bgcolor: "#f6f6f6",
                padding: 5,
                display: "flex",
                justifyContent: "space-between",
                borderRadius: 1,
                mt: 4,
                mb: 10,
              }}
            >
              <Stack>
                <img
                  src={J}
                  alt="j"
                  style={{
                    width: "30px",
                    height: "44px",
                    marginBottom: "60px",
                  }}
                />
                <Typography fontWeight={600} mb={4}>
                  RECIPIENT
                </Typography>
                <Stack mb={4}>
                  <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                    4304 Liberty Avenue
                  </Typography>
                  <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                    92680 Tustin, CA
                  </Typography>
                  <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                    VAT no.: 12345678
                  </Typography>
                </Stack>
                <Stack>
                  <Stack direction={"row"} gap={1}>
                    <Typography sx={{ color: "blue" }}>@</Typography>
                    <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                      company.mail@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <Typography sx={{ color: "blue" }}>m</Typography>
                    <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                      +328 714 735 265
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Stack mb={"50px"}>
                  <Stack direction={"row"} gap={1}>
                    <Typography sx={{ color: "blue" }}>@</Typography>
                    <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                      your.mail@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <Typography sx={{ color: "blue" }}>m</Typography>
                    <Typography sx={{ color: "rgba(0,0,0,.4)" }}>
                      +378 234 712 980
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  variant="h4"
                  component={"p"}
                  textAlign={"end"}
                  mb={4}
                >
                  Invoice
                </Typography>
                <Stack mb={4}>
                  <Typography textAlign={"end"}>INVOICE NO.</Typography>
                  <Typography
                    textAlign={"end"}
                    sx={{ color: "rgba(0 ,0 ,0, 0.4)" }}
                  >
                    001/2021
                  </Typography>
                </Stack>
                <Stack>
                  <Typography textAlign={"end"}>INVOICE DATE</Typography>
                  <Typography
                    textAlign={"end"}
                    sx={{ color: "rgba(0 ,0 ,0, 0.4)" }}
                  >
                    January 1.2021
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <TableContainer >
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{color:'rgba(0,0,0,.4)'}}>
                      TASK DESCRIPTION
                    </TableCell>
                    <TableCell align="right" sx={{color:'rgba(0,0,0,.4)'}}>HOURS</TableCell>
                    <TableCell align="right" sx={{color:'rgba(0,0,0,.4)'}}>RATE (USD)</TableCell>
                    <TableCell align="right" sx={{color:'rgba(0,0,0,.4)'}}>AMOUNT (USD)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="center">{row.unit}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2} sx={{color:'rgba(0,0,0,.4)'}}>SUBTOTAL</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceSubtotal)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{color:'rgba(0,0,0,.4)'}}>DISCOUNT 5%</TableCell>
                    <TableCell />
                    <TableCell align="right">
                      {ccyFormat(invoiceTaxes)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>TOTAL</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceTotal)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}
