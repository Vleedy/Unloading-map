import CircularProgress from '@mui/material/CircularProgress';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Loading = () => {
  return (
    <TableRow>
      <TableCell sx={{ textAlign: 'center' }} colSpan={5}>
        <CircularProgress sx={{ color: '#9cb11d' }} />
      </TableCell>
    </TableRow>
  );
};

export default Loading;
