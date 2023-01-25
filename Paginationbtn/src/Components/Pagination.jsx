function createArrayOfSize(n) {
  let arr = new Array(n).fill(0).map((e, index) => index + 1);
  return arr;
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  let pages = createArrayOfSize(totalPages).map((a) => {
    return (
      <button
        data-testid="page-btn"
        disabled={a === currentPage}
        onClick={() => {
          handlePageChange(a);
        }}
      >
        {a}
      </button>
    );
  });

  return <div>{pages}</div>;
}

export default Pagination;
