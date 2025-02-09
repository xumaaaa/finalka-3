import { useContext, useEffect } from "react";
import s from "./Admin.module.scss";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

const Admin1 = () => {
  const {
    ourCollectionData,
    getOurCollectionData,
    deleteOurCollectionData,
    isAdmin,
  } = useContext(Context);

  useEffect(() => {
    getOurCollectionData();
  }, [ourCollectionData]);

  return (
    <>
      <section className={s.admin}>
        <Link className={s.link} to={"/admin/create"}>
          Create
        </Link>

        <div className={s.container}>
          {!!ourCollectionData &&
            ourCollectionData.map((el) => (
              <div key={el.id} className={s.block}>
                <img className={s.img} src={el.src} alt={el.alt} />

                {!!isAdmin && (
                  <div className={s.box}>
                    <button
                      className={s.btn}
                      type="button"
                      onClick={() => deleteOurCollectionData(el.id)}
                    >
                      Delete
                    </button>
                    <Link className={s.btn} to={`/admin/change/${el.id}`}>
                      Change
                    </Link>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Admin1;
