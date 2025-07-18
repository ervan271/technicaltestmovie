import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import "../style/header.css";
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const isOnline = useOnlineStatus();

    return (
        <Navbar variant="dark" className="bg-primary">
            <Container>
                <Navbar.Brand> TechtestMovie</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href='#Content' className="navlink-large">Home</Nav.Link>
                    <Nav.Link href='#Watchlist' className="navlink-large">My Watched List</Nav.Link>
                    <Badge bg={isOnline ? "warning" : "danger"} className="ms-4 align-content-center">
                        {isOnline ? "Online" : "Offline"}
                    </Badge>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;