import React from "react";
import MyAccountStyles from "./myaccount.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DummyMan from "../../assets/dummyman.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/Actions/UserActions";

const MyAccount = () => {
  const { loading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Breadcrumb name="MY ACCOUNT"/>
      <div className={`container-fluid py-5 ${MyAccountStyles.myaccount}`}>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div className="container text-center">
            <button
              onClick={handleLogout}
              className={MyAccountStyles.logoutbtn}
            >
              Logout
            </button>
            <img src={user.avatar.url} alt={user.name} />
            <br />
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <p>CreatedAt: {String(user.createdAt).substring(0, 10)}</p>
            <div>
              <Link
                to="/my-account/my-orders"
                className={MyAccountStyles.myordersbtn}
              >
                My Orders
              </Link>
              <Link
                to="/my-account/edit-account"
                className={MyAccountStyles.editaccountbtn}
              >
                Edit Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyAccount;
