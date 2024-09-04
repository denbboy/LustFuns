import { createContext } from 'react'
import { ChatBottom } from './ChatBottom'
import { ChatHeader } from './ChatHeader'
import { ChatMain } from './ChatMain'

interface IChatProps {
    chatTheme: string
}

export const ChangeMessageId: any = createContext(null)

export const Chat: React.FC<IChatProps> = ({ chatTheme }) => {

    return (
        <div className="chat">
            <div className="chat__container">
                <div className="chat__body">

                    <ChatHeader />

                    <ChatMain
                        chatTheme={chatTheme}
                    />

                    <ChatBottom />

                </div>
            </div>
        </div>
    )
}
