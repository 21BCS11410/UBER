import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userDataContext';


const UserProtectedWrapper = ({children}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const {user, setUser} = useContext(UserDataContext);

    useEffect(() => {
        if(!token){
            navigate('/login');
            return;
        }

        // Check if the token belongs to a user
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            if(response.status === 200){
                const data = response.data;
                setUser(data.user);
                setLoading(false);
            }
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
            setLoading(false);
            localStorage.removeItem('token');
            navigate('/login');
        });
    }, [token, navigate, setUser]);

    if(loading) {
        return <div>Loading...</div>;
    }
    
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper