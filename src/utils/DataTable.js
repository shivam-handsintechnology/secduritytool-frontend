import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import UsePagination from "../hooks/UsePagination";

const UseCustomTable = (columns, data, isNoOfPagesFromAPi) => {
    const { pageComponent,
        setNumberOfPages,
        pageNumber,
        Pages,
        limit, setLimit, NewData } = UsePagination(data, isNoOfPagesFromAPi)
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
            <>No Records Found</>
        }


    };
    console.log("columns type", typeof columns, columns)
    return {
        table: <>
            <table className="table">
                <thead>
                    <tr className="text-table-format">
                        {columns.map((column) => (
                            <th key={column.name}>{column.name}</th>
                        ))}
                        {/* {handleRowAction && <th>Action</th>} */}
                    </tr>
                </thead>
                <tbody className="text-table-format">{renderRows(isNoOfPagesFromAPi ? data : NewData)}</tbody>
            </table>
            {pageComponent()}
        </>,
        limit, setLimit, pageNumber, NewData

    }

};

export default UseCustomTable;
