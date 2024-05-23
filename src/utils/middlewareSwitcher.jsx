import React from 'react'
import useDataFetch, { usePostData } from '../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MiddlewareSwitcher = () => {
    const { type } = useParams()
    const { domain } = useSelector((state) => state.UserReducer)
    const { handleSubmit, Data } = usePostData()
    console.log(">>>>>>>>>>>>", Data)
    const getAllMiddlewares = useDataFetch(`security/middlwares?domain=${domain}&type=${type}`, [domain, type, Data], { middleware: false })

    return (
        <div>
            {
                getAllMiddlewares.errors.error ? <div className="alert alert-danger" role="alert">
                    {getAllMiddlewares.errors.message}
                </div> : <div class="box-4">
                    <input type="checkbox" name="SqlDetectorMiddlware" id="sqlCheckbox" checked={getAllMiddlewares.data.middleware} onChange={(e) => {
                        handleSubmit(e, `security/middlwares`, { value: e.target.checked, type, domain: domain })
                    }
                    } />

                    <span class="toogle"></span>
                </div>
            }
        </div>
    )
}

export default MiddlewareSwitcher
