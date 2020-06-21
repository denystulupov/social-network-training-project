import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../assets/images/image.png'
import Spinner from "../Spinner/Spinner";
import {NavLink} from "react-router-dom";

const Users = props => {

    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        onClick={() => props.onPageChange(p)}
                        className={`${styles.page} ${props.currentPage === p ? styles.selectedPage : ""}`}
                    >{p}</span>
                })}
            </div>

            {
                props.isLoading
                    ? <Spinner/>
                    : <div className={styles.users}>{
                        props.users.map(u =>
                            <div key={u.id} className={styles.user}>
                                <span>
                                    <div>
                                        <NavLink to={"/profile/" + u.id}>
                                            <img src={u.photos.small || userAvatar} className={styles.userPhoto}
                                                 alt=""/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>}

                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </span>
                                </span>
                            </div>)
                    }
                    </div>
            }
        </div>
    )
};

export default Users;