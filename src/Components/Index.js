import React, { useEffect, useState } from 'react'
import axios, { formToJSON } from 'axios';
import MyButton from './MyButton';
import MyCard from './MyCard';


const Index = () => {
    let [projects, setProjects] = useState([]);


    useEffect(() => {
        // Replace with the actual API endpoint
        const apiUrl = 'https://iodized-wheat-bougon.glitch.me/';

        axios.get(apiUrl)
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (

        <div className="container">

            {
                projects.map((project) => {


                    return (
                        <MyCard project={project} />
                    )
                })

            }

        </div>


    )
}

export default Index;

