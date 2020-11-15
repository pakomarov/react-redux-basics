import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, []);
  return userData.loading ? (
    <h2>Loading.....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User list:</h2>
      {
        userData &&
        userData.users &&
        userData.users.map((user, i) => <p key={i}>{user.name}</p>)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
