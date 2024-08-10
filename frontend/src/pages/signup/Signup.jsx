import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { contextProvider } from "../../context/Context";
import bg_wave from "../../assets/svg-wave.png";

function Signup() {
  const navigater = useNavigate();
  const { setShowHeaderFooter } = contextProvider();

  useEffect(() => {
    setShowHeaderFooter(false);
  }, []);

  return (
    <div
      className="h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat flex md:items-center items-start justify-center"
      style={{ backgroundImage: `url(${bg_wave})` }}
    >
      {/* form */}

      <form className="  max-w-[350px]  bg-white rounded-md shadow-md md:px-10 px-5 py-5">
        <div className="flex flex-col gap-2">
          <img
            className="w-[100px] mx-auto"
            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png"
            alt=""
          />
          <h3 className="font-semibold text-xl mb-1">Signup</h3>
          <div className="flex md:flex-row flex-col gap-5">
            <TextField id="standard-basic" label="Name*" variant="standard" />
            <TextField id="standard-basic" label="Phone*" variant="standard" />
          </div>
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
              Signup
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
            I have an account{" "}
            <Link to="/login" className="text-blue-500 font font-semibold">
              Login
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

export default Signup;
