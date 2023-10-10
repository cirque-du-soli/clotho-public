// components/PhotoUpload.js

import React, { useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PhotoUpload = () => {
  const [photos, setPhotos] = useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const item_id = 1; // Replace with actual item ID
    const photo_order = photos.length;

    // Upload photo to server
    const { data } = await axios.post('/api/photos/upload', {
      file,
      item_id,
      photo_order,
    });

    // Update local state
    setPhotos([...photos, { url: data.url, order: photo_order }]);
  };

  const onDragEnd = (result) => {
    // Reorder photo list based on drag and drop
    // Then update the order in your database
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="photoList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {photos.map((photo, index) => (
                <Draggable key={photo.url} draggableId={photo.url} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img src={photo.url} alt="Item" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default PhotoUpload;
