import React, {Component} from 'react';
import './JobItem.scss'


class JobItem extends Component {

    render() {
        const {job} = this.props;
        const skills = this.props.job.skills.map(skill =>
            <li className="badge badge-danger col" key={skill.id}>
                {skill.name}
            </li>
        );


        return (
            <div>
                <p><span><b>{job.title}</b></span></p>
                <p><span className="badge badge-success">{job.company}</span></p>
                <ul className="row">{skills}</ul>
            </div>
        );
    }
}

export default JobItem;