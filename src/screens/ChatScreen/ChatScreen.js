import React, {useRef, useState} from 'react';
import { View, Button } from 'react-native';
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
    lazySocket: true,
    frontendVersion: "v1",
    showPoweredBy: true,
    hideWidget: true,
    disableAnimations: true,
    closeOnEscape: false,
    showConversationsButton: false,
    enableTranscriptDownload: false,
    className: "webchatIframe",
    containerWidth: "100%25",
    layoutWidth: "100%25",
    showCloseButton: false,
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
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerTitle} >Chat</Text>
    //   </View>
    //   <View>
    //     <BpIncommingMessagesListener
    //       botConfig={botConfig}
    //       onMessage={(message) => console.log('Received message:', message)}
    //     />
    //     <BpWidget botConfig={botConfig} onMessage={(message) => console.log('Received message:', message)} />
    //   </View>
    // </View>

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