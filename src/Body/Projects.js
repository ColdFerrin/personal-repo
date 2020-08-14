import React from 'react';
import './Projects.css';
//import _ from 'lodash';
import {ProjectTile} from "./ProjectTile";

export class Projects extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/ColdFerrin/repos', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data, loading: false })
            })
            .catch(console.error);
    }

    render() {
        if(this.state.loading === true){
            return (
                <div className={'loader loadStyle'}/>
            )
        } else {
            return (
                <div className={'projects'}>
                    {
                        this.state.data.map((item) => (
                            <ProjectTile data={item}/>
                        ))
                    }
                </div>
            );
        }
    }
}
