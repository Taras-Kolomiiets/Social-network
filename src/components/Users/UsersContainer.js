import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  acceptFollow,
  setCurrentPage,
  acceptUnfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.acceptUnfollow}
          follow={this.props.acceptFollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      acceptFollow,
      acceptUnfollow,
      setCurrentPage,
      toggleFollowingProgress,
      getUsers: requestUsers,
    }
  ),
  withAuthRedirect
)(UsersContainer);
