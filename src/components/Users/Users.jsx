import React, {Component} from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/image.png'


class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setUsersCount(responce.data.totalCount)
            })
    }

    onPageChange(pageNumber) {
        console.log(pageNumber)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    { pages.map(p => {
                        return <span
                            key={p}
                            onClick={() => this.onPageChange(p)}
                            className={`${styles.page} ${this.props.currentPage === p ? styles.selectedPage : ""}`}
                        >{p}</span>
                    })}
                </div>

                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small || userAvatar} className={styles.userPhoto} alt=""/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>}

                                </div>
                            </span>
                                    <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>u.location.country</div>
                                    <div>u.location.city</div>
                                </span>
                            </span>
                        </div>)
                }
            </div>
        )
    }
}

export default Users;