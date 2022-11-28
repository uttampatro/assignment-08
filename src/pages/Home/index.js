import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { auth, logout } from "../../firebase";
import { Avatar, Typography, Grid } from "@mui/material";
import "./style.css";

function Home() {
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
      <div>
        <Grid
          container
          spacing={5}
          columns={15}
          style={{
            paddingLeft: "50px",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            xs={9.5}
            style={{
              padding: "20px",
            }}
          >
            {/* {articles.map((article) => {
              return ( */}
            <div>
              <Link
                // to={`/viewPost/${article?._id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <img
                  style={{
                    paddingTop: "20px",
                    width: "100%",
                    height: "250px",
                  }}
                  // src={article?.imageUrl}
                />
                <div
                  style={{
                    display: "flex",
                    paddingTop: "15px",
                  }}
                >
                  <p
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      fontSize: "small",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {/* {article?.createdBy?.email}{" "} */}
                    <span
                      style={{
                        fontWeight: "lighter",
                        fontStyle: "italic",
                      }}
                    ></span>
                  </p>
                </div>
                <Typography
                  style={{
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                >
                  {/* {article?.title} */}
                </Typography>

                <Typography
                  style={{
                    paddingRight: "0%",
                    paddingTop: "10px",
                    textAlign: "justify",
                    cursor: "pointer",
                  }}
                >
                  {/* {article?.description.split("").slice(0, 300)} */}
                </Typography>
              </Link>
            </div>
            {/* );
            })} */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
