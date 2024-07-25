import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedEmployee } from "../redux/actions/userAction.js";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { users, authFlag } = useSelector(state => state.users)

    useEffect(() => {
        const fetchUser = async () => {
            const response = await dispatch(authenticatedEmployee())
            if (response.meta.requestStatus === "fulfilled") {
                setLoadingComplete(true);
            }
        }

        fetchUser()
    }, [dispatch])

    useEffect(() => {
        if (loadingComplete) {
            if (users && users.email_verified_at === null) {
                navigate('/email/verification')
            }
        }
    }, [loadingComplete, users, navigate])

    return { users, authFlag }
}
