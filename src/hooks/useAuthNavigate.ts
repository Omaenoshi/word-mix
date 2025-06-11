import { useNavigate } from 'react-router-dom';

export function useAuthNavigate() {
    const navigate = useNavigate();

    function logoutAndRedirect() {
        localStorage.removeItem('accessToken');
        navigate('/login', { replace: true });
    }

    return { logoutAndRedirect };
}
