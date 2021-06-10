import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PaginationVip(props: any) {
  const {pagination, onPageChange} = props;
  const {page, limit, totalPost} = pagination;
  const totalPage = Math.ceil(totalPost/limit);
  const handlePageChange = (newPage: any)=>{
     if(newPage){
      onPageChange(newPage)
     }
  }
  return (
    <div className="d-flex justify-content-center">
      <nav className="my-4 pt-2">
        <ul className="pagination pagination-circle pg-blue mb-0">
          <li
          onClick={()=> handlePageChange(1)}
          className={`page-item clearfix d-none d-md-block ${page <= 1 && 'disabled disable_btn'}`}>
            <a className="page-link">First</a>
          </li>
          <li
          onClick={()=> handlePageChange(page - 1)}
          className={`page-item ${page <= 1 && 'disabled disable_btn'}`}>
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li
          onClick={()=> handlePageChange(1)}
          className={`page-item ${page == 1 && 'active'}`}>
            <a className="page-link">1</a>
          </li>
          <li
          onClick={()=> handlePageChange(2)}
          className={`page-item ${page == 2 && 'active'}`}>
            <a className="page-link">2</a>
          </li>
          <li
          onClick={()=> handlePageChange(3)}
           className={`page-item ${page == 3 && 'active'}`}>
            <a className="page-link">3</a>
          </li>

          <li
           onClick={()=> handlePageChange(page + 1)}
          className={`page-item ${page <= totalPage && 'disable_btn'}`}>
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>

          <li
          onClick={()=> handlePageChange(totalPage + 1)}
           className={`page-item clearfix d-none d-md-block ${page <= totalPage && 'disable_btn'}`}>
            <a className="page-link">Last</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

PaginationVip.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
};

export default PaginationVip;
