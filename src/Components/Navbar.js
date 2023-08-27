import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    static propTypes = {}

    render() {
        return (
            <div id='navbar'>
                <div id='logo'><a href="/"><b>NewsMonkey</b></a></div>

                <div id='menuitems'>
                    <li><Link to="/Business">Business</Link></li>
                    <li><Link to="/Entertainment">Entertainment</Link></li>
                    <li><Link to="/Health">Health</Link></li>
                    <li><Link to="/Science">Science</Link></li>
                    <li><Link to="/Sports">Sports</Link></li>
                    <li><Link to="/Tech">Tech</Link></li>
                </div>
            </div>
        )
    }
}

export default Navbar