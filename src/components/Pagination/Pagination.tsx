import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';
function Pagination(props: any) {
  return (
    <ul className="pagination">
      <li>
        <a href="#" className="prev">
          {' '}
          {'<'} Prev
        </a>
      </li>
      <li className="pageNumber active">
        <a href="#">1</a>
      </li>
      <li className="pageNumber">
        <a href="#">2</a>
      </li>
      <li className="pageNumber">
        <a href="#">3</a>
      </li>
      <li className="pageNumber">
        <a href="#">4</a>
      </li>
      <li>
        <a href="#" className="next">
          Next {'>'}
        </a>
      </li>
    </ul>
  );
}

Pagination.propTypes = {};

export default Pagination;
