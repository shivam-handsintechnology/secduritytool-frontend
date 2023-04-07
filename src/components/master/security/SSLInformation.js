import React, { useEffect } from 'react'
import useFetchApi from '../../../customhooks/useFetchApi'
import LoadingSpinner from '../../../loader'
import { GetSysteminfo } from '../../../Services/AxiosRoutes'
import Header from '../Header'
import Menu from '../Menu'
import axios from 'axios'

const SSLInformation = () => {
    const [data, loading] = useFetchApi(GetSysteminfo)
    
    useEffect(()=>{
      (()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.linkedin.com/voyager/api/voyagerRelationshipsDashDiscovery?decorationId=com.linkedin.voyager.dash.deco.relationships.DiscoveryEntityCollection-27&count=2&paginationToken=7049320739342028800&q=cohort&reasons=List((sourceType:COMPANY_COHORT,reasonContext:RELEVANT_TO_VIEWER_SEGMENT,reasonObjects:List(urn:li:country:in)))&start=8',
            headers: { 
              'fetch("https': '//www.linkedin.com/voyager/api/voyagerLegoDashPageContents?decorationId=com.linkedin.voyager.dash.deco.segments.PageContent-1&pageKey=messaging_realtime&q=pageKeyAndSlotId&slotId=onboarding", {', 
              '"headers"': ' {', 
              '"accept"': ' "application/vnd.linkedin.normalized+json+2.1",', 
              '"accept-language"': ' "en-US,en;q=0.9",', 
              '"csrf-token"': ' "ajax:7660388682155947627",', 
              '"sec-ch-ua"': ' "\\"Google Chrome\\";v=\\"111\\", \\"Not(A:Brand\\";v=\\"8\\", \\"Chromium\\";v=\\"111\\"",', 
              '"sec-ch-ua-mobile"': ' "?0",', 
              '"sec-ch-ua-platform"': ' "\\"Windows\\"",', 
              '"sec-fetch-dest"': ' "empty",', 
              '"sec-fetch-mode"': ' "cors",', 
              '"sec-fetch-site"': ' "same-origin",', 
              '"x-li-deco-include-micro-schema"': ' "true",', 
              '"x-li-lang"': ' "en_US",', 
              '"x-li-page-instance"': ' "urn:li:page:d_flagship3_feed;3EJCoMQITzeYkWpK49oV0g==",', 
              '"x-li-track"': ' "{\\"clientVersion\\":\\"1.12.2425\\",\\"mpVersion\\":\\"1.12.2425\\",\\"osName\\":\\"web\\",\\"timezoneOffset\\":5.5,\\"timezone\\":\\"Asia/Calcutta\\",\\"deviceFormFactor\\":\\"DESKTOP\\",\\"mpName\\":\\"voyager-web\\",\\"displayDensity\\":1,\\"displayWidth\\":1366,\\"displayHeight\\":768}",', 
              '"x-restli-protocol-version"': ' "2.0.0"', 
              '},': '', 
              '"referrer"': ' "https://www.linkedin.com/feed/",', 
              '"referrerPolicy"': ' "strict-origin-when-cross-origin",', 
              '"body"': ' null,', 
              '"method"': ' "GET",', 
              '"mode"': ' "cors",', 
              '"credentials"': ' "include"', 
              '});': '', 
              'Cookie': 'bcookie="v=2&39b43dd7-172f-4ea3-8fbc-2211a410b163"; lidc="b=TGST01:s=T:r=T:a=T:p=T:g=3038:u=1:x=1:i=1680689167:t=1680775567:v=2:sig=AQF8MV8gI39c53x5nNDpQCsftNc6fNuC"; bscookie="v=1&20230405100607f160b204-ae0f-4d53-898f-ec88d2d3fd67AQFZiVQGpPHKe9NCaYxsoUNXS7zLo15U"'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      })()
    },[])
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
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3 />
                                            <p>  {data.SecureCookies}</p>
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
