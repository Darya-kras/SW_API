import React from "react";
import "./style.css"

const Pagination = ({totalPages, paginate}) => {
    const pageNum = []
    for (let i = 1; i <= totalPages; i++) {
        pageNum.push(i)
    }

    return ( 
        <ul className="pagination">
            {
                pageNum.map(number => (
                    <li className="page-item" key={number}>
                        <button className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))
            }
        </ul>
     )
}
 
export default Pagination;