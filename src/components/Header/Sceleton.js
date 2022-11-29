import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
<ContentLoader 
    speed={4}
    width={1000}
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="142" y="59" rx="0" ry="0" width="1" height="0" /> 
    <rect x="26" y="5" rx="7" ry="7" width="405" height="41" /> 
    <rect x="26" y="53" rx="4" ry="4" width="577" height="62" /> 
    <rect x="240" y="85" rx="0" ry="0" width="4" height="0" /> 
    <rect x="232" y="85" rx="0" ry="0" width="4" height="0" /> 
    <rect x="26" y="126" rx="6" ry="6" width="151" height="32" /> 
    <rect x="90" y="126" rx="0" ry="0" width="10" height="0" />
  </ContentLoader>
)

export default Sceleton