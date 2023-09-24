import React, { useState } from "react";
import MyCard from "./MyCard"; // Import your MyCard component
import Modal from '@material-ui/core/Modal';

export const SearchResult = ({ result }) => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(true);
    setIsModalOpen(true);

  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setShowCard(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div onClick={openModal}>
      {result}
      {(
        <div className="container">
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
                    <span className="card-description">{result[0]}</span>
                  </div>
                  <div>
                    <span className="category">Project Technologies:</span>
                    <span className="card-description">{result[1]}</span>
                  </div>
                  <div>
                    <span className="category">TechnicalSkillset.Frontend:</span>
                    <span className="card-description">{result[2]}</span>
                  </div>

                  <div>
                    <span className="category">TechnicalSkillset.Backend:</span>
                    <span className="card-description">{result[3]}</span>
                  </div>

                  <div>
                    <span className="category">TechnicalSkillset.Database:</span>
                    <span className="card-description">{result[4]}</span>
                  </div>
                  <div>
                    <span className="category">TechnicalSkillset.Infrastructure:</span>
                    <span className="card-description">{result[5]}</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};
