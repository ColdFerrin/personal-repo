import React, { useEffect, useState } from 'react';
import './Projects.css';
import { ProjectTile, GitHubRepo } from './ProjectTile';

export function Projects() {
    const [data, setData] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/ColdFerrin/repos', {
            headers: {
                'Accept': 'application/vnd.github+json'
            }
        })
            .then(res => res.json())
            .then((incomingData) => {
                setData(incomingData)
                setLoading(false)
            })
            .catch(console.error);
    
    }, []);

    return(
        <>
        { loading ? (
            <div className={'loadStyle'}><div className={'loader'}/></div>
        ) : (
            <div className={'projects'}>
                {
                    data.map((item) => (
                        <ProjectTile data={item}/>
                    ))
                }
            </div>
        )

        }
        </>
    )
}
