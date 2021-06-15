import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';
function Pagination(props: any) {
  const {pagination,onPageChange} = props;
  const {page,limit,total} = pagination;
  const totalPage = Math.ceil(total/limit)
  const handlePageChange  = (newPage: any)=>{
    if(onPageChange){
        onPageChange(newPage)
    }
  }
  return (
    <ul className="pagination">
      <li>
        <a  className={`prev ${page <=1 && 'disable_btn'}`}
          onClick={()=>handlePageChange(page -1)}
        >
          Prev
        </a>
      </li>
      <li
        className={`pageNumber  ${page == 1 ? 'active' : ''} `}
        onClick={()=>handlePageChange(1)}
        >
          <a >1</a>
      </li>
      <li
        className={`pageNumber d-none-item ${page == 2 ? 'active' : ''} ${page >= totalPage && 'disable_btn'}`}
        onClick={()=>handlePageChange(2)}
        >
          <a >2</a>
      </li>
      <li
        className={`pageNumber d-none-item ${page == 3 ? 'active' : ''} ${page >= totalPage && 'disable_btn'}`}
        onClick={()=>handlePageChange(3)}
        >
          <a >3</a>
      </li>
      <li
        className={`pageNumber d-none-item ${page == 4 ? 'active' : ''} ${page >= totalPage && 'disable_btn'}`}
        onClick={()=>handlePageChange(4)}
        >
          <a >4</a>
      </li>
      <li>
        <a className={`next ${page >= totalPage && 'disable_btn'}`}
         onClick={()=>handlePageChange(page +1)}>
          Next
        </a>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
};

export default Pagination;
