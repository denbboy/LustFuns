import React, { SetStateAction, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IFilterVideo } from '../../../models'
import { useClickOutside } from '../../../hooks/ClickOutside'

interface IVideoStoreFilterProps {
    isOpenFilter: boolean
    setIsOpenFilter: React.Dispatch<SetStateAction<boolean>>
    setFilter: React.Dispatch<SetStateAction<IFilterVideo>>
    filter: IFilterVideo
    rootEl: any
}

export const VideoStoreFilter: React.FC<IVideoStoreFilterProps> = ({ isOpenFilter, setIsOpenFilter, setFilter, filter, rootEl }) => {

    const [priceFilterList] = useState([
        {
            label: "All",
            value: [0, 99999999]
        },
        {
            label: "Under $10",
            value: [0, 10]
        },
        {
            label: "$10 to $25",
            value: [10, 25]
        },
        {
            label: "$25 to $50",
            value: [25, 50]
        },
        {
            label: "$50 to $100",
            value: [50, 100]
        },
        {
            label: "$100+",
            value: [100, 99999999]
        },
    ])

    useEffect(() => {
        handleFilterByPrice(priceFilterList[0].value.join(','))
    }, [])

    const handleFilterByPrice = (value: string) => {

        setFilter((prev: IFilterVideo) => {
            return {
                ...prev,
                price: [value]
            }
        })
        // setFilter((prev: IFilterVideo) => {
        //     return {
        //         ...prev,
        //         price: prev?.price?.some(item => item === value) ? prev?.price?.filter(item => item !== value) : [...prev?.price, value]
        //     }
        // })
    }

    return (
        <div ref={rootEl} className={`video-store__filters filters-video-store ${isOpenFilter ? 'active' : ''}`}>
            <div className="filters-video-store__top top-filters-video-store">
                <ul className="top-filters-video-store__items">
                    <li>
                        <button onClick={_ => toast.error("This function is developing")} className="top-filters-video-store__item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.89046 8.39031L1.89045 8.39032C1.78692 8.49385 1.6465 8.55202 1.50009 8.55202C1.35368 8.55202 1.21327 8.49385 1.10974 8.39032C1.00621 8.2868 0.948047 8.14638 0.948047 7.99997C0.948047 7.85356 1.00621 7.71314 1.10974 7.60961L7.60959 1.10976C7.60962 1.10973 7.60966 1.10969 7.60969 1.10966C7.6608 1.05816 7.72159 1.01727 7.78858 0.989369C7.8556 0.961446 7.92749 0.94707 8.00009 0.94707C8.0727 0.94707 8.14459 0.961446 8.21161 0.989369C8.27859 1.01727 8.33939 1.05816 8.3905 1.10966C8.39053 1.10969 8.39056 1.10973 8.39059 1.10976L14.8903 7.60947L1.89046 8.39031ZM1.89046 8.39031L8.00009 2.27571L14.1096 8.39018L14.1451 8.35497L14.1097 8.39031L14.1097 8.3903C14.1608 8.44179 14.2216 8.48267 14.2886 8.51057C14.3556 8.53849 14.4275 8.55287 14.5001 8.55287C14.5727 8.55287 14.6446 8.53849 14.7116 8.51057C14.7786 8.48267 14.8393 8.44181 14.8904 8.39032M1.89046 8.39031L15.0107 8.21149M14.8904 8.39032C14.9419 8.33923 14.9828 8.27845 15.0107 8.21149M14.8904 8.39032C14.8905 8.39028 14.8905 8.39023 14.8906 8.39018L14.8551 8.35497L14.8903 8.39047C14.8904 8.39042 14.8904 8.39037 14.8904 8.39032ZM15.0107 8.21149C15.0386 8.14446 15.053 8.07258 15.053 7.99997M15.0107 8.21149L15.053 7.99997M15.053 7.99997C15.053 7.92736 15.0386 7.85547 15.0107 7.78845M15.053 7.99997L15.0107 7.78845M15.0107 7.78845C14.9828 7.72149 14.9419 7.66071 14.8904 7.60961L15.0107 7.78845ZM2.45009 12.62H2.45004L2.45015 12.6223C2.48193 13.2934 2.77724 13.9248 3.2719 14.3793C3.76633 14.8337 4.42001 15.0746 5.09102 15.05H10.9092C11.5802 15.0746 12.2339 14.8337 12.7283 14.3793C13.2229 13.9248 13.5183 13.2934 13.55 12.6223L13.5501 12.6223V12.62V9.49997C13.5501 9.3541 13.4921 9.21421 13.389 9.11106C13.2859 9.00792 13.146 8.94997 13.0001 8.94997C12.8542 8.94997 12.7143 9.00792 12.6112 9.11106C12.508 9.21421 12.4501 9.3541 12.4501 9.49997V12.618C12.4199 12.9969 12.2422 13.3488 11.9551 13.598C11.6675 13.8476 11.2933 13.9741 10.9132 13.9501L10.9133 13.95H10.9101H5.09009V13.9499L5.08694 13.9501C4.7069 13.9741 4.33267 13.8476 4.04509 13.598C3.75799 13.3488 3.58025 12.9969 3.55009 12.618V9.49997C3.55009 9.3541 3.49215 9.21421 3.389 9.11106C3.28586 9.00792 3.14596 8.94997 3.00009 8.94997C2.85422 8.94997 2.71433 9.00792 2.61118 9.11106C2.50804 9.21421 2.45009 9.3541 2.45009 9.49997V12.62Z" fill="#B5CBED" stroke="#B5CBED" strokeWidth="0.1" />
                            </svg>

                            <p>Most recent</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={_ => toast.error("This function is developing")} className="top-filters-video-store__item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_369_11269)">
                                    <path d="M6.67786 0.428038C6.55409 1.99962 5.74459 3.42949 4.45552 4.35195L4.45542 4.35202C4.44125 4.36221 4.42716 4.37253 4.41329 4.38268C4.41007 4.38504 4.40686 4.38739 4.40367 4.38972L4.40361 4.38976C4.368 4.41587 4.33563 4.43957 4.3057 4.45932L4.30551 4.45945C4.30031 4.46291 4.29503 4.46653 4.28973 4.4703L4.28963 4.47037C3.46495 5.06081 2.78453 5.84783 2.32176 6.74676L2.32175 6.74678C1.85157 7.66095 1.61309 8.64226 1.61309 9.66293C1.61309 10.1833 1.68284 10.7185 1.82022 11.2538L1.82022 11.2538C2.54574 14.0777 5.08702 16.05 8.00015 16.05C11.5219 16.05 14.3869 13.1848 14.3869 9.66293C14.3869 7.92625 13.699 6.30084 12.4503 5.08664L12.4154 5.12249L12.4503 5.08664C12.3324 4.97206 12.167 4.91991 12.0049 4.94659M12.0049 4.94659C12.005 4.94659 12.005 4.94659 12.005 4.94658L12.0131 4.99593L12.0049 4.94659ZM7.41027 0.0523325C7.27084 -0.0197925 7.10449 -0.0171988 6.96718 0.0590825L10.8018 6.40058C10.8297 6.16179 10.8438 5.92176 10.8438 5.68118C10.8438 5.16511 10.7746 4.63405 10.6381 4.10265C10.1895 2.35702 9.01296 0.880708 7.41027 0.0523325ZM10.8592 6.33749C10.8822 6.11952 10.8938 5.90058 10.8938 5.68118C10.8938 5.16067 10.824 4.62542 10.6866 4.09021L10.6866 4.0902C10.2343 2.33077 9.04857 0.842833 7.43325 0.00792189L10.8592 6.33749Z" fill="#B5CBED" stroke="#B5CBED" strokeWidth="0.1" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_369_11269">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Trending</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={_ => toast.error("This function is developing")} className="top-filters-video-store__item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_369_11236)">
                                    <path d="M4.37643 7.76479C4.21643 7.38354 4.10393 6.98291 4.04643 6.57229C3.82706 5.00479 4.40331 3.34791 5.54893 2.25479C6.45893 1.38791 7.69018 0.88541 8.96706 0.873535H9.03143C10.8533 0.891035 12.6221 1.97791 13.4521 3.59791C14.1527 4.96541 14.1727 6.65979 13.5064 8.04229C12.7864 9.53541 11.2633 10.5767 9.60393 10.8073L12.2052 15.3129L13.1883 13.8235C13.1883 13.8235 13.4177 13.5679 13.6727 13.5442L15.4533 13.4373L13.6871 10.3785C13.6871 10.3785 13.5514 10.0729 13.6489 9.83166C13.7308 9.62916 13.9258 9.47729 14.1414 9.44666C14.2252 9.43541 14.2452 9.44166 14.2721 9.44229C14.4771 9.46416 14.6583 9.57478 14.7702 9.75353L17.0421 13.6879C17.1089 13.8148 17.1139 13.8567 17.1221 13.9367C17.1533 14.241 16.9314 14.551 16.6246 14.6135C16.5864 14.621 16.5764 14.621 16.5377 14.6248L14.0596 14.7735L12.6914 16.8454C12.6914 16.8454 12.4771 17.1048 12.2164 17.1248C12.0121 17.1398 11.8033 17.0473 11.6771 16.8867C11.6533 16.8554 11.6489 16.8467 11.6283 16.8135L8.15393 10.7967C7.79143 10.7392 7.43143 10.6392 7.08081 10.4935C6.30956 10.1723 5.63143 9.64666 5.10956 8.99541L2.54456 13.4373L4.32581 13.5442C4.32581 13.5442 4.66643 13.6223 4.81018 13.8235L5.79268 15.3129L7.20768 12.8629C7.20768 12.8629 7.73331 12.3404 8.15456 12.6998C8.35206 12.8679 8.42581 13.1635 8.33018 13.4054C8.31518 13.4435 8.30893 13.4523 8.29018 13.4879L6.37018 16.8135C6.29143 16.9392 6.25518 16.9654 6.18706 17.0129C5.94018 17.186 5.56706 17.1467 5.36206 16.9173C5.33518 16.8873 5.33018 16.8785 5.30706 16.8454L3.93893 14.7735L1.46018 14.6248C1.46018 14.6248 0.690809 14.3385 0.916434 13.7698C0.931434 13.7323 0.937684 13.7235 0.956434 13.6879L4.37643 7.76479ZM8.97456 2.12354C7.26393 2.13979 5.66893 3.43604 5.32456 5.11854C5.07393 6.34166 5.48331 7.68228 6.37956 8.55728C7.41456 9.56791 9.05456 9.90416 10.4158 9.34791C11.6158 8.85728 12.5221 7.70416 12.7102 6.42229C12.9414 4.84104 12.0383 3.15416 10.5827 2.47354C10.0821 2.23979 9.53331 2.12166 8.97456 2.12354Z" fill="#B5CBED" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_369_11236">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Recomended</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={_ => toast.error("This function is developing")} className="top-filters-video-store__item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_369_11229)">
                                    <path d="M13.0244 0H2.97563C1.33303 0.00190625 0.00190625 1.33303 0 2.97563V13.0244C0.00190625 14.667 1.33303 15.9981 2.97563 16H13.0244C14.667 15.9981 15.9981 14.667 16 13.0244V2.97563C15.9981 1.33303 14.667 0.00190625 13.0244 0ZM14.8955 2.97563V3.94034H12.0974L10.0047 1.10453H13.0244C14.0573 1.10569 14.8943 1.94272 14.8955 2.97563ZM8.63194 1.10453L10.7246 3.94034H7.36806L5.27537 1.10453H8.63194ZM1.10453 2.97563C1.10569 1.94275 1.94272 1.10572 2.97563 1.10453H3.90266L5.99534 3.94034H1.10453V2.97563ZM13.0244 14.8955H2.97563C1.94275 14.8943 1.10572 14.0573 1.10453 13.0244V5.04491H14.8955V13.0244C14.8943 14.0573 14.0573 14.8943 13.0244 14.8955Z" fill="#B5CBED" />
                                    <path d="M10.9466 9.49166L6.57743 6.9691C6.31327 6.8166 5.97552 6.9071 5.82302 7.17125C5.77455 7.25522 5.74902 7.35044 5.74902 7.44741V12.4926C5.74902 12.7976 5.99627 13.0448 6.30127 13.0448C6.39821 13.0448 6.49346 13.0193 6.57743 12.9708L10.9466 10.4483C11.2108 10.2958 11.3013 9.958 11.1488 9.69385C11.1003 9.60985 11.0306 9.54013 10.9466 9.49166ZM6.85355 11.536V8.40394L9.56599 9.96994L6.85355 11.536Z" fill="#B5CBED" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_369_11229">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Purchased</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={_ => toast.error("This function is developing")} className="top-filters-video-store__item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.72828 17.2306L3.72829 17.2306C3.96228 17.3394 4.21149 17.3946 4.46924 17.3946C4.88194 17.3946 5.28314 17.2482 5.59886 16.9828L9.35343 13.8255L13.1077 16.9826C13.4236 17.2482 13.8248 17.3946 14.2376 17.3946C14.4953 17.3946 14.7447 17.3394 14.9783 17.2304C15.5946 16.9436 15.9926 16.3192 15.9926 15.6394V3.65909C15.9926 2.84357 15.675 2.07668 15.0983 1.50002L15.0629 1.53537L15.0983 1.50001C14.5216 0.9235 13.7548 0.605762 12.9392 0.605762H5.76735C4.95196 0.605762 4.18507 0.923502 3.60841 1.50016L3.60841 1.50017C3.0319 2.07696 2.71416 2.84384 2.71416 3.65923V15.6395C2.71416 16.3193 3.11214 16.9438 3.72828 17.2306ZM9.74772 12.5563L9.7477 12.5563C9.63378 12.4606 9.49349 12.4126 9.35343 12.4126C9.21336 12.4126 9.07308 12.4606 8.95904 12.5562L8.95899 12.5563L4.81028 16.0452L4.81027 16.0452C4.65581 16.1751 4.42896 16.2055 4.24539 16.12L4.24537 16.12C4.05938 16.0334 3.93916 15.8448 3.93916 15.6395V3.65923C3.93916 3.17075 4.12936 2.71181 4.47478 2.36638C4.82021 2.02096 5.27915 1.83076 5.76749 1.83076H12.9394C13.4278 1.83076 13.8868 2.02096 14.2322 2.36638C14.5776 2.7118 14.7677 3.17074 14.7677 3.65923V15.6394C14.7677 15.8446 14.6475 16.0334 14.4614 16.1199C14.2777 16.2053 14.051 16.1751 13.8963 16.045L9.74772 12.5563Z" fill="#B5CBED" stroke="#B5CBED" strokeWidth="0.1" />
                            </svg>
                            <p>Bookmarked</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={_ => toast.error("This function is developing")} className="top-filters-video-store__item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_369_11242)">
                                    <path d="M14.3252 11.8965C14.0483 11.6905 13.6568 11.748 13.4507 12.0249C13.3374 12.1772 13.2162 12.3266 13.0903 12.469C12.8617 12.7276 12.886 13.1226 13.1446 13.3512C13.2636 13.4563 13.4112 13.508 13.5583 13.508C13.7312 13.508 13.9033 13.4366 14.0268 13.2969C14.1759 13.1283 14.3195 12.9514 14.4536 12.771C14.6597 12.4941 14.6022 12.1025 14.3252 11.8965Z" fill="#B5CBED" />
                                    <path d="M15.3704 8.96511C15.0334 8.89171 14.7002 9.10561 14.6268 9.44286C14.5864 9.62839 14.5376 9.81427 14.4816 9.99539C14.3797 10.3252 14.5645 10.6751 14.8943 10.777C14.9557 10.796 15.0179 10.805 15.079 10.805C15.3459 10.805 15.593 10.6327 15.6759 10.3644C15.7424 10.1494 15.8003 9.92883 15.8482 9.70874C15.9216 9.37149 15.7077 9.03855 15.3704 8.96511Z" fill="#B5CBED" />
                                    <path d="M11.317 13.8978C11.1511 13.9904 10.9793 14.0769 10.8064 14.155C10.4918 14.2971 10.352 14.6673 10.494 14.9819C10.5984 15.213 10.8259 15.3498 11.064 15.3498C11.15 15.3498 11.2374 15.3319 11.3209 15.2943C11.526 15.2016 11.7296 15.099 11.9264 14.9891C12.2278 14.8209 12.3357 14.4401 12.1674 14.1388C11.9992 13.8374 11.6184 13.7295 11.317 13.8978Z" fill="#B5CBED" />
                                    <path d="M7.37479 3V7.74112L5.08295 10.0329C4.83889 10.277 4.83889 10.6727 5.08295 10.9168C5.20501 11.0389 5.36492 11.0999 5.52492 11.0999C5.68486 11.0999 5.84482 11.0388 5.96689 10.9168L8.44176 8.44194C8.55895 8.32475 8.62479 8.16575 8.62479 8V3C8.62479 2.65481 8.34498 2.375 7.99979 2.375C7.65461 2.375 7.37479 2.65481 7.37479 3Z" fill="#B5CBED" />
                                    <path d="M15.375 1.34375C15.0298 1.34375 14.75 1.62356 14.75 1.96875V3.70425C13.2952 1.42275 10.7547 0 8 0C5.86312 0 3.85416 0.832156 2.34313 2.34313C0.832156 3.85416 0 5.86312 0 8C0 10.1369 0.832156 12.1458 2.34313 13.6569C3.85416 15.1678 5.86312 16 8 16C8.00528 16 8.01038 15.9993 8.01562 15.9992C8.02087 15.9993 8.02597 16 8.03125 16C8.2565 16 8.48397 15.9905 8.70741 15.9718C9.05137 15.943 9.30687 15.6408 9.27809 15.2968C9.24925 14.9529 8.94747 14.6973 8.60309 14.7262C8.41422 14.742 8.22184 14.75 8.03125 14.75C8.02597 14.75 8.02087 14.7507 8.01562 14.7508C8.01038 14.7507 8.00528 14.75 8 14.75C4.27803 14.75 1.25 11.722 1.25 8C1.25 4.27803 4.27803 1.25 8 1.25C10.3987 1.25 12.6049 2.52853 13.8105 4.5625H12.092C11.7468 4.5625 11.467 4.84231 11.467 5.1875C11.467 5.53269 11.7468 5.8125 12.092 5.8125H14C14.3806 5.8125 14.7367 5.70553 15.0399 5.52022C15.0594 5.50909 15.0782 5.49712 15.096 5.48422C15.64 5.12637 16 4.51084 16 3.8125V1.96875C16 1.62356 15.7202 1.34375 15.375 1.34375Z" fill="#B5CBED" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_369_11242">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>History</p>
                        </button>
                    </li>
                </ul>
                <button className="filters-video-store__close" onClick={_ => setIsOpenFilter(false)}>
                    <div className="filters-video-store__close-body">

                    </div>
                </button>
            </div>
            <div className="filters-video-store__body body-filters-video-store">
                <div className="body-filters-video-store__header">
                    <h4 className="body-filters-video-store__title">Filters</h4>
                </div>
                <div className="body-filters-video-store__block block-filters-video-store">
                    <div className="block-filters-video-store__title">Price</div>
                    <div className="block-filters-video-store__items">

                        {
                            priceFilterList.map(item => (
                                <div key={item.label} className="block-filters-video-store__item item-filter">
                                    <div className="form-block">
                                        <label>
                                            <input checked={filter.price.some(item2 => item2 === item.value.join(','))} onChange={e => handleFilterByPrice(item.value.join(','))} value={item.value.join(',')} type="radio" name="conditions" className="real-checkbox" />
                                            <span className="custom-checkbox"></span>
                                            <p className="form-block__text">
                                                {item.label}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                {/* <div className="body-filters-video-store__block block-filters-video-store">
                    <div className="block-filters-video-store__title">Video Length</div>
                    <div className="block-filters-video-store__items">
                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">All</p>
                                </label>
                            </div>
                        </div>
                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">10 to 15 min</p>
                                </label>
                            </div>
                        </div>
                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">Under 5 min</p>
                                </label>
                            </div>
                        </div>
                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">15 to 30 min</p>
                                </label>
                            </div>
                        </div>
                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">5 to 10 min</p>
                                </label>
                            </div>
                        </div>


                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">30+ min</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="body-filters-video-store__block block-filters-video-store">
                    <div className="block-filters-video-store__items">
                        <div className="block-filters-video-store__item item-filter">
                            <div className="form-block">
                                <label>
                                    <input onChange={e => setFilter(prev => ({...prev, isCanDownload: e.target.checked}))} type="checkbox" name="conditions" className="real-checkbox" />
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">Downloadable</p>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="body-filters-video-store__followed followed-filters-video-store">
                    <div className="block-filters-video-store__title">Followed</div>

                    <div className="followed-filters-video-store__items">
                        <NavLink to="/profile/@asdd" className="user-item user-item--stories">
                            <div className="user-item__image user-item__image--decoration">
                                <img className="user-photo" src="https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg" alt="User ph" />
                            </div>
                            <div className="user-item__body">
                                <button className="user-item__name" style={{ textAlign: 'left' }}>Boob007</button>
                                <span className="user-item__status online">
                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                    </svg>

                                    Online
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to="/profile/@asdd" className="user-item">
                            <div className="user-item__image user-item__image--decoration">
                                <img className="user-photo" src="https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg" alt="User ph" />
                                {/* <div className="user-item__image-icon">
                                    <img src="@img/icons/logo-white.svg" alt="ph" />
                                </div> */}
                            </div>
                            <div className="user-item__body">
                                <button className="user-item__name" style={{ textAlign: 'left' }}>Boob007</button>
                                <span className="user-item__status online">
                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                    </svg>

                                    Online
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to="/profile/@asdd" className="user-item user-item--stories">
                            <div className="user-item__image">
                                <img className="user-photo" src="https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg" alt="User ph" />
                                <div className="user-item__image-icon">
                                    <img src="@img/icons/logo-white.svg" alt="ph" />
                                </div>
                            </div>
                            <div className="user-item__body">
                                <button className="user-item__name" style={{ textAlign: 'left' }}>Boob007</button>
                                <span className="user-item__status online">
                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                    </svg>

                                    Online
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
