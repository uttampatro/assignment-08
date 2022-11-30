import { Button } from "@mui/material";
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
            <div className="homeBodyContent">
              <div>
                <h5>{post?.title}</h5>
                <p style={{ fontSize: "10px", paddingTop: "10px" }}>
                  {post?.body}
                </p>
              </div>
              <div className="homeButton">
                <Button
                  style={{
                    width: "20px",
                    height: "25px",
                    fontSize: "10px",
                    paddingTop: "9px",
                  }}
                  variant="contained"
                  type="primary"
                >
                  Update
                </Button>
                <Button
                  style={{
                    width: "20px",
                    height: "25px",
                    fontSize: "10px",
                    paddingTop: "9px",
                  }}
                  variant="contained"
                  color="error"
                  type="secondary"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
