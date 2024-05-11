import React from "react";
import { useState } from "react";
import { usePostData, useDataFetch, useDeleteData } from "../../hooks/DataFetchHook";
import { PaginationComponent } from "../../hooks/PaginationComponent";
import LoadingSpinner from "../../components/LoaderAndError/loader";

const NonHtmlContentAccess = () => {
  return (
    <div>
        Non Html Content Access
   </div>
  )
}

export default NonHtmlContentAccess