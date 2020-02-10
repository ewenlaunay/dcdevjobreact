import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";

class JobList extends Component {
    render() {
        return (
            <div>
                <h1>Liste des emplois:</h1>
                <Link to="/offresdemplois"/>


                
            </div>
        );
    }
}

export default JobList;