import React from 'react';
import { Link } from "@reach/router";
import {checkUri, changeUri} from '../utils/utils' 
const ErrorPage = (props) => {
  const {uri} =props
  return (
    <div>
      <h4>Something's not quite right</h4>
<div  className="instruction_selection">
       <Link className="Links" to={`/${checkUri(uri)}`}>Back to {changeUri(checkUri(uri))} page</Link>
     <Link  className="Links" to="/">Go Home</Link>
    </div>
    </div>
  );
};

export default   ErrorPage;