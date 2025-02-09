import { Link } from "react-router-dom";
// import Accessories from "../../components/Accessories/Accessories";
import s from "./Admin.module.scss";

const Add = () => {
  return (
    <>
      <section className={s.admin}>
        <Link className={s.link} to={"/AddHeadphones"}>
          Добавить
        </Link>

      </section>
    </>
  );
};

export default Add;
