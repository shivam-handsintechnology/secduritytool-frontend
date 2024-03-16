import React, { useEffect, useState } from 'react';
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseCustomTable from '../../../utils/DataTable';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../../redux/reducers/UserReducer';
import { useNavigate } from 'react-router-dom';
const AddWebsite = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [NoOfPagesFromApi, setNumberOfPagesFromAPi] = useState(null);
    const [isApiCall, setisAPiCall] = useState(null);
    const [domain, setDomain] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        // Additional logic after closing the modal
    };
    const handleOpenModal = () => {
        setShowModal(true);
        // Additional logic after closing the modal
    };
    const handleNaviagate = (rowData) => {
        dispatch(setUserDetails(rowData))
        navigate("/")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (domain === '') {
            toast.error('Please enter a domain');
        } else {
            try {
                const response = await axios.post(
                    `security/domain`,
                    { domain },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                const { data, message, statusCode } = response;
                if (statusCode === 200) {
                    setisAPiCall(response);
                    toast.success(message);
                    setShowModal(true); // Show modal on success
                } else if (statusCode >= 400) {
                    toast.error(message);
                }
            } catch (error) {
                toast.error(error?.response?.data?.message);
                console.error(error.response);
            }
        }
    };
    function deleteDomain(body) {
        console.log(body)
        axios
            .delete(`security/domain?domain=${body.domain}`)
            .then((response) => {
                const { message, statusCode } = response;
                if (statusCode === 200) {
                    setisAPiCall(response)
                    toast.success(message);
                }
            })
            .catch((error) => {
                const { message } = error;
                toast.error(message);
            });
    }
    let columns = [
        { name: "Domain", selector: "domain", sortable: true },
        {
            name: "Action",
            cell: (rowData) => (
                <>

                    <Button
                        style={{ background: "   #184370" }}
                        variant="primary acasd"
                        onClick={() => handleNaviagate(rowData)}
                    >
                        Select
                    </Button>
                    {/* <Button
                        variant="danger acasd"
                        onClick={() => deleteDomain(rowData)}
                    >
                        Delete
                    </Button> */}
                </>
            ),
            width: "28%",
        },
    ];
    const { table, pageNumber, limit, setLimit } = UseCustomTable(columns, data, NoOfPagesFromApi)
    const getAllDomains = async () => {
        await axios
            .get(`security/domain?limit=${limit}&page=${pageNumber}`)
            .then((response) => {
                const { data } = response;

                if (!data) {
                    setNumberOfPagesFromAPi(null)
                    // toast.error('No data found')
                } else {
                    setData(data.data);
                    setNumberOfPagesFromAPi(data.totalPages)
                }

            })
            .catch((error) => {
                console.log(error);
                setNumberOfPagesFromAPi(null)
            });
    };

    useEffect(() => {
        getAllDomains();
    }, [isApiCall, pageNumber])
    return (
        <div className="content-wrapper" style={{ height: "100%", minHeight: "0" }}>
            <button onClick={handleOpenModal} className='botton-add-website '>Add Website</button>
            {table}
            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row >
                        <Col className='top-hover-add'>
                            <header className="mt-4">
                                <h4 className='title-add-website'>Add your website or application to Security Tool</h4>
                                <p>
                                    Optimize and monitor security, performance, and reliability for your
                                    visitors.
                                </p>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <h4 className='title-add-website'>Enter your domain</h4>
                                    <p>
                                        This will be the name of the space where you apply Security Tool
                                        configurations and monitor impact on your website or application.
                                    </p>
                                    <Form.Label>Enter domain name </Form.Label>
                                    <Form.Control
                                        name="zoneName"
                                        type="text"
                                        value={domain}
                                        placeholder='example.com'
                                        onChange={(e) => setDomain(e.target.value)}
                                    // className="w-25"
                                    />
                                </Form.Group>
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    data-testid="control-button"
                                    className="btn btn-primary mt-3 button-sign"
                                >
                                    Continue
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='button-sign' onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddWebsite