import '../styles/globals.css'

import Content from "../components/Content";

function MyApp({Component, pageProps}) {
    return (
        <Content>
            <Component {...pageProps} />
        </Content>

    )
}

export default MyApp
