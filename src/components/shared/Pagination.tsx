'use client';

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    let startPage: number;
    let endPage: number;

    if (totalPages <= 5) {
      // If total pages is 5 or less, show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // If current page is near the start
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      }
      // If current page is near the end
      else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
        endPage = totalPages;
      }
      // If current page is in the middle
      else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-8 h-8 rounded-full ${
            currentPage === i
              ? "bg-primary-5 text-white"
              : "hover:bg-slate-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50 hover:bg-slate-100 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>
      {renderPageButtons()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50 hover:bg-slate-100 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination; 