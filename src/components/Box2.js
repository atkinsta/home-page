import React, {Component} from "react";

const styles = {
    backgroundColor: "#252526",
    width: "84%",
    height: "500px",
    display: "block",
    float: "right"
}

class Box2 extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <div id={this.props.id} style={styles}>
                {this.props.children}
            </div>
        )
    }
}

export default Box2;