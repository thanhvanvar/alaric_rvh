// In `pages/_document.js`
import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
import React from "react";

export default function Document() {

    return (
        <Html>
            <Head>
                <meta charSet="utf-8"/>
                <meta content="" name="description"/>
                <meta content="" name="keywords"/>
                {/* Favicons */}
                <link href="/assets/img/logo-alaric.png" rel="icon"/>
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                {/*  Google Fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=optional"
                      rel="stylesheet"/>
                {/* Vendor CSS Files*/}
                {/*<link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css"
                      rel="stylesheet"/>
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
                      rel="stylesheet"/>
                <link href="/assets/vendor/swiper/swiper-bundle.min.css"
                      rel="stylesheet"/>*/}
                {/*<link href="/assets/css/style.css" rel="stylesheet"/>*/}
                <link href="/assets/css/my_style.css" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"
                    crossOrigin="anonymous"/>
            <Script src="/assets/vendor/php-email-form/validate.js" strategy="beforeInteractive"
                    crossOrigin="anonymous"/>
            <Script src="/assets/js/main.js" strategy="beforeInteractive" crossOrigin="anonymous"/>

            </body>
        </Html>
    )
}