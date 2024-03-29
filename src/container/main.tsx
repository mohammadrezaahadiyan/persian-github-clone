import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App.tsx'
import '../assets/css/app.css'
import {createTheme, ThemeProvider} from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {Provider} from "react-redux";
import {store} from "../core/store";

const theme = createTheme({
    direction: 'rtl',
})

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </CacheProvider>
    </React.StrictMode>
)