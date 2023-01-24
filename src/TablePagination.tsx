import * as React from 'react'
import TablePagination from '@mui/material/TablePagination';
import { DisabledByDefault } from '@mui/icons-material';

interface Pagination {
    count: number
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    perPage: number
    setPerPage: React.Dispatch<React.SetStateAction<number>>
}

export default function TablePaginationDemo({ count, page, setPage, perPage, setPerPage }: Pagination) {

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement> | null, newPage:number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault()
    setPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <TablePagination
      component="div"
      showFirstButton={true}
      showLastButton={true}
      count={count}
      page={page}
      rowsPerPageOptions={[5, 10, 25, 50]}
      onPageChange={handlePageChange}
      rowsPerPage={perPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}