import axios from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isBurger, setIsBurger] = useState(false);
  const switchBurger = () => setIsBurger((prev) => !prev);

  // ----------------------------------------------------------------------

  const [isPopUp, setIsPopUp] = useState(false);
  const switchPopUp = () => setIsPopUp((prev) => !prev);

  // ----------------------------------------------------------------------

  const navigate = useNavigate();

  // ----------------------------------------------------------------------

  const BlockOfServiceData = [
    {
      id: 1,
      title: "Условия сервиса",
      text: "Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?",
    },
    {
      id: 2,
      title: "Условия сервиса",
      text: "Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?",
    },
    {
      id: 3,
      title: "Условия сервиса",
      text: "Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?",
    },
  ];

  const productInfoData = [
    {
      id: 1,
      text: "Активное шумоподавление: Нет",
    },
    {
      id: 2,
      text: "Вес: 10 гр",
    },
    {
      id: 3,
      text: "Влагозащита: Нет",
    },
    {
      id: 4,
      text: "Длина кабеля: 1.2 м",
    },
    {
      id: 5,
      text: "Комплектация: Наушники",
    },
    {
      id: 6,
      text: "Материал корпуса: Пластик, резина",
    },
    {
      id: 7,
      text: "Микрофон: Да",
    },
    {
      id: 8,
      text: "Назначение: Проводные наушники",
    },
    {
      id: 9,
      text: "Ответить/закончить разговор: Да",
    },
    {
      id: 10,
      text: "Разъем наушников: Lightning",
    },
    {
      id: 11,
      text: "Регулятор громкости: Да",
    },
    {
      id: 12,
      text: "Тип крепления: Без крепления",
    },
    {
      id: 13,
      text: "Тип наушников: Вкладыши ('таблетки')",
    },
    {
      id: 14,
      text: "Тип подключения: Проводное",
    },
    {
      id: 15,
      text: "Частотный диапазон: 20 Гц - 20000 Гц",
    },
    {
      id: 16,
      text: "Чувствительность: 109 дБ",
    },
  ];

  // ----------------------------------------------------------------------

  const toastEmitter = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const notify = {
    success(message) {
      toast.success(message, toastEmitter);
    },

    warning(message) {
      toast.warning(message, toastEmitter);
    },

    error(message) {
      toast.error(message, toastEmitter);
    },
  };

  // ----------------------------------------------------------------------

  const sendTelegram = async (message) => {
    if (message.name === "" || message.number === "")
      return notify.warning("Введите все данные");

    const sendMessage = `Name: ${message.name}
Number: ${message.number}`;

    const token = "6629321266:AAGBx6mSrJ8wI0DxYPAxYE6MC3Ckk1iH9vc";
    const chatId = "-4098685554";
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(urlApi, {
        chat_id: chatId,
        text: sendMessage,
      });

      notify.success("Данные отправлены");
    } catch (error) {
      notify.error("Ошибка");
      console.log(error);
    }
  };

  // ----------------------------------------------------------------------

  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("admin"))
  );

  const checkLogIn = (data) => {
    if (data.login === "Admin" && data.password === "7777777") {
      notify.success("Данные введены верно");

      localStorage.setItem("admin", JSON.stringify(true));

      setTimeout(() => {
        setIsAdmin(JSON.parse(localStorage.getItem("admin")));
        navigate("/admin");
      }, 2500);
    } else {
      notify.error("Данные введены неверно");
      localStorage.clear();
    }
  };

  const logOut = () => {
    setIsAdmin(null);
    localStorage.clear();
    navigate("/logIn");
  };

  // ----------------------------------------------------------------------

  const location = useLocation();

  // ----------------------------------------------------------------------

  const urlServer = "http://localhost:3000";

  // ----------------------------------------------------------------------

  const [headphones, setHeadphones] = useState([]);

  const getHeadphones = async () => {
    try {
      const response = await axios.get(`${urlServer}/headphones`);

      setHeadphones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------------------

  const [headphonesById, setHeadphonesById] = useState([]);

  const getHeadphonesById = async (id) => {
    try {
      const response = await axios.get(`${urlServer}/headphones/${id}`);

      setHeadphonesById(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------------------

  const addHeadphones = async (data) => {
    const newData = {
      id: headphones.length + 1,
      src: "/headphones_1.png",
      title: data.title,
      price: data.price,
    };

    try {
      await axios.post(`${urlServer}/headphones`, {
        ...newData,
      });

      notify.success("Данные добавлены");
    } catch (error) {
      console.log(error);
      notify.error("Данные не добавлены");
    }
  };

  // ----------------------------------------------------------------------

  const putHeadphonesById = async (data, id) => {
    const userData = {
      src: data.src,
      title: data.title,
      price: data.price,
    };

    try {
      await axios.put(`${urlServer}/headphones/${id}`, {
        id: +id,
        ...userData,
      });

      notify.success("Данные изменены");
    } catch (error) {
      console.log(error);
      notify.error("Данные не изменены");
    }
  };

  // ----------------------------------------------------------------------

  const deleteHeadphonesById = async (id) => {
    try {
      await axios.delete(`${urlServer}/headphones/${id}`);

      notify.success("Данные удалены");
      getHeadphones();
    } catch (error) {
      console.log(error);
      notify.error("Данные не удалены");
    }
  };

  return (
    <MyContext.Provider
      value={{
        location,
        addHeadphones,
        putHeadphonesById,
        deleteHeadphonesById,
        navigate,
        sendTelegram,
        isPopUp,
        switchPopUp,
        headphonesById,
        getHeadphonesById,
        isBurger,
        switchBurger,
        headphones,
        getHeadphones,
        BlockOfServiceData,
        productInfoData,
        isAdmin,
        checkLogIn,
        logOut,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
