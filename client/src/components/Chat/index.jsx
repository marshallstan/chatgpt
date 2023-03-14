import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow
} from 'react-chat-engine-advanced'
import { useSelector } from 'react-redux'
import Header from '@/components/CustomHeader'
import StandardMessageForm from '@/components/CustomMessageForms/StandardMessageForm'
import Ai from '@/components/CustomMessageForms/Ai'
import AiCode from '@/components/CustomMessageForms/AiCode'
import AiAssist from '@/components/CustomMessageForms/AiAssist'

const Chat = () => {
  const { user, secret } = useSelector(state => state.userInfo)
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  )

  return (
    <div style={{ flexBasis: '100%' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: '100vh' }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith('AiChat_')) {
            return <Ai props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith('AiCode_')) {
            return <AiCode props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith('AiAssist_')) {
            return <AiAssist props={props} activeChat={chatProps.chat} />
          }

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

export default Chat
