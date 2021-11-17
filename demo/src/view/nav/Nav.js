import React from 'react';
import './Navalion.css'
import { NavLink} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <NavLink to="/home" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        Todo
                    </NavLink>
                    <NavLink to="/users" activeClassName="active">
                        User
                    </NavLink>
                </div>
            </>
        );
    }
}

export default Nav


