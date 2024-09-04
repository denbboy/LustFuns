import React, { useState } from 'react'

interface IAsideMenuModeProps {

}

export const AsideMenuMode: React.FC<IAsideMenuModeProps> = () => {

    const [isLightMode, setIsLightMode] = useState<boolean>(false)

    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLightMode(e.target.checked);

        if (e.target.checked) {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    }

    return (
        <div className="mode">
                        <p className="mode__text">
                            {isLightMode ? "Dark Mode" : "Light Mode"}
                        </p>
                        <div className="mode__body">
                            <div className="switch-mode">
                                <div className="switch-mode__body">
                                    <input onChange={handleChangeTheme} checked={isLightMode} type="checkbox" id="switch" className="switch-mode__input" />
                                    <label htmlFor="switch" className="switch-mode__button"></label>
                                </div>
                            </div>
                        </div>
        </div>
        
    )
}
