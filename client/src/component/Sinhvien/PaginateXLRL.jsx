import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const PanigateXLRL = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (data) => {
        console.log(data)
        setCurrentPage(data.selected);
    };

    return (
        <div>
            {currentPage === 0 && (
                <div>
                    <h2>Trang 1</h2>
                    {/* Giao diện trang 1 */}
                </div>
            )}
            {currentPage === 1 && (
                <div>
                    <h2>Trang 2</h2>
                    {/* Giao diện trang 2 */}
                </div>
            )}
            {currentPage === 2 && (
                <div>
                    <h2>Trang 3</h2>
                    {/* Giao diện trang 3 */}
                </div>
            )}
            {currentPage === 3.1 && (
                <div>
                    <h2>Trang 4</h2>
                    {/* Giao diện trang 4 */}
                </div>
            )}
            {currentPage === 4 && (
                <div>
                    <h2>Trang 5</h2>
                    {/* Giao diện trang 5 */}
                </div>
            )}
            <ReactPaginate
                //breakLabel="..."
                nextLabel="next >"
                //onPageChange={handlePageClick}
                //pageRangeDisplayed={5}
                pageCount={5}
                previousLabel="< previous"
                containerClassName='flex items-center justify-center mt-8'
                pageClassName='hover:bg-gray-300 w-10 h-10 flex items-center justify-center rounded-md m-1'
                pageLinkClassName='w-full h-full flex items-center justify-center'
                activeClassName='bg-sky-700 text-white'
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default PanigateXLRL