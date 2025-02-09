import { useContext, useEffect } from "react";
import s from "./LogIn.module.scss";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { checkLogIn, getAdmin } = useContext(Context);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAdmin();
  }, []);

  const onSubmit = (data) => {
    checkLogIn(data);
  };

  return (
    <>
      <section className={s.logIn}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

          <h2 className={s.title}>Nice to see you again</h2>

          <div className={s.container}>
            <h3 className={s.subtitle}>Login</h3>

            <label className={s.label}>
              <input
                {...register("username")}
                className={s.inp}
                type="text"
                placeholder="Username"
              />
            </label>

            <h3 className={s.subtitle}>Password</h3>

            <label className={s.label}>
              <input
                {...register("password")}
                className={s.inp}
                type="password"
                placeholder="Enter password"
              />

              <img className={s.img} src="/password.svg" alt="password" />
            </label>

            <button className={s.btn} type="submit">
              Sign in
            </button> 

          </div>
        </form>
      </section>
    </>
  );
};

export default LogIn;
