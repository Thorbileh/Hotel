
    import React, { useRef, useState } from 'react';
    import './logout.css'
   
    import { logout, useAuth } from '../firebase/index';
   
    
    function LogOut() {
        //use ref to get direct change
        const emailRef = useRef();
        const passwordRef = useRef();
    
        //to get the current user logged into your website
        const currentUser = useAuth();
    
        //for the program not to take time when it loads information to firebase
        const [loading, setLoading] = useState(false);
    
        async function handleLogout() {
            setLoading(true);
            try {
                logout()
            } catch {
                alert("Couldn't logout");
            }
            setLoading(false);
        }
    
    
        return (
    
            <body className='LogOut'>
            
    
                    {currentUser && <>
                        <button disabled={loading || !currentUser} onClick={handleLogout}>Log out</button>
                    </>}
    
                
                 
            </body>
    
        )
    }
    
    export default LogOut;
    
   