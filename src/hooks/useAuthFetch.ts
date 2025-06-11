import { useAuthNavigate } from './useAuthNavigate';

export function useAuthFetch() {
    const { logoutAndRedirect } = useAuthNavigate();

    async function authFetch(input: RequestInfo, init?: RequestInit) {
        const token = localStorage.getItem('accessToken');
        const headers = {
            ...(init?.headers || {}),
            Authorization: token ? `Bearer ${token}` : '',
        };

        const response = await fetch(input, { ...init, headers });

        if (response.status === 401) {
            logoutAndRedirect();
            throw new Error('Unauthorized');
        }

        return response;
    }

    return { authFetch };
}
