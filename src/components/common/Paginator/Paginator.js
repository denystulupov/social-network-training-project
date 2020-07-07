import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({usersCount, pageSize, onPageChange, currentPage}) => {
    let pagesCount = Math.ceil(usersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`${styles.page} ${currentPage === p ? styles.selectedPage : ""}`}
                >{p}</span>
            })}
        </div>
    )
};

export default Paginator