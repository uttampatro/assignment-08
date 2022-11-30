import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { auth, logout } from "../../firebase";
import { getAllPosts } from "../../services/PostServices";
import "./style.css";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/");
  }, [user, loading]);

  const fetchAllPosts = async () => {
    try {
      const res = await getAllPosts();
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };
  const arr = ["one", "two", "three"];
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div>
      <Link to={"/"} onClick={() => logout()}>
        Logout
      </Link>
      <div className="homeBody">
        {posts.map((post) => {
          return (
            <div  className="homeBodyContent">
              <h6>{post?.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
