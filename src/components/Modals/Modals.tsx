import { useDispatch, useSelector } from "react-redux"
import { ModalAddVid } from "./components/ModalAddVid"
import { ModalCreateGroup } from "./components/ModalCreateGroup"
import { ReactElement } from "react"
import { removeModal } from "../../redux/toolkitSlice"
import { ModalAddUserGroup } from "./components/ModalAddUserGroup"
import { ModalBlockUser } from "./components/ModalBlockUser"
import { ModalTimeLinePost } from "./components/ModalTimeLinePost"
import { ModalMassMessage } from "./components/ModalMassMessage"
import { ModalSuccessfull } from "./components/ModalSuccessfull"

export const Modals = () => {
    const dispatch = useDispatch();
    const modalsStateStore = useSelector((state: any) => state.toolkit.modals)
    console.log(modalsStateStore);
    
    const modalComponents: {[key: string]: ReactElement} = {
        'addVideo': <ModalAddVid/>,
        'createGroup': <ModalCreateGroup/>,
        'addUserGroup': <ModalAddUserGroup/>,
        'blockUser': <ModalBlockUser/>,
        'timeLinePost': <ModalTimeLinePost/>,
        'massMessage': <ModalMassMessage/>,
        'successfull': <ModalSuccessfull/>,
    }

    const handleCloseModal = (modalName: string) => {
        dispatch(removeModal(modalName))
    }
    

    return (
        <>
            {
                modalsStateStore.map((modal: string) => {
                    return (
                        
                        <div id="popup-add-vid" aria-hidden="true"  className={`popup-add-vid popup ${modal ? 'popup_show' : ''}`}>
                            <div className="popup-bgd" onClick={() => handleCloseModal(modal)}></div>
                            <div className="popup__wrapper">

                                <div  className="popup__content">
                                    <button data-close type="button"  className="popup__close" onClick={() => handleCloseModal(modal)}></button>

                                    {modalComponents[modal]}
                                    
                                    
                                </div>
                            </div>
                        </div>
                    );
                })
            }

        </>
    )
}
