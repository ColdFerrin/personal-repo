import React from 'react';
import './ProjectTile.css';
//import _ from 'lodash';

/**
 *
 * @param item.data
 * @param item.data.html_url
 * @param item.data.name
 * @param item.data.description
 * @returns {JSX.Element}
 * @constructor
 */
export function ProjectTile(item) {

    return (
        <>
            { item != null && item.data !== undefined ? (
                <div className={'outer'}>
                    <a target="_blank" rel="noopener noreferrer" href={item.data.html_url} style={{textDecoration: 'none', color: 'black'}}>
                        <div className={'proj proj-style'}>
                            <h3 className={'Link-proj'}>
                                { item.data.name != null ? (
                                item.data.name.toString()
                                ) : ('')
                                }
                            </h3>
                            <p className={'Link-proj'}>
                                { item.data.description != null ? (
                                item.data.description.toString()
                                ) : ('')
                                }
                            </p>
                        </div>
                    </a>
                </div>
            ) : (
                <div className={'outer'}>
                </div>
            )
            }
        </>
    );
}
