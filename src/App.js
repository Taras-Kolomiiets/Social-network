import React from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initialazeApp } from "./redux/app-reducer";
import { compose } from "redux";
import { withRouter } from "react-router";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialazeApp();
  }

  render() {
    if (!this.props.initialazed) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { initialazeApp }
  )
)(App);
