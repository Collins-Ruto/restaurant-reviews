import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/AddReview";
import Restaurant from "./components/Restaurants";
import RestaurantsList from "./components/RestaurantsList";
import Login from "./components/Login";

function App() {

  const [user, setUser] = React.useState(null)

  async function login(user = null) {
    setUser(user)
  }
  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-header">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                logout {user.name}
              </a>
            ) : (
              <Link onClick={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList}/>
          <Route
            path="/restaurants/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => <Restaurant {...props} user={user} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
