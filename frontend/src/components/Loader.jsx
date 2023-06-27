import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () =>
{
    return (
        <Spinner animation="border"
            role='status'
            style={{
                width: '100px',
                height: '100px',
                margin: 'auto',
                display: 'block'
            }}
            variant="dark" />
    )
}

export default Loader