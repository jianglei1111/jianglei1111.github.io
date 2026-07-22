import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function Pagination({ label, page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label={label}>
      <button
        type="button"
        aria-label="上一页"
        title="上一页"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <CaretLeft size={18} aria-hidden="true" />
      </button>
      <span aria-live="polite">
        {String(page).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </span>
      <button
        type="button"
        aria-label="下一页"
        title="下一页"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <CaretRight size={18} aria-hidden="true" />
      </button>
    </nav>
  );
}
