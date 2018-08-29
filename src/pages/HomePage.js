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
                    <p> Hello </p>
                </Box1>
                <Box2 id="nav1">
                    <h1> OIIIIIIIII </h1>
                </Box2>
                <Box1 id="nav2">
                    <p> Hello </p>
                </Box1>
                <Box2 id="nav3">
                    <h1> OIIIIIIIII </h1>
                </Box2>
            </div>
        )
    }
}

export default HomePage