import React, { useState } from 'react';
import './MyButton.css';
import Modal from '@material-ui/core/Modal';

const MyButton = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                onClose={closeModal}
                open={isModalOpen}
                style={{
                    position: 'absolute',
                    border: '2px solid #000',

                    boxShadow: '2px solid black',
                    height: 220,
                    width: 640,
                    margin: 'auto'
                }}
                className='modal-class'
            >
                <div
                    style={{
                        backgroundColor: '#222', // Dark background color
                        color: 'white', // Text color
                        padding: '20px',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Box shadow for the modal
                    }}
                >
                    <h2>Project Info</h2>
                    <p>Title: {project.title}</p>
                    <p>Technologies: {project.tech}</p>
                    <p>Frontend: {project.frontend}</p>
                    <p>Backend: {project.backend}</p>
                    <p>Database: {project.db}</p>
                    <p>Infrastructure: {project.infra}</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>
            <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
            </div>

        </div>
    );
};

export default MyButton;
