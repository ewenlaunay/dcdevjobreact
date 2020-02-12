import React, {Component} from 'react';
import JobItem from "./JobItem";
import './JobList.scss';
import moment from "moment";
import 'moment/locale/fr';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            skills: [],
            jobSelect: {},
            loading: true
        };
    }


    afficherJob(job) {
        this.setState({jobSelect: job});

    }

    componentDidMount() {
        fetch('https://127.0.0.1:8000/api/jobs')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false}))
        fetch('https://127.0.0.1:8000/api/skills')
            .then(response => response.json())
            .then(data => this.setState({skills: data['hydra:member'], loading: false}))
    }


    render() {

        if (this.state.jobs.length === 0) {
            return <div>Chargement des offres...</div>
        }


        const jobsLi = this.state.jobs.map(job =>
            <div className="fiche">
                <JobItem job={job}/>
                <div className="d-flex justify-content-center">
                    <button onClick={() => {
                        this.afficherJob(job)
                    }}
                            className="badge badge-primary">
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/gambling-15/48/94-512.png"
                            alt="" className="img"
                        />
                    </button>
                </div>
                <h6>Offre ajouté {moment("20200210").fromNow()}</h6>
            </div>);


        return (
            <div className="joblist row ">
                <div className="col-12 col-sm-6 fiche">
                    {jobsLi}
                </div>
                <div className="col-12 col-sm-6 btn btn-light fiche2">
                    <li>
                        <b>{this.state.jobSelect.title}</b>
                    </li>
                    <li>
                        <b>{this.state.jobSelect.company}</b>
                    </li>
                    <li>
                        {this.state.jobSelect.description}
                    </li>
                    <li>
                        <a href={this.state.jobSelect.url}>{this.state.jobSelect.url}</a>
                    </li>
                </div>
            </div>


        );
    }
}

export default JobList;