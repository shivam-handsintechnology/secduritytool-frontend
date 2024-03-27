import React, { Component } from "react";
import Headers from "../../../components/Layout/Header";
import Menu from "../../../components/Layout/Menu";
import Footer from "../../../components/Layout/Footer";
import { Chart } from "react-google-charts";
import DataTable from 'react-data-table-component';
import data5 from './data.json';
const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Phone',
        selector: 'phone',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'DOB',
        selector: 'dob',
    },
];
export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];

export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
};

export const data1 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

export const options1 = {
    title: "My Daily Activities",
};

export const data2 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
];

export const options2 = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
};

export const data3 = [
    ["Pizza", "Popularity"],
    ["Pepperoni", 33],
    ["Hawaiian", 26],
    ["Mushroom", 22],
    ["Sausage", 10], // Below limit.
    ["Anchovies", 9], // Below limit.
];

export const options3 = {
    title: "Popularity of Types of Pizza",
    sliceVisibilityThreshold: 0.2, // 20%
};


export default class Visitanalytics extends Component {

    render() {
        return (
            <div>
                {/* <Headers />
                <Menu /> */}
                <div>
                    {/*CONTENT CONTAINER*/}
                    {/*===================================================*/}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 ">
                                        <i className="fas fa-chart-line" /> Visit Analytics
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Visit Analytics</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Page content*/}
                    {/*===================================================*/}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">Visit Analytics</h3>
                                            <div className="float-sm-right">
                                                <a
                                                    href="#"
                                                    className="btn btn-flat btn-danger btn-sm"
                                                >
                                                    <i className="fas fa-trash" /> Delete Data
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">Today's Stats</h4>
                                            <br />
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="small-box bg-success">
                                                        <div className="inner">
                                                            <h3>0</h3>
                                                            <p>Online Visitors</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fas fa-users" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="small-box bg-info">
                                                        <div className="inner">
                                                            <h3>2</h3>
                                                            <p>Unique Visits</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fas fa-chart-line" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="small-box bg-danger">
                                                        <div className="inner">
                                                            <h3>2</h3>
                                                            <p>Total Visits</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fas fa-chart-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="small-box bg-warning">
                                                        <div className="inner">
                                                            <h3>0</h3>
                                                            <p>Bot Visits</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fab fa-android" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <h4 className="card-title">This Month's Stats</h4>
                                            <br />
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-4">
                                                    <div className="small-box bg-info">
                                                        <div className="inner">
                                                            <h3>61</h3>
                                                            <p>Unique Visits</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fas fa-chart-line" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-4">
                                                    <div className="small-box bg-danger">
                                                        <div className="inner">
                                                            <h3>112</h3>
                                                            <p>Total Visits</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fas fa-chart-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-4">
                                                    <div className="small-box bg-warning">
                                                        <div className="inner">
                                                            <h3>2</h3>
                                                            <p>Bot Visits</p>
                                                        </div>
                                                        <div className="icon">
                                                            <i className="fab fa-android" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <h4 className="card-title">Visits This Month</h4>
                                            <br />
                                            <Chart
                                                chartType="LineChart"
                                                width="100%"
                                                height="320px"
                                                data={data}
                                                options={options}
                                            />
                                            <br />
                                            <h4 className="card-title">Overall Statistics</h4>
                                            <br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <center>
                                                        <h5>
                                                            <i className="fas fa-globe" /> Browser Statistics
                                                        </h5>
                                                    </center>
                                                    <div id="canvas-holder" className="width100">
                                                        <Chart
                                                            chartType="PieChart"
                                                            data={data1}
                                                            options={options1}
                                                            width={"100%"}
                                                            height={"320px"}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <center>
                                                        <h5>
                                                            <i className="fas fa-desktop" /> Operating System
                                                            Statistics
                                                        </h5>
                                                    </center>
                                                    <div id="canvas-holder" className="width100">
                                                        <Chart
                                                            chartType="PieChart"
                                                            width="100%"
                                                            height="320px"
                                                            data={data2}
                                                            options={options2}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <br />
                                                    <center>
                                                        <h5>
                                                            <i className="fas fa-mobile-alt" /> Device Statistics
                                                        </h5>
                                                    </center>
                                                    <div id="canvas-holder" className="width100">
                                                        <Chart
                                                            chartType="PieChart"
                                                            data={data3}
                                                            options={options3}
                                                            width={"100%"}
                                                            height={"400px"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                                <h5>Visits by Country</h5>
                                                <br />
                                                <DataTable
                                                    columns={columns}
                                                    data={data5}
                                                    pagination
                                                    highlightOnHover
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===================================================*/}
                        {/*End page content*/}
                    </div>
                    {/*===================================================*/}
                    {/*END CONTENT CONTAINER*/}
                </div>


            </div>
        );
    }
}
