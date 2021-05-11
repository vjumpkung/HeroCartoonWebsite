import Head from "next/head"
const Messenger = () => {
    return (
        <div>
            <Head><script src="/messenger.js" /></Head>
            <div id="fb-root"></div>
            <div className="fb-customerchat" attribution="biz_inbox" page_id="567182800427506"></div>
        </div>
    )
}
export default Messenger