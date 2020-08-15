import React from 'react';
import './Projects.css';
//import _ from 'lodash';
import {ProjectTile} from "./ProjectTile";

export class Projects extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            originalElements: 0,
            width: 0,
            height: 0,
            loading: true
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        fetch('https://api.github.com/users/ColdFerrin/repos', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                let active = data;
                console.log(active)
                console.log(active.length)
                let originalLength = active.length;
                console.log(this.state.width)
                let maxFit = Math.floor((this.state.width * .7) / 442);
                console.log('maxFit = ' + maxFit)
                let extras = ((maxFit > 0) ? (maxFit - (active.length % maxFit)) : 0);
                console.log('extras = ' + extras)
                console.log(typeof active)
                for(let i = 0; i < extras; ++i){
                    active.push({})
                    console.log('push')
                }
                console.log(active.length)
                this.setState({ data: data, originalElements: originalLength, loading: false })
            })
            .catch(console.error);
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
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
