import React from 'react';
import { usePagination } from '../../hooks/usePagenation';
import css from './Pagination.module.css';

const Pagination = (props) => {
    let pagesArray = usePagination(props.totalPages);
    return (
        <div className={css.pages_wrapper}>
            {pagesArray.map(p => 
                <span 
                    className={p === props.page ? [css.pages_current, css.pages].join(' ') : css.pages}
                    key={p}
                    onClick={() => props.setPage(p)}
                >
                        {p}
                </span>
            )}
            </div>
    );
};

export default Pagination;