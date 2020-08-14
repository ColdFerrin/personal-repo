import React from 'react';
import './ProjectTile.css';
//import _ from 'lodash';

export class ProjectTile extends React.Component{
    html_url;
    render() {
        console.log(this.props)
        return(
            <div className={'outer'}>
                <a href={this.props.data.html_url} style={{textDecoration: 'none', color: 'black'}}>
                    <div className={'proj'}>
                        <h3 className={'Link-proj'}>
                            {this.props.data.name.toString()}
                        </h3>
                        <p className={'Link-proj'}>
                            {this.props.data.description.toString()}
                        </p>
                    </div>
                </a>
            </div>
        )
    }
}
