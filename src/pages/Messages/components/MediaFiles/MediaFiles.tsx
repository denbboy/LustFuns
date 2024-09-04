import { useState } from 'react';
import { MediaFilesAll } from './components/MediaFilesAll';
import { MediaFilesImg } from './components/MediaFilesImg';
import { MediaFilesVideo } from './components/MediaFilesVideo';
import { MediaFilesGif } from './components/MediaFilesGif';


export const MediaFiles = ({handleClose}: any) => {
    const [activeTab, setActiveTab] = useState('all');

    const activeTabContent = () => {
        switch (activeTab) {
            case 'Images':
                return <MediaFilesImg/>;
            case 'Videos':
                return <MediaFilesVideo/>;
            case 'GIFs':
                return <MediaFilesGif/>;
            default:
                return <MediaFilesAll/>;
        }
    };


    return (
        <div className="messages-user__media-files media-files">
            <div className="media-files__header">
                <button onClick={handleClose} className="media-files__back"><span>Media Files</span></button>
            </div>
            <div className="media-files__tabs">
                <div className={`tabs-content-profile__item all ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    <p className="tabs-content-profile__name">All</p>
                </div>

                <div className={`tabs-content-profile__item images ${activeTab === 'Images' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Images')}
                >
                    <p className="tabs-content-profile__name">Images</p>
                </div>

                <div className={`tabs-content-profile__item videos ${activeTab === 'Videos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Videos')}
                >
                    <p className="tabs-content-profile__name">Videos</p>
                </div>

                <div className={`tabs-content-profile__item gifs ${activeTab === 'GIFs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('GIFs')}
                >
                    <p className="tabs-content-profile__name">GIFs</p>
                </div>
            </div>

            <div className="media-files__items">
                {activeTabContent()}
            </div>
        </div>
    )
}
