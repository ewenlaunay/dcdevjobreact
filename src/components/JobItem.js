import React, {Component} from 'react';
import './JobItem.scss'


class JobItem extends Component {

    render() {
        const {job} = this.props;
        const skills = this.props.job.skills.map(skill => <li key={skill.id}>{skill.name}</li>);


        return (
            <div class="fiche">
                <ul>
                    <div>
                        <li>{job.title}</li>
                    </div>
                    <div >
                        <li>{job.company}</li>
                    </div>
                    <div>
                        <li>{skills}</li>
                    </div>
                    <h6>Offre ajouté le ...</h6>
                </ul>

            </div>
        );
    }
}

export default JobItem;