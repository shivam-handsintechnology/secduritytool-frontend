import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import UsePagination from "../hooks/UsePagination";

const UseCustomTable = (columns, data, TotalNoOfPages) => {
    const { pageComponent,
        setNumberOfPages,
        pageNumber,
        Pages,
        limit, setLimit, NewData } = UsePagination(data, TotalNoOfPages)
    const renderRows = (data) => {
        if (data && data.length > 0) {
            return data.map((rowData, index) => (
                <tr key={index}>
                    {columns.map((column) => {

                        return <td key={column.selector}>{column.cell ? column.cell(rowData) : rowData[column.selector]}</td>
                    })}
                </tr>
            ));
        } else {
            <></>
        }


    };
    console.log("columns type", typeof columns, columns)
    return {
        table: <>
            <table className="table">
                <thead>
                    {/* <tr className="text-table-format"> */}
                    {data && data.length > 0 ? (<tr >
                        {columns.map((column) => (
                            <th key={column.name}>{column.name}</th>
                        ))}
                        {/* {handleRowAction && <th>Action</th>} */}
                    </tr>) : <tr><td colSpan={columns.length}>No Data Found</td></tr>}

                </thead>
                <tbody >{renderRows(TotalNoOfPages ? data : NewData)}</tbody>
                {/* <tbody className="text-table-format">{renderRows(TotalNoOfPages ? data : NewData)}</tbody> */}
            </table>
            {pageComponent()}
        </>,
        limit, setLimit, pageNumber, NewData

    }

};

export default UseCustomTable;
