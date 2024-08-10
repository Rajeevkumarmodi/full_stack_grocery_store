import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import bg_wave from "../../assets/svg-wave.png";
import { contextProvider } from "../../context/Context";

function Login() {
  const navigater = useNavigate();
  const { setShowHeaderFooter } = contextProvider();

  useEffect(() => {
    setShowHeaderFooter(false);
  }, []);

  return (
    <div
      className=" h-screen  w-full bg-center bg-no-repeat bg-cover overflow-x-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg_wave})`,
      }}
    >
      {/* form */}

      <form className="min-w-[350px]  bg-white rounded-md shadow-md px-10 py-5">
        <div className="flex flex-col gap-2">
          <img
            className="w-[100px] mx-auto"
            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png"
            alt=""
          />
          <h3 className="font-semibold text-xl mb-1">Login</h3>
          <TextField id="standard-basic" label="Email*" variant="standard" />
          <TextField id="standard-basic" label="Password*" variant="standard" />
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
  );
}

export default Login;
