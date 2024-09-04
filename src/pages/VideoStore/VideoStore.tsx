import { SetStateAction, useEffect, useRef, useState } from 'react'
// import PostPh from '../../assets/img/post/01.jpg'
// import UserPh from '../../assets/img/user/01.png'
import { VideoStoreFilter } from './components/VideoStoreFilter'
import { VideoStoreItem } from './components/VideoStoreItem'
import { IFilterVideo, IUser } from '../../models'
import { useDispatch, useSelector } from 'react-redux'
import { addModal } from '../../redux/toolkitSlice'
import { useClickOutside } from '../../hooks/ClickOutside'
import { Pagination } from '../../components/Pagination/Pagination'

export const VideoStore = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')



    const [mockVideo] = useState([
        {
            title: "Emma yellow dress",
            user: {
                username: "Emmik",
                usertag: "@emmiikk",
                photo: "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg"
            },
            date: "08.03.2024",
            isNew: false,
            isDownload: true,
            price: 25,
            poster: 'https://m.media-amazon.com/images/M/MV5BMWI0MDY3ZmUtMTZlZC00MDcyLTkyN2UtZTljZDNiZjM2NTlmXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg'
        },
        {
            title: "Sexy Emma Watwon",
            user: {
                username: "Emmik",
                usertag: "@emmiikk",
                photo: "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg"
            },
            date: "08.03.2024",
            isNew: false,
            isDownload: true,
            price: 99,
            poster: 'https://m.media-amazon.com/images/I/71AnnJuUpoL._AC_UF894,1000_QL80_.jpg'
        },
        {
            title: "Sexy Emma Watwon New",
            user: {
                username: "Emmik",
                usertag: "@emmiikk",
                photo: "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg"
            },
            date: "08.03.2024",
            isNew: false,
            isDownload: false,
            price: 500,
            poster: 'https://i.ytimg.com/vi/C5Pqf_RJ7FM/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3tWCygqRI7czQd4xpcO75JSaR5A'
        },
    ])

    const dispatch = useDispatch();

    const handleAddVideo = () => {
        dispatch(addModal('addVideo'))
    }

    const [filter, setFilter] = useState<IFilterVideo>({
        price: [],
        isCanDownload: false
    })

    const [filterByPrice, setFilterByPrice] = useState<number[]>([])

    useEffect(() => {
        setFilterByPrice([])

        filter.price.map(item => {
            setFilterByPrice(prev => [...prev, ...item.split(',')].map(item => Number(item)))
        });

    }, [filter.price])

    const [countPerPage, setCountPerPage] = useState(8)
    const [paginatePage, setPaginatePage] = useState(1)
    const [isOpenSelect, setIsOpenSelect] = useState(false)

    const buttonFilter: any = useRef()

    const { rootEl } = useClickOutside(setIsOpenFilter, null, [buttonFilter.current])
    const select = useClickOutside(setIsOpenSelect)

    const filteredVideo = mockVideo
        ?.filter(item => filter.isCanDownload ? item.isDownload : item)
        ?.filter(item => item.price <= Math.max(...filterByPrice) && item.price >= Math.min(...filterByPrice))
        ?.filter(item => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    return (
        <div className="video-store">

            <VideoStoreFilter
                isOpenFilter={isOpenFilter}
                setIsOpenFilter={setIsOpenFilter}
                setFilter={setFilter}
                filter={filter}
                rootEl={rootEl}
            />

            <div className="video-store__container">
                <div className="video-store__header header-video-store">
                    <div className="header-video-store__search">
                        <input type="text" name="form[]" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Type search here" className="header-video-store__input input" />
                    </div>
                    {user.sex === "woman" && <button onClick={handleAddVideo} className="header-video-store__add button"><span>Add video to my store</span></button>}
                    {user.sex === "man" && <div className="header-video-store__block">
                        <button ref={buttonFilter} onClick={_ => setIsOpenFilter(prev => !prev)} className="header-video-store__filter button button--transparent">
                            <span>Filters</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.6875 3.87823H11.1549C11.4704 5.3142 12.7527 6.39225 14.2821 6.39225C15.8114 6.39225 17.0938 5.31425 17.4093 3.87823H21.3125C21.6922 3.87823 22 3.5704 22 3.19073C22 2.81106 21.6922 2.50323 21.3125 2.50323H17.4089C17.0928 1.06799 15.8087 -0.0107422 14.2821 -0.0107422C12.7546 -0.0107422 11.4711 1.06782 11.1552 2.50323H0.6875C0.307828 2.50323 0 2.81106 0 3.19073C0 3.5704 0.307828 3.87823 0.6875 3.87823ZM12.4557 3.19254C12.4557 3.19009 12.4557 3.18759 12.4557 3.18514C12.4587 2.18109 13.278 1.3643 14.2821 1.3643C15.2848 1.3643 16.1041 2.17998 16.1084 3.18356L16.1086 3.19365C16.107 4.19942 15.2882 5.01729 14.2821 5.01729C13.2764 5.01729 12.4579 4.20024 12.4556 3.19507L12.4557 3.19254ZM21.3125 18.1216H17.4089C17.0928 16.6864 15.8087 15.6076 14.2821 15.6076C12.7546 15.6076 11.4711 16.6862 11.1552 18.1216H0.6875C0.307828 18.1216 0 18.4293 0 18.8091C0 19.1888 0.307828 19.4966 0.6875 19.4966H11.1549C11.4704 20.9325 12.7527 22.0106 14.2821 22.0106C15.8114 22.0106 17.0938 20.9325 17.4093 19.4966H21.3125C21.6922 19.4966 22 19.1888 22 18.8091C22 18.4293 21.6922 18.1216 21.3125 18.1216ZM14.2821 20.6356C13.2764 20.6356 12.4579 19.8185 12.4556 18.8134L12.4557 18.8109C12.4557 18.8084 12.4557 18.8059 12.4557 18.8035C12.4587 17.7994 13.278 16.9826 14.2821 16.9826C15.2848 16.9826 16.1041 17.7983 16.1084 18.8018L16.1086 18.8119C16.1071 19.8178 15.2883 20.6356 14.2821 20.6356ZM21.3125 10.3124H10.8451C10.5296 8.87644 9.24726 7.79844 7.71792 7.79844C6.18857 7.79844 4.90621 8.87644 4.59074 10.3124H0.6875C0.307828 10.3124 0 10.6202 0 10.9999C0 11.3796 0.307828 11.6874 0.6875 11.6874H4.59108C4.9072 13.1226 6.19128 14.2014 7.71792 14.2014C9.24537 14.2014 10.5289 13.1228 10.8448 11.6874H21.3125C21.6922 11.6874 22 11.3796 22 10.9999C22 10.6202 21.6922 10.3124 21.3125 10.3124ZM9.54435 10.9981C9.54435 11.0006 9.5443 11.0031 9.5443 11.0055C9.5413 12.0096 8.72201 12.8263 7.71792 12.8263C6.71524 12.8263 5.89591 12.0107 5.89157 11.0071L5.89145 10.9971C5.89295 9.99118 6.71172 9.17344 7.71792 9.17344C8.72364 9.17344 9.54211 9.99045 9.54439 10.9957L9.54435 10.9981Z" fill="#3F79CF" />
                            </svg>
                        </button>
                        <div data-spollers className="header-video-store__per-page per-page">
                            <p className="per-page__text">Per page</p>
                            <button ref={select.rootEl} onClick={_ => setIsOpenSelect(prev => !prev)} className={`field-block-add-vid__item spollers__item-main spollers__item input input-main ${isOpenSelect ? 'active' : ''}`}>
                                <div data-spoller-close className="field-block-add-vid__title spollers__title">
                                    {countPerPage}
                                </div>
                                <div className="spollers__wrapper">

                                    <div className="field-block-add-vid__body spollers__body">
                                        <div onClick={_ => setCountPerPage(8)} className="field-block-add-vid__value">8</div>
                                        <div onClick={_ => setCountPerPage(36)} className="field-block-add-vid__value">36</div>
                                    </div>
                                </div>

                            </button>
                        </div>
                    </div>}
                </div>
                <div className="video-store__wrapper">
                    <div className="video-store__body">
                            <div className="video-store__content content-video-store">


                                {
                                    filteredVideo
                                        ?.slice(countPerPage * paginatePage - countPerPage, countPerPage * paginatePage)
                                        ?.map(item => (
                                            <VideoStoreItem
                                                title={item.title}
                                                user={item.user}
                                                date={item.date}
                                                isNew={item.isNew}
                                                isDownload={item.isDownload}
                                                price={item.price}
                                                poster={item.poster}
                                            />
                                        ))
                                }


                                {
                                    !filteredVideo.length && "Videos not found"
                                }

                            </div>
                        
                            {user.sex === "man" && <Pagination setCountPerPage={setCountPerPage} countPerPage={countPerPage} arrayLength={filteredVideo.length} setPaginatePage={setPaginatePage} />}
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
