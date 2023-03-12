import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow
} from 'react-chat-engine-advanced'
import Header from '@/components/CustomHeader'

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    'chosen1',
    '1111'
  )

  return (
    <div style={{ flexBasis: '100%' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: '100vh' }}
        renderChatHeader={(chat) => <Header chat={chat} />}
      />
    </div>
  )
}

export default Chat
