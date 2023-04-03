import React from 'react'
import useFetchApi from '../../../customhooks/useFetchApi'
import LoadingSpinner from '../../../loader'
import { GetSysteminfo } from '../../../Services/AxiosRoutes'
import Header from '../Header'
import Menu from '../Menu'

const SSLInformation = () => {
    const [data, loading] = useFetchApi(GetSysteminfo)
    // alert(JSON.stringify(data))
    //    alert(getdata)
    // console.log(getdata.valid)
    return (
        <div>
            <Header />
            <Menu />

            <div className="content-wrapper">
                {/*CONTENT CONTAINER*/}
                {/*===================================================*/}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 ">
                                    <i class="fa-brands fa-expeditedssl" /> SSL
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="dashboard.php">
                                            <i className="fas fa-home" /> Admin Panel
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active"> SSl</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Page content*/}
                {/*===================================================*/}
                <div className="content">

                    {
                        loading ? <LoadingSpinner /> : <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p>{data.valid}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p>{data.CA}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-primary">
                                        <div className="inner">
                                            <h3 />
                                            <p>{data.protocol}</p>
                                            {/* <p>No SSL cookie found.</p> */}
                                        </div>      
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3 />
                                            <p>  {data.validTo}</p>
                                        </div>          
                                    </div>      
                                </div>
                            </div>
                        </div>
                    }

                </div>
                {/*===================================================*/}
                {/*End page content*/}
            </div>
        </div>
    )
}

export default SSLInformation
