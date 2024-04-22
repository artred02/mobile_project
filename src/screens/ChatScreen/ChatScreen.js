import React, {useRef} from 'react';
import { View, Button, Text } from 'react-native';
import BpWidget from "../../../components/BpWidget";
import BpIncommingMessagesListener from '../../../components/BpIncommingMessagesListener'

export default function ChatScreen() {

  const testingConfig = {
    composerPlaceholder: "Chat with bot",
    botConversationDescription:
      "This chatbot was built surprisingly fast with Botpress",
    botId: '06d9476c-3313-468a-9878-969d43623408',
    hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
    messagingUrl: 'https://messaging.botpress.cloud',
    clientId: '06d9476c-3313-468a-9878-969d43623408',
    lazySocket: false,
    frontendVersion: "v1",
    showPoweredBy: false,
    hideWidget: true,
    disableAnimations: false,
    closeOnEscape: true,
    showConversationsButton: false,
    enableTranscriptDownload: false,
    className: "webchatIframe",
    containerWidth: "100%25",
    layoutWidth: "100%25",
    showCloseButton: true,
    useSessionStorage: true,
  };

  const botpressWebChatRef = useRef();

  const sendExampleEvent = () => {
    botpressWebChatRef.current?.sendEvent({ type: "toggle" });
  }
  const sendExamplePayload = () => {
    botpressWebChatRef.current?.sendPayload({ type: "text", text: "hello" });
  }
  const changeExampleConfig = () => {
    botpressWebChatRef.current?.mergeConfig({ botName: Math.random() });
  }

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ height: 50, justifyContent: "center", alignItems: "center" }}
        >
          {/* <Text>Your app header or spacer</Text> */}
        </View>
        <BpWidget
          ref={botpressWebChatRef}
          botConfig={testingConfig}
        />
        <Button
          onPress={sendExampleEvent}
          title="Toggle webchat"
        />
        <Button
          onPress={changeExampleConfig}
          title="changeConfig"
        />
        <Button
          onPress={sendExamplePayload}
          title="send message"
        />
      </View>
      {/* In case your webchat is not rendered and you want to catch bot messages */}
      <BpIncommingMessagesListener
        botConfig={testingConfig}
      />
    </View>
  )
}