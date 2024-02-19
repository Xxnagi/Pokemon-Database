import React from "react";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ page, handlePrevPage, handleNextPage }) => {
  return (
    <div className="flex mx-auto justify-center py-4 items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <IconButton size="sm" variant="outlined" onClick={handleNextPage}>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
};
export default Pagination;
