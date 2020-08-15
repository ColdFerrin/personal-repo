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
            loading: true
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        fetch('https://api.github.com/users/ColdFerrin/repos', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                let active = data;
                let originalLength = active.length;
                console.log(originalLength)
                let maxFit = Math.floor((window.innerWidth * .7) / 442);
                let extras = ((maxFit > 0) ? (maxFit - (originalLength % maxFit)) : 0);
                for(let i = 0; i < extras; ++i){
                    active.push({})
                }
                this.setState({ data: active, originalElements: originalLength, loading: false })
            })
            .catch(console.error);
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        console.log('update')
        let active = this.state.data;
        let originalLength = this.state.originalElements;
        console.log('originalLength = ' + originalLength)
        let maxFit = Math.floor((window.innerWidth * .7) / 442);
        console.log('maxFit = ' +maxFit)
        let extras = ((originalLength % maxFit !== 0) ? ((maxFit > 0) ? (maxFit - (originalLength % maxFit)) : 0) : 0);
        console.log('extras = ' + extras)
        if( (originalLength + extras) > active.length ){
            let toAdd = (originalLength + extras) - active.length
            for(let i = 0; i < toAdd; ++i){
                active.push({})
                console.log('push')
            }
        } else if ((originalLength + extras) < active.length ){
            let toRemove = active.length - (originalLength + extras)
            for(let i = 0; i < toRemove; ++i){
                active.pop()
                console.log('pop')
            }
        }
        this.setState({data: active})
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
