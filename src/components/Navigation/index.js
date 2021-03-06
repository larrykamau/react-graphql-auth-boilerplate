import React, { Component } from "react";
import { Button } from "../Button";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "containers/Services/auth";

const auth = new Auth();
class Navigation extends Component {
  handleLogout = () => {
    auth.logout(this.props.history);
  };

  render() {
    return (
      <div>
        <div>
          <ol>
            {this.props.routes.map(route => (
              <Link
                key={route.url}
                className="nav-link"
                to={`${this.props.path}${route.url}`}
              >
                {route.title}
              </Link>
            ))}
          </ol>
        </div>

        <Button onClick={this.handleLogout}>Logout</Button>
      </div>
    );
  }
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  path: PropTypes.string.isRequired
};

export default withRouter(Navigation);
