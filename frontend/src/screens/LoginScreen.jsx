import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Loader from '../components/Loader'
const LoginScreen = () =>
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() =>
    {
        if (userInfo)
        {
            navigate('/')
        }
    }, [navigate, userInfo])
    const submitHandler = async (e) =>
    {
        e.preventDefault()
        try
        {
            const res = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            navigate('/')
        } catch (err)
        {
            toast.error(err?.data?.message || err.error)
        }
    }
    return (
        <FormContainer>
            <h1>
                Sign In
            </h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="my-2" controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' value={password} placeholder='Enter Password' controlId='password' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                {isLoading && <Loader />}
                <Button type='submit' variant='primary' className='my-2'>
                    Sign In
                </Button>
                <Row className='py-3'>
                    <Col>
                        New Customer? <Link to='/register'>Register Here</Link>
                    </Col>
                </Row>
            </Form>

        </FormContainer>

    )
}

export default LoginScreen