import React, {Component} from 'react';
import JobItem from "./JobItem";
import './JobList.scss';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            loading: true
        };
    }


    componentDidMount() {
        fetch('https://127.0.0.1:8000/api/jobs')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false}))
        fetch('https://127.0.0.1:8000/api/skills')
            .then(response => response.json())
            .then(data => this.setState({skills: data['hydra:member'], loading:false}))
    }

    render() {

        if (this.state.jobs.length === 0) {
            return <div>Chargement des offres...</div>
        }



        const jobsLi = this.state.jobs.map(job =>
            <div class="col-6">
                <li key={job.id}>
                    <b><JobItem job={job}/></b>
                </li>
                <br/>
            </div>);

        return (
            <div className="li-container">
                <ul>
                    {jobsLi}
                </ul>
            </div>
        );
    }
}

export default JobList;