import "./assets/scss/style.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { AsideMessages } from "./components/AsideMessages/AsideMessages";
import { useOpenAside } from "./hooks/OpenAside";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import getCookies from "./functions/getCookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/toolkitSlice";
import { IUser } from "./models";
import { Modals } from "./components/Modals/Modals";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { GoogleOAuthProvider } from "@react-oauth/google";


export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const { handleOpenMenu, isOpenAsideMenu } = useOpenAside();

  const user: IUser = useSelector((state: any) => state.toolkit.user)

  const checkLocation = location.pathname.slice(0, location.pathname.indexOf('/', 1) === -1 ? undefined : location.pathname.indexOf('/', 1))
  const currentPage = routes(user.sex).filter(item => item.path === checkLocation || item.path === '*');

 
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});
    return () => {
      NativeFancybox.unbind("[data-fancybox]");
      NativeFancybox.close();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!getCookies('access_token')) return

    const user: IUser = {
      username: "Angelina",
      usertag: "@angel",
      photo: "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg",
      sex: getCookies('access_token') ?? ""
    }

    dispatch(setUser(user))
  }, [])

  return (
    <>
      <ToastContainer />

      <Modals />

      {!currentPage[0]?.isNotNeedHeader && <Header handleOpenMenu={handleOpenMenu} />}
      <GoogleOAuthProvider clientId="1071605377094-5663q4ujiakepp8ri3mis7buhclag70l.apps.googleusercontent.com">
        <main className={`page ${currentPage[0]?.additionalClass ?? 'page-main'} `}>

          {!currentPage[0]?.isNotNeedMenu && <AsideMenu handleOpenMenu={handleOpenMenu} isOpenAsideMenu={isOpenAsideMenu} />}

          <TransitionGroup component={null}>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
              <Routes location={location}>
                {routes(user.sex).map((item: any) => (
                  <Route
                    key={item.path}
                    element={item.element}
                    path={item.path}
                  />
                ))}
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          {!currentPage[0]?.isNotNeedMessage && <AsideMessages />}
        </main>

      </GoogleOAuthProvider>
    </>
  );
};
