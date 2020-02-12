import React, {Component} from 'react';
import JobList from "./JobList";
import "./PageJob.scss";

class PageJobs extends Component {
    render() {
        return (
            <div className="main-container  container">
                <h1>Offres d'emplois</h1>
                    <form className="form-inline md-form form-sm mt-0">
                        <input className="form-control form-control-sm ml-3 w-65" type="text" placeholder="Recherche"
                               aria-label="Search"/>
                    </form>
                <br/>
                <JobList/>

            </div>
        );
    }
}

export default PageJobs;