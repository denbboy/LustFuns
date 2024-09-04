import { LiveStreamChat } from './components/LiveStreamChat'

export const LiveStream = () => {

    return (
        <div className="main-live">
            <div className="live">
                <div className="live__container">
                    <div className="live__body">
                        <p className="live__attention">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, incidunt?
                        </p>
                        <button className="live__button live__button--start button"><span>Start broadcast</span></button>
                    </div>
                </div>
            </div>
            
            <LiveStreamChat/>
        </div>

    )
}
