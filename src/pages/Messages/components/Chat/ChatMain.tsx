import React, { useEffect, useRef, useState } from 'react'
import { ChatItem } from './ChatItem'
import { useSelector } from 'react-redux'

interface IChatMainProps {
    chatTheme: string
}

export const ChatMain: React.FC<IChatMainProps> = ({ chatTheme }) => {

    const chatWindow: any = useRef(null)

    const themeColors: { [key: string]: any } = {
        // 'blue': {background: "linear-gradient(90deg, rgb(161, 196, 253) 0%, rgb(194, 233, 251) 100%)"},
        // 'green': {background: "linear-gradient(90deg, rgb(212, 252, 121) 0%, rgb(150, 230, 161) 100%)"},
        // 'red': {background: "linear-gradient(90deg, rgb(255, 129, 119) 0%, rgb(255, 134, 122) 0%, rgb(255, 140, 127) 21%, rgb(249, 145, 133) 52%, rgb(207, 85, 108) 78%, rgb(177, 42, 91) 100%)"},
        // 'purple': {background: "linear-gradient(90deg, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)"},
        'blue': { background: "#9f9fff" },
        'green': { background: "#a4e0a4" },
        'red': { background: "#ffb7b7" },
        'purple': { background: "#c98dc9" },
    }

    const chatMessages = useSelector((state: any) => state.toolkit.chatMessages)

    useEffect(() => {
        chatWindow.current?.scrollTo(0, 9999)
    }, [chatMessages])

    return (
        <div className="chat__content content-chat" ref={chatWindow}>
            <div data-gallery className="content-chat__body theme" style={{ ...themeColors[chatTheme], transition: "all .3s ease" }}>

                {
                    chatMessages.map((item: any) => (
                        <ChatItem
                            id={item.id}
                            message={item.message}
                            user={item.user}
                            date={item.date}
                            isOwner={item.isOwner}
                            images={item.images}
                            isEdited={item.isEdited}
                            replyTo={item.replyTo}
                            isLocked={item.isLocked}
                        />
                    ))
                }

            </div>
        </div>
    )
}
