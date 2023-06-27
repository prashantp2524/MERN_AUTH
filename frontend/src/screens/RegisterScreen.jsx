
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import Loader from '../components/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const RegisterScreen = () =>
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { userInfo } = useSelector((state) => state.auth)
    const [register, { isLoading }] = useRegisterMutation()

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
        if (password !== confirmPassword)
        {
            toast.error('Password do not match')
        } else
        {
            try
            {
                const res = await register({ name, email, password }).unwrap()
                dispatch(setCredentials({ ...res }))
                navigate('/')
            } catch (error)
            {
                toast.error(err?.data?.message || err.error)
            }
        }
    }
    return (
        <FormContainer>
            <h1>
                Sign Up
            </h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="my-2" controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' value={password} placeholder='Enter Password' controlId='password' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="my-2" controlId="confirmpassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' value={confirmPassword} placeholder='Confirm Password' controlId='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
                {isLoading && <Loader />}
                <Button type='submit' variant='primary' className='my-2'>
                    Sign Up
                </Button>
                <Row className='py-3'>
                    <Col>
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </Col>
                </Row>
            </Form>

        </FormContainer>
    )
}

export default RegisterScreen