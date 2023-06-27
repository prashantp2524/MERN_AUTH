import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () =>
{
    const { userInfo } = useSelector((state) => state.auth)
    const [logoutApiCall] = useLogoutMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () =>
    {
        try
        {
            await logoutApiCall().unwrap();
            dispatch(logout())
            navigate('/')
        } catch (err)
        {
            console.log(err)
        }
    }
    return (
        <header>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand href="/">MERN-AUTH</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (
                                <>
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to={'/profile'}>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>

                                        <NavDropdown.Item onClick={logoutHandler}>
                                            logout
                                        </NavDropdown.Item>

                                    </NavDropdown>
                                </>
                            ) : (

                                <>
                                    <LinkContainer to={'/login'}>
                                        <Nav.Link ><FaSignInAlt />Sign In</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to={'/register'}>
                                        <Nav.Link ><FaSignOutAlt />Sign Up</Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </header >
    )
}

export default Header