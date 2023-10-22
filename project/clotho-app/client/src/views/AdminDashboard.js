
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "../components/Navbars/Header";
import NewUserForm from "../components/Forms/NewUserForm";
import CreateListing from "../components/Forms/CreateListing";
import PHCreateListing from "../components/PLACEHOLDERS/PHCreateListing";

//IMPORT: Reactstrap
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Table,
    Placeholder,
} from "reactstrap";

import Card2RPD from "../components/1-Admin/Card2RPD";
import UsersList from "../components/Tables/UsersList";

function AdminDashboard(props) {

    return (
        <>

            <Container className="adminDashboardHolder p-0 text-center">
                

                <Row>
                    <Col className="py-3">
                        <h1>Admin Dashboard</h1>
                    </Col>
                </Row>

                <Row className="p-3">
                    <Col xs="12" lg="6" className="mx-auto my-2">
                        <NewUserForm />
                    </Col>
                    <Col xs="12" lg="6" className="mx-auto my-2">
                        <PHCreateListing />
                    </Col>
                </Row>
                <Row className="px-3">
                    <Col xs="12" lg="4">
                        <Placeholder animation="glow">
                            <p>Holder of places (Left)</p>
                        </Placeholder>
                    </Col>
                    <Col xs="12" lg="4">
                        <Placeholder animation="glow">
                            <p>Hi. (Middle)</p>
                        </Placeholder>
                    </Col>
                    <Col xs="12" lg="4">
                        <Placeholder animation="glow">
                            <p>The placiest holder (Right)</p>
                        </Placeholder>
                    </Col>

                </Row>
                <Row className="px-3">
                    <Col xs="12" lg="12">
                        
                            <p>Holder of places</p>
                        {/* <CardRPD /> */}
                        <Card2RPD />
                        
                    </Col>

                </Row>
                <Row className="px-3">
                    <Col xs="12" lg="12">
                        <UsersList />
                        
                    </Col>

                </Row>






            </Container>

        </>
    );
}

export default AdminDashboard;
