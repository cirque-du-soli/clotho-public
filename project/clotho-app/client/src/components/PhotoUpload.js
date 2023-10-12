import React, { useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function NewPost() {
  const [photos, setPhotos] = useState([]);
  const [caption, setCaption] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    // Upload photo to server
    const { data } = await axios.post('/api/posts', formData, { headers: {'Content-Type': 'multipart/form-data'}});
    // Update local state
    setPhotos([...photos, { url: data.url }]);
  };

  const onDragEnd = (result) => {
    // Reorder photo list with drag and drop
    // Then update the order in your database
  };

  const submit = async event => {
    event.preventDefault();
    // Submit any other other form data here
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="file" onChange={onFileChange} accept="image/*" />
        <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption' />
        <button type="submit">Submit</button>
      </form>

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
                      <img src={photo.url} alt="Uploaded Preview" />
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
}
