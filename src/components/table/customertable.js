import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const CustomerTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [Customerdata, setCustomerData] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    axios("https://intense-tor-76305.herokuapp.com/merchants")
      .then((res) => {
        setCustomerData(res.data);
        setLoading(true);
      })
      .catch((err) => console.log("err", err));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {Loading ? (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Phones</TableCell>
                  <TableCell align="right">Premium</TableCell>
                  <TableCell align="right">Max/Min Bid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Customerdata.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell>
                        {row.firstname}
                        <Avatar alt="Remy Sharp" src={row.avatarUrl} />
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">
                        {row.hasPremium ? "Active" : "Inactive"}
                      </TableCell>
                      <TableCell align="right">
                        Max-bid:{" "}
                        {Math.max(...row.bids.map((bid) => bid.amount))}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={Customerdata.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <div style={{ display: "flex", "justify-content": "center" }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default CustomerTable;
