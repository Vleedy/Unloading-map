import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(() => ({
  // Стилизация шапки таблицы
  [`&.${tableCellClasses.head}`]: {
    fontSize: 14,
    background: '#9cb11d',
    color: 'white',
    fontWeight: 700,
    '@media (max-width: 1250px)': {
      fontSize: 12,
    },
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // Стилизация тела таблицы
  cursor: 'pointer',
  '&:hover': {
    'td:nth-of-type(n)': {
      color: '#9cb11d',
      fontWeight: 500,
      transition: 'all 0.4s',
    },
  },
}));
