import s from "./FormUser.module.scss";

const FormUser = () => {
  return (
    <>
      <section className={s.formUser}>
        <form className={s.form}>
          <div className={s.container_1}>
            <img className={s.img} src="/admin.png" alt="admin" />
            <p className={s.text}>update your profile</p>
          </div>

          <div className={s.container_2}>
            <h2 className={s.title}>user profile information</h2>
            <hr className={s.line} />
          </div>

          <div className={s.container_3}>
            <div className={s.block}>
              <h3 className={s.subtitle}>Full Name</h3>

              <label className={s.label}>
                <input className={s.inp} type="text" placeholder="John Wick" />

                {/* <img className={s.img} src="" alt="" /> */}
              </label>
            </div>

            <div className={s.block}>
              <h3 className={s.subtitle}>User Name</h3>

              <label className={s.label}>
                <input className={s.inp} type="text" placeholder="John777" />

                {/* <img className={s.img} src="" alt="" /> */}
              </label>
            </div>
          </div>

          <div className={s.container_4}>
            <h3 className={s.subtitle}>Bio</h3>

            <textarea className={s.textarea} placeholder="Info"></textarea>

            <button className={s.btn} type="button">
              Update profile
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormUser;
