import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../assets/images/image.png'
import Spinner from '../Spinner/Spinner';
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";

const Users = props => {

    return (
        <div>
            <Paginator
                usersCount={props.usersCount} pageSize={props.pageSize}
                onPageChange={props.onPageChange} currentPage={props.currentPage}
            />

            {
                props.isLoading
                    ? <Spinner/>
                    : <>
                        <div className={styles.users}>{
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

                                            ? <button
                                                disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.unfollowUser(u.id)
                                                }}>Unfollow</button>

                                            : <button
                                                disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.followUser(u.id)
                                                }}>Follow</button>
                                        }

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
                    </>
            }


        </div>
    )
};

export default Users;