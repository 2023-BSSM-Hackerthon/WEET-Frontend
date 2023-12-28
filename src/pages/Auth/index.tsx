import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../api";

const Auth = () => {
  const code = window.location.search.replace("?code=", "");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (code) {
        try {
          const { data } = await instance.post("/auth/student", null, {
            params: { code },
          });
          console.log(data);
          if (data) {
            localStorage.setItem("accessToken", data.token);
          }
        } catch (e) {
          console.log(e);
        }
        navigate("/");
      }
    })();
  }, []);

  return <div></div>;
};

export default Auth;
