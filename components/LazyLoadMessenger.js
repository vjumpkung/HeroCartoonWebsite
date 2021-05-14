import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";

export default function LazyLoadMessenger() {
    return (
        <LiveChatLoaderProvider
            provider="messenger"
            providerKey="567182800427506"
            appID="196640848959446"
            locale="th_TH"
        >
            <Messenger />
        </LiveChatLoaderProvider>
    );
}
