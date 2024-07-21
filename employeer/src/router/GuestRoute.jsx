import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


export default function GuestRoute() {
    const { authFlag } = useSelector(state => state.users)

    return !authFlag ? <Outlet /> : <Navigate to={'/'} />
}
