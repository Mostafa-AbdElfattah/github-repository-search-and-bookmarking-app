import Pagination from '@mui/material/Pagination';

import "./Pagination.scss";
const PaginationComponent = ({
  count,
  defaultPage,
  handleChange,
  page
}) => {
  return (
    <div className="pagination-wrapper">
      <Pagination
        hidePrevButton
        hideNextButton
        onChange={handleChange}
        count={count}
        defaultPage={defaultPage}
        page={page}
      />
    </div>
  );
};

export default PaginationComponent;
