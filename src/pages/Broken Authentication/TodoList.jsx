import React, { useState } from 'react'
import { socket, useSocketIoData } from "../../hooks/useSocket.io.data";
import { useSelector } from "react-redux";
function AddProtectedPage() {
    const { webdomain } = useSelector((state) => state.UserReducer)
    const data = useSocketIoData("non-html-content-accessibility")
    const [rowsData, setRowsData] = useState([])

    const addTableRows = () => {
        const rowsInput =
        {
            name: '',
        }
        setRowsData([...rowsData, rowsInput])
    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData]
        rows.splice(index, 1)
        setRowsData(rows)
    }
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target
        if (value.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'This is required',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '', // Clear the error message if the value is not empty
            }));
        }
        const rowsInput = [...rowsData]
        rowsInput[index][name] = value
        setRowsData(rowsInput)
    }

    return (
        <>
            <div className="container">
                <div className="row" >
                    <div className="col-md-12" >
                        <div className="card" >
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="card-title">Add Travel Plan Type </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body addmotorplans" style={{ overflowX: 'scroll' }}>
                                <table className="table table-bordered" style={{ width: "auto" }}>
                                    <thead>
                                        <tr>
                                            <th><button className="btn btn-outline-success" onClick={addTableRows}>+</button></th>
                                            <th>Travel Plan Type </th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            rowsData.map((data, index) => {
                                                return (
                                                    <tr key={index} >
                                                        <td>
                                                            <button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button>
                                                        </td>
                                                        <td>
                                                            <input type="text" onChange={(evnt) => (handleChange(index, evnt))} className="form-control" name="name" placeholder="Protected Page" autoComplete="off" required />
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-outline-success" onClick={() => socket && socket.emit("add-protected-pages", ProtectedpageList)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProtectedPage