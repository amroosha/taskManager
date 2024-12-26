import React, { useState } from 'react';
import CreateTaskModal from './createTaskModal'; // Import the modal component
import tasks from '../constants/test';

function UtilityNav(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleCreateTask = (task) => {
    console.log('Task created:', task);

    
    // tasks.push(task);

    setIsModalOpen(false);
  };

  return (
    <div id="utility-container">
      <input
        type="button"
        value="Create"
        id="create-button"
        onClick={handleOpenModal}
      />
      <img
        src="https://www.svgrepo.com/show/33236/bell.svg"
        id="notification-bell"
        alt="Notifications"
      />
      <img src={props.profile} id="user-profile" alt="User Profile" />

      {isModalOpen && (
        <CreateTaskModal
          onClose={handleCloseModal}
          onCreateTask={handleCreateTask}
        />
      )}
    </div>
  );
}

export default UtilityNav;