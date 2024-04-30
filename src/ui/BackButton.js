import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    //const history = useHistory();
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={()=>navigate(-1)}>Back</button>
    )
}