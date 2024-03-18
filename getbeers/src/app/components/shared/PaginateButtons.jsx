import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function PaginationButtons({pageCount , gotoPage}) {
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const handlePageClick = (event) =>{
    gotoPage(event.selected + 1)
  }
  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <ReactPaginate
        breakLabel={<span className="mx-1">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-xl hover:bg-gray-300">
            <BsChevronRight />
          </span>
        }
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-xl hover:bg-gray-300">
            <BsChevronLeft />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center gap-3"
        pageClassName="w-9 h-7 p-1 flex items-center justify-center text-xl bg-white text-black rounded-xl hover:bg-gray-300 hover:underline"
        activeClassName="bg-blue-400 font-bold"
      />
    </motion.div>
  );
}
