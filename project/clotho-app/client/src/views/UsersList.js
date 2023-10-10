import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// reactstrap components
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Table,
} from "reactstrap";

function UsersList() {

    // STATES
    const [usersList, setUsersList] = useState([]);

    // HOOKS
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsersList(response.data);
        });
    }, []);

    const viewUser = (id) => {
        alert('viewUser() not yet implemented');
    };

    const deleteUser = (id) => {
        alert('deleteUser() not yet implemented');
    }

    return (
        <>
            <div className="content">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Users:</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th className="text-center">ID</th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Username</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">OtherStuff</th>
                                            <th className="text-center">Details</th>
                                            <th className="text-center">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usersList.map((val) => {
                                                return (
                                                    <tr>
                                                        <td>{val.id}</td>
                                                        <td>{val.name}</td>
                                                        <td>{val.username}</td>
                                                        <td>{val.email}</td>
                                                        <td>etc.</td>
                                                        <td className="text-center">
                                                            <button 
                                                                className="btn btn-secondary"
                                                                onClick={() => { viewUser(val.id) }}
                                                            >
                                                                Profile
                                                            </button>
                                                        </td>
                                                        <td className="text-center">
                                                            <button 
                                                                className="btn btn-danger"
                                                                onClick={() => { deleteUser(val.id) }}
                                                            >
                                                                Delete User
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default UsersList;