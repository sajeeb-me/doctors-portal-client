import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageLoading from '../../PageLoading/PageLoading';

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            console.log(user);
            navigate(from, { replace: true })
        }
    }, [user, navigate, from])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        console.log(error.message);
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full'>Continue with Google</button>
        </div>
    );
};

export default SocialMediaLogin;