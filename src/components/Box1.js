import React, {Component} from "react";

const styles = {
    backgroundColor: "#3f3f46",
    width: "84%",
    height: "500px",
    display: "block",
    float: "right"
}

class Box1 extends Component {
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

export default Box1;