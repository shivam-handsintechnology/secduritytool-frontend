import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import { usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
const Profile = () => {
    const ProfileData = useSelector((state) => state.UserReducer)
    console.log(ProfileData)
    const [obj, setObj] = useState({
        email: ProfileData.email,
        name: ProfileData.name,
        password: '',
        newPassword: '',
        confirmPassword: '',
        oldPassword: ''

    })
    const [visibility, setVisibility] = useState({
        isPasswordVisible: false,
        isOldPasswordVisible: false,
        isNewPasswordVisible: false,
        isConfirmPasswordVisible: false
    })

    const visibilityHandler = (type) => {
        setVisibility({ ...visibility, [type]: !visibility[type] })
    }
    const handleChange = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }
    const { handleSubmit } = usePostData()

    return (
        <div>
            <h1>Profile</h1>
            <Form onSubmit={(e) => handleSubmit(e, '/auth/update', obj)} autoComplete='nope'>
                <Row>

                    <Col md={6}>

                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"

                                name="email"
                                value={obj.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                autoComplete='off'
                                value={obj.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="oldPassword">
                            <Form.Label>Old Password:</Form.Label>
                            <Form.Control
                                type={visibility.isOldPasswordVisible ? "text" : "password"}
                                name="oldPassword"
                                value={obj.oldPassword}
                                autoComplete='nope'
                                onChange={handleChange}
                            />
                            <Button variant="secondary" onClick={() => visibilityHandler('isOldPasswordVisible')}>Show</Button>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="newPassword">
                            <Form.Label>New Password:</Form.Label>
                            <Form.Control
                                type={visibility.isNewPasswordVisible ? "text" : "password"}
                                name="newPassword"
                                value={obj.newPassword}
                                onChange={handleChange}
                            />
                            <Button variant="secondary" onClick={() => visibilityHandler('isNewPasswordVisible')}>Show</Button>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password:</Form.Label>
                            <Form.Control
                                type={visibility.isConfirmPasswordVisible ? "text" : "password"}
                                name="confirmPassword"
                                value={obj.confirmPassword}
                                onChange={handleChange}
                            />
                            <Button variant="secondary" onClick={() => visibilityHandler('isConfirmPasswordVisible')}>Show</Button>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Profile
