import { useContext } from "react";
import s from "./Register.module.scss"; // Using the same styles as Login
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(Context); // Assuming you have a registerUser function in your context
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data); // Call the registration function from your context
      navigate("/login"); // Redirect to the login page after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration errors here, e.g., display an error message to the user.
    } 
  };

  return (
    <>
      <section className={s.logIn}> {/* Using the same Login styles */}
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          {/* <img className={s.logo} src="/logo.svg" alt="logo" /> */}

          <h2 className={s.title}>Create an Account</h2>

          <div className={s.container}>
            <h3 className={s.subtitle}>Username</h3>

            <label className={s.label}>
              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long",
                  },
                })}
                className={s.inp}
                type="text"
                placeholder="Username"
              />
              {errors.username && (
                <span className={s.error}>{errors.username.message}</span>
              )}
            </label>


            <h3 className={s.subtitle}>Password</h3>

            <label className={s.label}>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className={s.inp}
                type="password"
                placeholder="Enter password"
              />
              {errors.password && (
                <span className={s.error}>{errors.password.message}</span>
              )}

              <img className={s.img} src="/password.svg" alt="password" />
            </label>

            <button className={s.btn} type="submit">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;