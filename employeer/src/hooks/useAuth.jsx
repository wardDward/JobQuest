import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticatedEmployeer } from "../redux/actions/useActions.js";

export default function useAuth() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users, authFlag } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await dispatch(authenticatedEmployeer());
      if (response.meta.requestStatus === "fulfilled") {
        setLoadingComplete(true);
      }
    };
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (loadingComplete && users && users.email_verified_at === null) {
      navigate("/profile");
    }
  }, [loadingComplete, users, navigate]);

  return { users, authFlag };
}
