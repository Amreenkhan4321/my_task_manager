import React from "react";
import PagesIndex from "../../container/PagesIndex";
import Index from "../../container/Index";

const CustomTablePagination = (props) => {
  //all state
  // Handle page change
  const handleChangePage = (event, newPage) => {
    props.setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    props.setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };

  return (
    <Index.Box className="pagination-main">
      <Index.TablePagination
        className="pagination-font"
        component="div"
        count={props.count}
        page={props.page}
        onPageChange={handleChangePage}
        rowsPerPage={props.rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Index.Box>
  );
};

export default CustomTablePagination;
