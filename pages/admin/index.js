import { data } from 'autoprefixer';
import LoginPage from 'components/templates/LoginPage';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { VerifyToken } from 'utils/passwordOperations';

function Index(props) {
    const router = useRouter();
    
    // useEffect(() => {
    //     fetch('/api/verify').then(res => res.json()).then(data => {
    //         if(data.status == 'success'){
    //             router.push('/dashboard');
    //         }
    //     })
    // },[])
    return (
        <div>
            <LoginPage />
        </div>
    );
}

export default Index;

export async function getServerSideProps(context){
    const {token} = context.req.cookies;
    const SECRET_KEY = 'e73f1ece5087b8a5ae33998952202202';
    const verifyToken = VerifyToken(token , SECRET_KEY);
    if(!verifyToken){
        return {
            props:{}
        }
    }
    return {
        props:{verifyToken},
        redirect : {
            destination: '/dashboard'
        }
    }
}