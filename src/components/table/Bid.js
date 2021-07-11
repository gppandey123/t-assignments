import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../../container/actions";

const Bid = (props) => {
  const Data = useSelector((state) => state.customers);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const filterData = Data.find((item) => item.id === props.match.params.id);

  useEffect(() => {
    dispatch(apiCall());
  }, [Data]);

  return (
    <>
      {loading ? (
        <Container fixed>
          <h1>Bid details of {filterData.firstname}</h1>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>CarTitle</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterData.bids.map((bid) => (
                  <TableRow key={bid.id}>
                    <TableCell component="th" scope="row">
                      {bid.carTitle}
                    </TableCell>
                    <TableCell align="right">{bid.amount}</TableCell>
                    <TableCell align="right">{bid.created}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <div style={{ display: "flex", "justify-content": "center" }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Bid;
