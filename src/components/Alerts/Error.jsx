import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import errorImg from '../../assets/img/error.svg';

const Error = () => {
  return (
    <TableRow>
      <TableCell sx={{ textAlign: 'center' }} colSpan={5}>
        <img src={errorImg} alt="error" width={100} />
        <h2>Ошибка загрузки данных :(</h2>
        <h4>Вероятно на сервисе "mockapi" ведутся технические работы. Попробуйте позже.</h4>
      </TableCell>
    </TableRow>
  );
};

export default Error;
