import React, {Component} from 'react';

class JobItem extends Component {

    componentDidMount() {
        fetch('https://127.0.0.1:8000/api/jobs')

    }


    render() {
        return (
            <div>



            </div>
        );
    }
}

export default JobItem;