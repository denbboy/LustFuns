import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models";

const mockChatMessages = [
    {
        id: "1",
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
        user: {
            username: 'Eeeee',
            usertag: '@eeee',
            photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
        },
        date: new Date(),
        isOwner: true
    },
    {
        id: "2",
        message: 'ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
        user: {
            username: 'Eeeee',
            usertag: '@eeee',
            photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
        },
        date: new Date(),
    },
    {
        id: "3",
        message: 'ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
        user: {
            username: 'Eeeee',
            usertag: '@eeee',
            photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
        },
        images: [
            'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        ],
        isLocked: true,
        date: new Date(),
    },
    {
        id: "4",
        message: 'ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
        user: {
            username: 'Eeeee',
            usertag: '@eeee',
            photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
        },
        images: [
            'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        ],
        isOwner: true,
        date: new Date(),
    },
]

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        modals: [],
        chatMessages: mockChatMessages,
        chatMessageChange: {},
        chatMessageReply: {},
        payment: [],
        newGroup: [],
    },
    reducers: {
        setUser(state: any, action: { payload: IUser }) {
            state.user = action.payload
        },

        addModal(state: any, action: { payload: string }) {
            state.modals = [...state.modals, action.payload]
        },
        removeModal(state: any, action: { payload: string }) {
            state.modals = state.modals.filter((modal: string) => modal !== action.payload)
        },

        addMessage(state: any, action: { payload: any }) {
            const isChange = state.chatMessages.filter((item: any) => item.id === action?.payload?.id).length

            if (isChange) {
                let itemIndex = 0
                state.chatMessages.map((item: any, index: number) => {
                    if (item.id === action?.payload?.id) itemIndex = index
                })

                state.chatMessages = [...state.chatMessages.slice(0, itemIndex), {...action.payload, isEdited: true}, ...state.chatMessages.slice(itemIndex + 1)]

                state.chatMessageChange = {}

            } else {
                state.chatMessages = [...state.chatMessages, action.payload]
            }

        },
        replyMessage(state: any, action: {payload: any}) {
            state.chatMessageReply = action.payload
        },
        changeMessage(state: any, action: { payload: any }) {
            state.chatMessageChange = action.payload
        },
        deleteMessage(state: any, action: { payload: string }) {
            state.chatMessages = state.chatMessages.filter((item: any) => item.id !== action.payload)
        },

        addPayment(state: any, action: {payload: any}) {
            state.payment = [...state.payment, action.payload]
        },
        addNewGroup(state: any, action: {payload: any}) {
            state.newGroup = [...state.newGroup, action.payload]
        },

    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    addModal,
    removeModal,

    addMessage,
    changeMessage,
    deleteMessage,
    replyMessage,

    addPayment,

    addNewGroup,

} = toolkitSlice.actions;