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
            <button onClick={openModal}>View More</button>
            <Modal
                onClose={closeModal}
                open={isModalOpen}
                style={{
                    position: 'absolute',
                    boxShadow: '2px solid black',
                    height: 220,
                    width: 640,
                    margin: 'auto'
                }}

            >
                <div className="cont">
                    <div className="card">
                        <div className="container-card bg-green-box">
                            <p className="card-title">Project Info</p>
                            <div>
                                <span className="category">Title:</span>
                                <span className="card-description">{project.title}</span>
                            </div>
                            <div>
                                <span className="category">Project Technologies:</span>
                                <span className="card-description">{project.tech}</span>
                            </div>
                            <div>
                                <span className="category">TechnicalSkillset.Frontend:</span>
                                <span className="card-description">{project.frontend}</span>
                            </div>

                            <div>
                                <span className="category">TechnicalSkillset.Backend:</span>
                                <span className="card-description">{project.backend}</span>
                            </div>

                            <div>
                                <span className="category">TechnicalSkillset.Database:</span>
                                <span className="card-description">{project.db}</span>
                            </div>
                            <div>
                                <span className="category">TechnicalSkillset.Infrastructure:</span>
                                <span className="card-description">{project.infra}</span>
                            </div>
                        </div>
                    </div>
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
