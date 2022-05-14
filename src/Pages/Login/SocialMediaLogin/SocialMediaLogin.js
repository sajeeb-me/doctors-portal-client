import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import PageLoading from '../../PageLoading/PageLoading';

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            // console.log(user);
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        // console.log(error.code);
        switch (error?.code) {
            case "auth/popup-closed-by-user":
                toast.error("You closed the popup without login", {
                    toastId: 1
                });
                break;
            default:
                toast.error("Something went wrong", {
                    toastId: 1
                })
        }
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full'>Continue with Google</button>
        </div>
    );
};

export default SocialMediaLogin;