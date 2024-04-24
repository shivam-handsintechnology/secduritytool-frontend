import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const XSSpossible = () => {

  const CrossSiteScriptingXSS = useDataFetch(`CrossSiteScripting`, [], [])
  console.log("CrossSiteScriptingXSS", CrossSiteScriptingXSS)
  return (
    <div>
      {
        CrossSiteScriptingXSS.errors.loading ? <LoadingSpinner /> :
          CrossSiteScriptingXSS.errors.error ? <span className='error'>{CrossSiteScriptingXSS.errors.error}</span> :
            <table  className='table table-striped'>
           <tr >
                <th >hostname</th>
                <th >FIle</th>
                <th >line Number</th>
                <th >Content</th>
                <th >Vulnurability Name</th>
              </tr>
           
            {
               CrossSiteScriptingXSS.data && CrossSiteScriptingXSS.data.length > 0 && CrossSiteScriptingXSS.data.map((item, index) => {
                return (
                  <tr key={index}>
                <td >{item.hostname}</td>
                <td >{item.file}</td>
                <td >{item.lineNumber}</td>
                <td >{item.lineContent}</td>
                <td >{item.name}</td>
              </tr>
                )
              })
            }
            </table>


      }
    </div>
  )
}

export default XSSpossible