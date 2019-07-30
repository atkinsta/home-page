import React, {Component} from "react";
import {Document, Page} from 'react-pdf/dist/entry.webpack';
import Resume from "../assets/TyResumeFixed.pdf"

class ResumePage extends Component {

    render() {
        return (
            <div>
                <Document 
                    file={Resume}>
                    <Page pageNumber={1} 
                    scale={2}/>
                </Document>
            </div>
        )
    }
}

export default ResumePage;