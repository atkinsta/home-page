import React, {Component} from "react";
import Scrollspy from "react-scrollspy";

const styles = {
    sidebar: {
        position: "fixed",
        minHeight: "100vh",
        left: 0,
        width: "16%",
        display: "block",
        padding: 0
    },
    sidebarBody: {
        backgroundColor: "#3f9cca",
        wordWrap: "break-word",
        minHeight: "100vh"
    },
    sidebarHead: {
        padding: "4rem 1rem",
        backgroundColor: "#1e1e1e"
    },
    menu: {
        padding: "20px"
    }
}

class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar" style={styles.sidebar}>
                <div className="sidebarHead" style={styles.sidebarHead}>
                    <h2>Ty Atkins</h2>
                    <h3>Full-Stack Web Developer</h3>
                </div>
                <div className="sidebarBody" style={styles.sidebarBody}>
                    <aside className="menu" style={styles.menu}>
                        <p className="menu-label">About Me</p>
                        <ul className="menu-list">
                            <li><a>Ty Atkins</a></li>
                        </ul>
                        <p className="menu-label">Portfolio</p>
                        <ul className="menu-list">
                            <Scrollspy items={ ['nav1', 'nav2', 'nav3'] } currentClassName="is-active">
                                <li><a href="#nav1">UNCC Code</a></li>
                                <li><a href="#nav2">Snippet!</a></li>
                                <li><a href="#nav3">DataBucket</a></li>
                            </Scrollspy>
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }

}

export default Sidebar;