'use client';
import Link from 'next/link';

const Paginate = ({ mediaType, title, page, numPages }) => {
  return (
    <div className="flex items-center">
      <Link
        href={`/${mediaType}/${title}?page=${page > 1 ? page - 1 : 1}`}
        className="paginateBtn mr-2"
      >
        Prev
      </Link>
      <p className="text-gold font-bold">
        {page} / {numPages}
      </p>
      <Link
        href={`/${mediaType}/${title}?page=${
          page < numPages ? page + 1 : numPages
        }`}
        className="paginateBtn ml-2"
      >
        Next
      </Link>
    </div>
  );
};

export default Paginate;
