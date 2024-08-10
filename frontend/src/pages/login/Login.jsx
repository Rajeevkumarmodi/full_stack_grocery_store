import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

function Login({ setShowHeaderFooter }) {
  const navigater = useNavigate();

  useEffect(() => {
    setShowHeaderFooter(false);
  }, []);

  return (
    <div className="h-screen  w-full overflow-x-hidden">
      <div className="relative">
        {/* background svg */}
        <svg
          width="100%"
          height="80%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#F78DA7"></stop>
              <stop offset="95%" stop-color="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,262 C 86.01913875598083,255.46411483253587 172.03827751196167,248.92822966507174 271,283 C 369.96172248803833,317.07177033492826 481.8660287081341,391.7511961722488 583,359 C 684.1339712918659,326.2488038277512 774.4976076555024,186.06698564593302 873,174 C 971.5023923444976,161.93301435406698 1078.1435406698565,277.98086124401914 1174,314 C 1269.8564593301435,350.01913875598086 1354.9282296650717,306.00956937799043 1440,262 L 1440,700 L 0,700 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 350)"
          ></path>
        </svg>

        {/* form */}

        <form className="absolute md:top-1/2 top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2  min-w-[350px]  bg-white rounded-md shadow-md px-10 py-5">
          <div className="flex flex-col gap-2">
            <img
              className="w-[100px] mx-auto"
              src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png"
              alt=""
            />
            <h3 className="font-semibold text-xl mb-1">Login</h3>
            <TextField id="standard-basic" label="Email*" variant="standard" />
            <TextField
              id="standard-basic"
              label="Password*"
              variant="standard"
            />
            <Link className="text-blue-500 mt-4">Forgot Password?</Link>

            <div className="flex gap-4">
              <Button
                style={{
                  background: "blue",
                  color: "white",
                  marginTop: "20px",
                  width: "170px",
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigater("/")}
                style={{
                  background: "white",
                  color: "blue",
                  marginTop: "20px",
                  border: "1px solid blue",
                }}
              >
                Cancel
              </Button>
            </div>
            <p className="my-2">
              I dont't have an account{" "}
              <Link to="/signup" className="text-blue-500 font font-semibold">
                Sign Up
              </Link>
            </p>

            <p className="mx-auto">Or continue with social account</p>

            <div className="text-center mt-5">
              <Button
                style={{ background: "blue", width: "100%", color: "white" }}
              >
                <BsGoogle className="mr-3" />
                <span>Login with Google</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
