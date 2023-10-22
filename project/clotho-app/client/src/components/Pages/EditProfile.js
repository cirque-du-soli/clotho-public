// EditProfile.js
import React, { useState } from 'react';
import axios from '../../api/axios';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditProfile() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [email, setEmail] = useState('');
  // const [avatar, setAvatar] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.put('/users', {
        currentPassword,
        newPassword,
        email,
        avatar,
      });
      toggle();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
        {/* ... other form fields ... */}
        <FormGroup>
            <Label for="currentPassword">Current Password</Label>
            <Input type="password" name="currentPassword" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
            <Label for="newPassword">New Password</Label>
            <Input type="password" name="newPassword" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
            <Label for="confirmNewPassword">Confirm New Password</Label>
            <Input type="password" name="confirmNewPassword" id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormGroup>
        {/* <FormGroup>
            <Label for="avatar">Avatar URL</Label>
            <Input type="text" name="avatar" id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        </FormGroup> */}
        {/* ... other form fields ... */}
        <Button type="submit">Update Profile</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Profile Updated</ModalHeader>
            <ModalBody>
                Your profile has been updated successfully!
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Ok</Button>
            </ModalFooter>
        </Modal>
    </Form>
);
  }
export default EditProfile;























// import { Button, Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
// import { useState, useEffect } from 'react';
// import useAxiosJWT from '../../hooks/useAxiosJWT';
// import axios from '../../api/axios';
// import { Link } from 'react-router-dom';

// function EditProfile() {
//     const axiosJWT = useAxiosJWT();
//     const [user, setUser] = useState({});
//     const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });

//     useEffect(() => {
//         // fetch the user profile here
//         // fetchUserProfile();
//     }, []);

//     const handleChangeAvatar = (event) => {
//         // TODO - avatar change logic here
//     }

//     const handleUpdateEmail = (event) => {
//         event.preventDefault();
//         // TODO - update email logic
//     }

//     const handleDeleteAccount = (event) => {
//         event.preventDefault();
//         // TODO - delete account logic
//     }

//     const handleChangePassword = (event) => {
//         event.preventDefault();
//         if (passwordData.newPassword === passwordData.confirmNewPassword) {
//             // TODO - password change logic
//         } else {
//             alert('New passwords do not match');
//         }
//     }

//     return (
//         <Container className='col-10 offset-1'>
//             <Row className='my-5'>
//                 <Col md='2' className='text-center'>
//                     <img src={user.avatar} alt={`${user.username}'s avatar`} className="img-fluid rounded-circle" width={60} />
//                     <Input type="file" onChange={handleChangeAvatar} />
//                 </Col>
//                 <Col md='10'>
//                     <h2>Edit Profile</h2>
//                     <FormGroup>
//                         <Label for="email">Email:</Label>
//                         <Input type="email" name="email" id="email" defaultValue={user.email} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="passwordConfirm">Password (for email change confirmation):</Label>
//                         <Input type="password" name="passwordConfirm" id="passwordConfirm" />
//                     </FormGroup>
//                     <Button color="primary" onClick={handleUpdateEmail}>Update Email</Button>
//                 </Col>
//             </Row>

//             <Row className='my-5'>
//                 <Col>
//                     <h4>Change Password</h4>
//                     <FormGroup>
//                         <Label for="currentPassword">Current Password:</Label>
//                         <Input type="password" name="currentPassword" id="currentPassword" onChange={e => setPasswordData({ ...passwordData, currentPassword: e.target.value })} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="newPassword">New Password:</Label>
//                         <Input type="password" name="newPassword" id="newPassword" onChange={e => setPasswordData({ ...passwordData, newPassword: e.target.value })} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="confirmNewPassword">Confirm New Password:</Label>
//                         <Input type="password" name="confirmNewPassword" id="confirmNewPassword" onChange={e => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })} />
//                     </FormGroup>
//                     <Button color="warning" onClick={handleChangePassword}>Change Password</Button>
//                 </Col>
//             </Row>

//             <Row className='my-5'>
//                 <Col>
//                     <h4>Delete Account</h4>
//                     <FormGroup>
//                         <Label for="passwordDelete">Password (for confirmation):</Label>
//                         <Input type="password" name="passwordDelete" id="passwordDelete" />
//                     </FormGroup>
//                     <Button color="danger" onClick={handleDeleteAccount}>Delete Account</Button>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }


// export default EditProfile;
