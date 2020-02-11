import React, {Component} from 'react';
import './JobItem.scss'


class JobItem extends Component {

    render() {
        const {job} = this.props;
        const skills = this.props.job.skills.map(skill =>
            <div class="skills container">
                <li key={skill.id} className="btn btn-danger container">
                    {skill.name}
                </li>
            </div>);


        return (
            <div class="fiche col-md-12">
                <div class="col-md-6 row">
                    <p><span>{job.title}</span></p>
                    <p><span className="btn btn-success">{job.company}</span></p>
                    <p><span >{skills}</span></p>
                </div>
                <div class="col-md-4 row">
                    <span class="btn btn-success"><img src="https://cdn.dribbble.com/users/113776/screenshots/1338902/explore_icons_designed_by_mandar_apte_studio_for_lurnq_5.png" alt="" class="img"/></span>
                </div>
            </div>
        );
    }
}

export default JobItem;