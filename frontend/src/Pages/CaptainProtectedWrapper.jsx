import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../context/captainDataContext';

const CaptainProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!token){
            navigate('/captain-login');
            return;
        }

        // Check if the token belongs to a captain
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            if(response.status === 200){
                const data = response.data;
                setCaptain(data.captain);
                setLoading(false);
            }
        })
        .catch((error) => {
            console.error("Error fetching captain data:", error);
            setLoading(false);
            localStorage.removeItem('token');
            navigate('/captain-login');
        });
    }, [token, navigate, setCaptain]);

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {children}
        </div>
    );
}

export default CaptainProtectedWrapper