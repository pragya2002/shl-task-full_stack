import React, { useEffect, useState } from 'react'
import axios, { formToJSON } from 'axios';
import MyButton from './MyButton';


const Index = () => {
    let [projects, setProjects] = useState([]);


    useEffect(() => {
        // Replace with the actual API endpoint
        const apiUrl = 'https://api.github.com/users';

        axios.get(apiUrl)
            .then((response) => {
                setProjects(Array.from(response.data));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);






    let i = 0;
    return (

        <div className="container">

            {
                projects.map((project) => {
                    i += 1;


                    return (
                        <div className="flip-card-container" >
                            <div className="flip-card">

                                <div className="card-front">
                                    <figure>
                                        <div className="img-bg"></div>
                                        <img src={"https://source.unsplash.com/random/900*700/?night&" + i} alt="Image 2" />
                                        <figcaption>{project.title}</figcaption>
                                    </figure>

                                    <ul>
                                        <li><div className="heading">Project Technologies</div><div className='ans'>{project.tech}</div></li>
                                        <li><div className="heading">Technical_Skillset.Frontend</div> <div className='ans'>{project.frontend}</div></li>
                                        <li><div className="heading">Technical_Skillset.Backend</div> <div className='ans'>{project.backend}</div></li>
                                        <li><div className="heading">Technical_Skillset.Database</div> <div className='ans'>{project.db}</div></li>
                                        <li><div className="heading">Technical_Skillset.Infrastructure</div> <div className='ans'>{project.infra}</div></li>
                                    </ul>
                                </div>

                                <div className="card-back">
                                    <figure>
                                        <div className="img-bg"></div>
                                        <img src={"https://source.unsplash.com/random/900*700/?night&" + i} alt="Brohm Lake" />
                                    </figure>

                                    <MyButton project={project} />
                                </div>

                            </div>
                        </div>
                    )
                })

            }

        </div>


    )
}

export default Index;

