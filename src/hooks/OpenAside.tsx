import { useState } from "react";

export const useOpenAside = () => {
    const [isOpenAsideMenu, setIsOpenAsideMenu] = useState(false);
    
    const handleOpenMenu = (bool: boolean) => {
        setIsOpenAsideMenu(bool ?? !isOpenAsideMenu);
    }

    return {
        isOpenAsideMenu,
        handleOpenMenu,
    }
}