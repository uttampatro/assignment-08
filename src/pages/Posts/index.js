import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { auth, logout } from "../../firebase";

function Posts() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/");
  }, [user, loading]);

  return (
    <div>
      <Link to={"/"} onClick={() => logout()}>
        Logout
      </Link>
    </div>
  );
}

export default Posts;
