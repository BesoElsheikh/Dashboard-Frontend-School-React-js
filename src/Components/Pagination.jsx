import React from 'react'
import ReactPaginate from "react-paginate";
import './Pagination.css'
const Pagination = ({ pageCount, onPress }) => {

    const handlePageClick = (data) => {

        onPress(data.selected + 1)
    }; 
    return ( 
        <ReactPaginate
            breakLabel="..." 
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="Prev"
            containerClassName={"pagination flex justify-center gap-4 p-3"}
            pageClassName={"block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"}
            pageLinkClassName={" page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default Pagination
