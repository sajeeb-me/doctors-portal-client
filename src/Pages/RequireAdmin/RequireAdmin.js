import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import PageLoading from '../PageLoading/PageLoading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <PageLoading />
    }

    if (!user || !admin) {
        localStorage.removeItem('accessToken')
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default RequireAdmin;