import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [burger, setBurger] = useState(false);

    const switchBurger = () => {
        setBurger((prev) => !prev);
    };

    // ------------------------------------------------------

    const urlServer = 'http://localhost:3000/';

    const [walletData, setWalletData] = useState([]);

    const getWalletData = async () => {
        try {
            const response = await axios.get(`${urlServer}walletCard`);

            setWalletData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const [stepData, setStepData] = useState([]);

    const getStepData = async () => {
        try {
            const response = await axios.get(`${urlServer}step`);

            setStepData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------


    // Collection data

    const [ourCollectionData, setOurCollectionData] = useState([]);

    const getOurCollectionData = async () => {
        try {
            const response = await axios.get(`${urlServer}ourCollection`);

            setOurCollectionData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const addOurCollectionData = async (data) => {
        const userData = {
            src: data.src,
            alt: 'broken',
        };

        try {
            await axios.post(`${urlServer}ourCollection`, {
                ...userData,
            });

            notify.success('Data create correctly');
        } catch (error) {
            console.log(error);
            notify.error('Data create incorrectly');
        }
    };

    // ------------------------------------------------------

    const deleteOurCollectionData = async (id) => {
        try {
            axios.delete(`${urlServer}ourCollection/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const [ourCollectionDataById, setOurCollectionDataById] = useState(null);

    const getOurCollectionDataById = async (id) => {
        try {
            const response = await axios.get(`${urlServer}ourCollection/${id}`);

            setOurCollectionDataById(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const putOurCollectionDataById = async (data, id) => {
        const userData = {
            src: data.src,
            alt: 'broken',
        };

        try {
            await axios.put(`${urlServer}ourCollection/${id}`, {
                id: +id,
                ...userData,
            });

            notify.success('changed');
        } catch (error) {
            console.log(error);
            notify.error('changed');
        }
    };

    // Home Swiper ------------------------------------------

    const [HomeSwiperData, setHomeSwiperData] = useState([]);

    const getHomeSwiperData = async () => {
        try {
            const response = await axios.get(`${urlServer}HomeSwiper`);

            setHomeSwiperData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const addHomeSwiperData = async (data) => {
        const userData = {
            src: data.src,
            alt: 'broken',
        };

        try {
            await axios.post(`${urlServer}HomeSwiper`, {
                ...userData,
            });

            notify.success('Data create correctly');
        } catch (error) {
            console.log(error);
            notify.error('Data create incorrectly');
        }
    };

    // ------------------------------------------------------

    const deleteHomeSwiperData = async (id) => {
        try {
            axios.delete(`${urlServer}homeSwiper/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const [HomeSwiperDataById, setHomeSwiperDataById] = useState(null);

    const getHomeSwiperDataById = async (id) => {
        try {
            const response = await axios.get(`${urlServer}HomeSwiper/${id}`);

            setHomeSwiperDataById(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ------------------------------------------------------

    const putHomeSwiperDataById = async (data, id) => {
        const userData = {
            src: data.src,
            alt: 'broken',
        };

        try {
            await axios.put(`${urlServer}HomeSwiper/${id}`, {
                id: +id,
                ...userData,
            });

            notify.success('changed');
        } catch (error) {
            console.log(error);
            notify.error('changed');
        }
    };
    // ------------------------------------------------------

    const [parfume, setParfume] = useState([]);

    const getParfume = async () => {
        try {
            const response = await axios.get(`${urlServer}parfume`);

            setParfume(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ----------------------------------------------------------------------

    const [parfumeById, setParfumeById] = useState([]);

    const getParfumeById = async (id) => {
        try {
            const response = await axios.get(`${urlServer}parfume/${id}`);

            setParfumeById(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // ----------------------------------------------------------------------

    const addParfume = async (data) => {
        const newData = {
            id: parfume.length + 1,
            src: '/parfume_1.png',
            title: data.title,
            price: data.price,
        };

        try {
            await axios.post(`${urlServer}parfume`, {
                ...newData,
            });

            notify.success('Данные добавлены');
        } catch (error) {
            console.log(error);
            notify.error('Данные не добавлены');
        }
    };

    // ----------------------------------------------------------------------

    const putParfumeById = async (data, id) => {
        const userData = {
            src: data.src,
            title: data.title,
            price: data.price,
        };

        try {
            await axios.put(`${urlServer}parfume/${id}`, {
                id: +id,
                ...userData,
            });

            notify.success('Данные изменены');
        } catch (error) {
            console.log(error);
            notify.error('Данные не изменены');
        }
    };

    // ----------------------------------------------------------------------

    const deleteParfumeById = async (id) => {
        try {
            await axios.delete(`${urlServer}parfume/${id}`);

            notify.success('Данные удалены');
            getParfume();
        } catch (error) {
            console.log(error);
            notify.error('Данные не удалены');
        }
    };
    //----------------------------------------------------------------------

    const sendTelegram = async (message, e) => {
        e.preventDefault();

        if (message === '') return notify.warn();

        const sendMessage = `Message: ${message}`;

        const token = '6629321266:AAGBx6mSrJ8wI0DxYPAxYE6MC3Ckk1iH9vc';
        const chatId = ' -1002081168374';
        const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            await axios.post(urlApi, {
                chat_id: chatId,
                text: sendMessage,
            });

            notify.success();
        } catch (error) {
            notify.error();
            console.log(error);
        }
    };

    const message = {
        message: '',
    };

    // ------------------------------------------------------

    const toastEmitter = {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    };

    const notify = {
        success(message = "Data send correctly") {
            toast.success(message, toastEmitter);
        },

        error(message = "Data send incorrectly") {
            toast.error(message, toastEmitter);
        },

        warn(message = "Enter data") {
            toast.warn(message, toastEmitter);
        },
    };

    // ------------------------------------------------------

   
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("admin"))
  );

  const [adminData, setAdminData] = useState(null);

  const getAdmin = async () => {
    try {
      const response = await axios.get(`${urlServer}admin`);

      setAdminData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkLogIn = (data) => {
    const admin = {
      username: adminData?.username,
      password: adminData?.password,
    };

    if (
      data.username === adminData?.username &&
      data.password === adminData?.password
    ) {
      notify.success("Data entered correctly");

      localStorage.setItem("admin", JSON.stringify(admin));

      setTimeout(() => {
        setIsAdmin(JSON.parse(localStorage.getItem("admin")));
        navigate("/admin");
      }, 2500);
    } else {
      notify.error("Data entered incorrectly");
      setIsAdmin(null);
      localStorage.clear();
    }
  };

  const logOut = () => {
    setIsAdmin(null);
    localStorage.clear();
    navigate("/log_in");
  };

  const navigate = useNavigate();

    return (
        <Context.Provider
            value={{
                HomeSwiperData,
                putHomeSwiperDataById,
                getHomeSwiperDataById,
                HomeSwiperDataById,
                setHomeSwiperDataById,
                deleteHomeSwiperData,
                addHomeSwiperData,
                getHomeSwiperData,
                setHomeSwiperData,
                putOurCollectionDataById,
                ourCollectionDataById,
                getOurCollectionDataById,
                deleteOurCollectionData,
                addOurCollectionData,
                isAdmin,
                getAdmin,
                checkLogIn,
                logOut,
                burger,
                switchBurger,
                walletData,
                getWalletData,
                stepData,
                getStepData,
                ourCollectionData,
                getOurCollectionData,
                sendTelegram,
                message,
                addParfume,
                putParfumeById,
                deleteParfumeById,
                parfumeById,
                getParfumeById,
                parfume,
                getParfume,
                // registerUser, // Expose the registerUser function
            }}
        >
            {children}
        </Context.Provider>
    );
};