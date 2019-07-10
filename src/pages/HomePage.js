import React, {Component} from "react";
import Sidebar from "../components/Sidebar";
import Box1 from "../components/Box1";
import Box2 from "../components/Box2";
import Scrollspy from "react-scrollspy";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Box1>
                    <p> This website is currently under construction... </p>
                    <p>Please view my <a href="http://www.github.com/atkinsta">github profile</a> for a portfolio of my work</p>
                </Box1>
            </div>
        )
    }
}

export default HomePage