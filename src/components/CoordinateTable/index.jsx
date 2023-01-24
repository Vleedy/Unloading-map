import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoordinates } from '../../redux/slices/coordinatesSlice';
import { getRouteFetch } from '../../redux/slices/routeSlice';
import Error from '../Alerts/Error';
import Loading from '../Alerts/Loading';
import { StyledTableCell } from './StyledComponents';
import { StyledTableRow } from './StyledComponents';

const headerCells = [
  'Номер заявки',
  'Координаты ОТ lat',
  'Координаты ОТ lng',
  'Координаты ДО lat',
  'Координаты ДО lng',
];

const CoordinateTable = () => {
  const [isActiveRow, setIsActiveRow] = useState(null);
  const dispatch = useDispatch();
  const { coordinates, status } = useSelector((state) => state.coordinates);

  const getCoordinates = async () => {
    dispatch(fetchCoordinates());
  };

  const getActiveCoordinates = (row, id) => {
    setIsActiveRow(id);
    dispatch(getRouteFetch(row));
  };

  React.useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerCells.map((item) => (
              <StyledTableCell align="left" key={item}>
                {item}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {status === 'error' ? (
            <Error />
          ) : status === 'loading' ? (
            <Loading />
          ) : (
            coordinates?.map((row) => (
              <StyledTableRow
                className={isActiveRow === row.id ? 'active' : ''}
                onClick={() => getActiveCoordinates(row, row.id)}
                key={row.id}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.fromLat}</TableCell>
                <TableCell align="left">{row.fromLng}</TableCell>
                <TableCell align="left">{row.toLat}</TableCell>
                <TableCell align="left">{row.toLng}</TableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoordinateTable;
