import { data } from 'autoprefixer';
import LoginPage from 'components/templates/LoginPage';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Index(props) {
    const router = useRouter();
    useEffect(() => {
        fetch('/api/verify').then(res => res.json()).then(data => {
            if(data.status == 'success'){
                router.push('/dashboard');
            }
        })
    },[])
    return (
        <div>
            <LoginPage />
        </div>
    );
}

export default Index;