import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-dark-grayscale">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0 0.49803921568627"/>
                            <feFuncG type="table" tableValues="0 0.49803921568627"/>
                            <feFuncB type="table" tableValues="0 0.49803921568627"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-grayscale">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0 1"/>
                            <feFuncG type="table" tableValues="0 1"/>
                            <feFuncB type="table" tableValues="0 1"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-purple-yellow">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0.54901960784314 0.98823529411765"/>
                            <feFuncG type="table" tableValues="0 1"/>
                            <feFuncB type="table" tableValues="0.71764705882353 0.25490196078431"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-blue-red">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0 1"/>
                            <feFuncG type="table" tableValues="0 0.27843137254902"/>
                            <feFuncB type="table" tableValues="0.5921568627451 0.27843137254902"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-midnight">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0 0"/>
                            <feFuncG type="table" tableValues="0 0.64705882352941"/>
                            <feFuncB type="table" tableValues="0 1"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-magenta-yellow">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0.78039215686275 1"/>
                            <feFuncG type="table" tableValues="0 0.94901960784314"/>
                            <feFuncB type="table" tableValues="0.35294117647059 0.47058823529412"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-purple-green">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0.65098039215686 0.40392156862745"/>
                            <feFuncG type="table" tableValues="0 1"/>
                            <feFuncB type="table" tableValues="0.44705882352941 0.4"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                 style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
                <defs>
                    <filter id="wp-duotone-blue-orange">
                        <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                                       values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "/>
                        <feComponentTransfer color-interpolation-filters="sRGB">
                            <feFuncR type="table" tableValues="0.098039215686275 1"/>
                            <feFuncG type="table" tableValues="0 0.66274509803922"/>
                            <feFuncB type="table" tableValues="0.84705882352941 0.41960784313725"/>
                            <feFuncA type="table" tableValues="1 1"/>
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                </defs>
            </svg>
            <header className="header">
                <a className="logo" href=""></a>
                <nav className="navigation">
                    <div className="nav">
                        <ul id="menu-main-menu" className="menu">
                            <li id="menu-item-4295"
                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-4295">
                                <a
                                    href="" aria-current="page">Trang chủ</a></li>
                            <li id="menu-item-4268"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4268">
                                <a href="gioi-thieu/">Giới thiệu</a></li>
                            <li id="menu-item-4267"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4267">
                                <a href="vi-tri/">Vị trí</a></li>
                            <li id="menu-item-4263"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4263">
                                <a href="tien-ich/">Tiện ích</a></li>
                            <li id="menu-item-4265"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4265">
                                <a href="can-ho-alaric/">Căn hộ Alaric</a></li>
                            <li id="menu-item-4266"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4266">
                                <a href="biet-thu/">Biệt thự</a></li>
                            <li id="menu-item-4264"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4264">
                                <a href="thu-vien/">Thư viện</a></li>
                            <li id="menu-item-4269"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4269">
                                <a
                                    href="tin-tuc/">Tin tức</a></li>
                            <li id="menu-item-4262"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4262">
                                <a href="lien-he/">Liên hệ</a></li>
                        </ul>
                    </div>
                    <span></span>
                </nav>
                <div className="nav-click"></div>
                <div className="right-header">
                    <button className="subscribe" aria-label="subscribe"><small className="icon-subscribe"></small>
                        <span>Đăng Ký</span></button>
                    <a className="hotline" href="tel:090 886 0000" aria-label="hotline"></a> <a
                    className="facebook" href="https://www.facebook.com/alarictowerhomesweethome"
                    target="_blank" rel="noopener" aria-label="facebook"></a></div>
                <div className="left-header"><a href="tel:090 886 0000" className="hotline-text" aria-label="hotline">
                    090 886 0000</a>

                </div>
                <div className="overlay-menu">
                    <div className="bg-leaf"></div>
                </div>

            </header>
            <section class="container" id="home-page">
                <div class="title-page">
                    <h1>Alaric Tower</h1>
                </div>
                <div class="box-nav">
                    <ul>
                        <li>
                            <button class="click" data-page="home-banner" aria-label="click">00</button>
                            <span>Alaric Tower</span>
                        </li>
                        <li>
                            <button class="click" data-page="home-intro" aria-label="click">01</button>
                            <span>The Maris</span></li>
                        <li>
                            <button class="click" data-page="home-video" aria-label="click">02</button>
                            <span>Video</span></li>
                        <li>
                            <button class="click" data-page="home-location" aria-label="click">03</button>
                            <span>Vị trí</span></li>
                        <li>
                            <button class="click" data-page="home-masterplan" aria-label="click">04</button>
                            <span>Tổng thể</span></li>
                        <li>
                            <button class="click" data-page="home-facilities" aria-label="click">05</button>
                            <span>Tiện ích</span></li>
                        <li>
                            <button class="click" data-page="home-news" aria-label="click">06</button>
                            <span>Tin Tức</span></li>
                        <li>
                            <button class="click" data-page="home-library" aria-label="click">07</button>
                            <span>Thư viện</span></li>
                        <li>
                            <button class="click" data-page="home-contact" aria-label="click">08</button>
                            <span>Liên hệ</span></li>
                        <li>
                            <button class="click" data-page="page-register" aria-label="click">09</button>
                            <span>Đăng ký</span></li>
                    </ul>
                </div>
                <div class="box-slider">
                    <div class="group-central home-banner" data-name="home-banner">
                        <div class="bg-cover"
                             style="background-image:url(wp-content/themes/themaris/assets/images/bg.jpg);">
                        </div>
                        <div class="dot-ani">
                            <div class="dotx-01"></div>
                            <div class="dotx-02"></div>
                            <div class="dotx-03"></div>
                            <div class="dotx-04"></div>
                            <div class="dotx-05"></div>
                            <div class="dotx-06"></div>
                            <div class="dotx-07"></div>
                            <div class="dotx-08"></div>
                            <div class="dotx-09"></div>
                            <div class="dotx-10"></div>
                            <div class="dotx-11"></div>
                            <div class="dotx-12"></div>
                        </div>
                        <div class="mouse-wheel"><span></span></div>
                        <div class="logo-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 246 210">
                                <g class="lg-main">
                                    <lineargradient id="SVGID_1" gradientunits="userSpaceOnUse" x1="1" y1="7" x2="2"
                                                    y2="7"
                                                    gradienttransform="matrix(0 130 130 0 122 -205)">
                                        <stop offset="0" style="stop-color:#9C7F59"/>
                                        <stop offset="0.08" style="stop-color:#B19072"/>
                                        <stop offset="0.1" style="stop-color:#C9A491"/>
                                        <stop offset="0.15" style="stop-color:#DCB5AA"/>
                                        <stop offset="0.2" style="stop-color:#E9C0BA"/>
                                        <stop offset="0.25" style="stop-color:#EEC4C0"/>
                                        <stop offset="0.6" style="stop-color:#EDCBB1"/>
                                        <stop offset="0.65" style="stop-color:#DCBC9F"/>
                                        <stop offset="0.8" style="stop-color:#BA9B79"/>
                                        <stop offset="1" style="stop-color:#92774F"/>
                                    </lineargradient>
                                    <lineargradient id="SVGID_2" gradientunits="userSpaceOnUse" x1="1" y1="7" x2="2"
                                                    y2="7"
                                                    gradienttransform="matrix(0 140 40 0 100 -180)">
                                        <stop offset="0" style="stop-color:#9C7F59"/>
                                        <stop offset="0.08" style="stop-color:#B19072"/>
                                        <stop offset="0.1" style="stop-color:#C9A491"/>
                                        <stop offset="0.15" style="stop-color:#DCB5AA"/>
                                        <stop offset="0.2" style="stop-color:#E9C0BA"/>
                                        <stop offset="0.25" style="stop-color:#EEC4C0"/>
                                        <stop offset="0.6" style="stop-color:#EDCBB1"/>
                                        <stop offset="0.65" style="stop-color:#DCBC9F"/>
                                        <stop offset="0.8" style="stop-color:#BA9B79"/>
                                        <stop offset="1" style="stop-color:#92774F"/>
                                    </lineargradient>
                                    <path fill="url(#SVGID_1)" d="M143.3,23.7c-7.7-11.2-15.5-18.2-15.6-18.3l-5-4.4l-5,4.4c-0.1,0.1-7.9,7.1-15.6,18.3
C91.9,38.4,86.6,53.7,86.6,67.8c0,14.2,5.4,29.4,15.5,44.1c7.8,11.2,15.5,18.2,15.6,18.3l5,4.5l5-4.5c0.1-0.1,7.9-7,15.6-18.3
c10.1-14.7,15.5-29.9,15.5-44.1C158.8,53.7,153.4,38.4,143.3,23.7z M141.9,111c-7.6,11-15.3,17.9-15.4,18l-3.9,3.4l-3.9-3.4l0,0
c-0.1-0.1-7.7-6.9-15.3-18c-9.9-14.4-15.2-29.4-15.2-43.2c0-13.8,5.3-28.8,15.2-43.2c7.6-11,15.3-17.9,15.4-18l3.9-3.4l3.9,3.4
c0.1,0.1,7.8,7,15.4,18c9.9,14.4,15.2,29.4,15.2,43.2C157.1,81.7,151.8,96.6,141.9,111z"/>
                                    <path fill="url(#SVGID_2)"
                                          d="M124.5,8.8l-1.8-1.6l-1.8,1.6h0C120.7,9,113,15.9,105.5,27h0h0v0c-0.2,0.3-0.5,0.7-0.7,1
c0,0,1.1,0.4,2.3,1.3c0.3,0.2,0.6,0.5,0.8,0.8c1.5,1.5,2.6,4.1,0.8,7.9c-0.2,0.4-0.5,0.9-0.7,1.4c0,0,0,0,0,0
c-2.8,4.7-6.1,6.5-8.7,7.1c-0.4,0.1-0.7,0.2-1,0.2c-1.2,0.2-2.2,0.1-2.7,0c-0.1,0-0.2,0-0.3,0c-0.4,1.1-0.8,2.3-1.1,3.4
c0,0,0,0,0,0c-1.7,5.6-2.8,11.6-2.8,17.7c0,32.4,29.3,58.7,29.6,59l1.8,1.6l1.8-1.6c0.3-0.3,29.6-26.6,29.6-59S124.8,9.1,124.5,8.8
z M113.2,36.8c-0.3,4.7-2,9.2-4.9,13.1c-0.4,0-0.9,0-1.3-0.1c-1.4-0.1-2.8-0.3-4.2-0.6C107.5,47,111.5,42,113.2,36.8z M126.5,45.1
c-1.3,0.8-2.6,1.5-4,2c-0.2-4.5-1.5-8.9-4-12.8C122.2,37.2,124.9,40.9,126.5,45.1z M119,32.4c4.8,1.9,9,5.2,11.9,9.6
c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.2-0.4,0.3-0.6,0.5c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.2-0.5,0.3-0.7,0.5c-0.1,0.1-0.2,0.2-0.4,0.3
c-0.1,0.1-0.2,0.1-0.3,0.2C126.2,39.4,123.1,35.4,119,32.4z M120.7,47.9c-1.3,0.5-2.6,0.9-4,1.2c1.3-4.8,1.2-9.8-0.2-14.4
C119.2,38.5,120.7,43.1,120.7,47.9z M124.2,50.3l0.2-0.1c0.2-0.1,0.4-0.2,0.6-0.3c1-0.4,1.9-0.9,2.8-1.5c0.1,0,0.1-0.1,0.1-0.1
c0.3-0.1,0.5-0.3,0.8-0.5c0.3-0.2,0.6-0.4,1-0.6c0,0,0,0,0,0c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.3-0.2,0.4-0.3
c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.4-0.3,0.6-0.5c0.1,0,0.1-0.1,0.2-0.1c0.3-0.2,0.6-0.4,0.8-0.7c0,0,0,0,0,0
c0.2,0.4,0.3,0.8,0.5,1.1c0.5,1.2,0.8,2.3,1.1,3.5c-11.7,3.7-19.6,9.9-23.4,18.3c-3.2,7.1-2.9,14.5-1.8,20.2
c-1.1-2.6-1.8-5.4-2.1-8.3c-0.2-1.7-0.2-3.4-0.1-5C107.7,64.4,114.4,54.9,124.2,50.3z M113.7,90.5c-1.3-12,2.4-25,20.7-31.6
c-0.3,1.8-0.8,3.5-1.5,5.1C115.8,69.7,113.4,82.6,113.7,90.5z M131.7,66.3c0,0-0.8,2.6-7.8,8.3c-7,5.7-7.9,9.5-7.9,9.5
c0.2-2.3,1.1-4.5,2.1-6.4c0.9-1.7,2-3.3,3.2-4.7c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0l0,0
C124.1,70.1,127.5,68,131.7,66.3L131.7,66.3z M112.1,93c-1.8-5.6-3.6-15.2,0.4-24.1c3.5-7.9,10.9-13.7,22-17.2
c0.2,1.6,0.3,3.3,0.1,4.9c0,0.1,0,0.3,0,0.4C113.2,64.2,110,79.5,112.1,93z M114.8,49.4c-1.4,0.2-2.8,0.4-4.2,0.4
c2.8-4.2,4.4-9.1,4.5-14C116.2,40.3,116.2,45,114.8,49.4z M122.7,123.5c-4.5-4.3-27.6-27.8-27.6-55.6c0-5.6,1-11.1,2.5-16.3
c2.9,1,6,1.6,9.1,1.8c0.9,0.1,1.8,0.1,2.6,0.1c1.5,0,2.9-0.1,4.4-0.3c-6,5.6-9.9,13.3-10.5,21.6c-0.1,1.9-0.1,3.8,0.1,5.6
c1.2,12,8.9,22.4,20.3,27.3c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.1,0,0.2,0.1l0,0c1.6,0.6,3.4,0.9,5.1,0.9c2.4,0,4.8-0.6,6.9-1.8
c0,0,0,0,0,0c0,0,0,0,0,0C130.6,115.6,124.7,121.5,122.7,123.5z M142.3,97.4C142.3,97.4,142.3,97.4,142.3,97.4
c0-2.3-0.8-4.6-2.2-6.5c-1.9-2.4-4.7-3.7-7.7-3.7c-2,0-3.9,0.6-5.6,1.8c-3.5,2.5-4.3,7.4-1.7,10.8c1.1,1.4,2.6,2.3,4.4,2.6
c1.8,0.3,3.6-0.2,5-1.2c0.8-0.6,1-1.7,0.4-2.5c-0.6-0.8-1.7-1-2.6-0.4c-0.7,0.5-1.5,0.7-2.3,0.6c-0.8-0.1-1.5-0.5-2-1.2
c-1.4-1.8-1-4.5,0.9-5.8c2.6-1.8,6.2-1.3,8.2,1.2c1.2,1.6,1.7,3.6,1.4,5.6c-0.2,1.5-0.9,2.8-1.9,3.9c0,0-0.1,0.1-0.1,0.1
c-0.1,0.1-0.3,0.3-0.4,0.4c-3.6,3.2-11.5,4-16.2-4.5c-0.3-0.6-0.6-1.1-0.8-1.7c-3.7-9.5,1.9-14.3,10.3-22.1h0c0,0,0,0,0,0
c8.4-7.8,8.9-16.8,8.9-16.8h0c0.6-4.5-0.1-9.7-2.9-15.3c-0.5-1.1-1.1-2.1-1.8-3.1l-0.1-0.1l0,0c-6.8-10.3-17.5-12.3-23.5-12.5
c5.4-7.6,10.7-12.9,12.6-14.7c4.5,4.3,27.6,27.8,27.6,55.6C150.3,78.6,146.8,88.8,142.3,97.4C142.3,97.4,142.3,97.4,142.3,97.4z"/>
                                </g>
                                <g class="lg-maris">
                                    <path fill="#FFFFFF" d="M6.8,171.1v-1.4h1.5c1.5,0,2.1-0.2,2.4-0.8c0.4-0.7,0.4-2,0.4-4.2V148H6.3c-2.7,0-3.1,1.2-4,4.7l-0.1,0.2H1
l0.1-6.3h24.1l0.2,6.3H24v-0.2c-0.8-4.7-2.3-4.7-5.2-4.7h-3.6v16.6c0,4.7,0,5.1,2.8,5.1h1.5v1.4H6.8z"/>
                                    <path fill="#FFFFFF"
                                          d="M47.1,171.1v-1.4h1.1c1.5,0,2.1-0.2,2.4-0.8c0.3-0.7,0.3-2,0.3-4.2V159H39v5.5c0,4.7,0,5.1,2.8,5.1h0.9v1.4
H31.2v-1.4h0.9c2.8,0,2.8-0.5,2.8-5.1v-11.8c0-4.9,0-4.9-3.4-4.9h-0.3v-1.4h11.5v1.4h-0.3c-3.4,0-3.4,0-3.4,4.9v4.4h12v-4.4
c0-4.8,0-4.9-2.9-4.9h-1v-1.4h11.6v1.4h-0.3c-3.3,0-3.3,0-3.3,4.9v11.8c0,4.7,0,5.1,2.8,5.1h0.8v1.4L47.1,171.1L47.1,171.1z"/>
                                    <path fill="#FFFFFF" d="M66,171.1v-1.4h0.8c2.9,0,2.9-0.5,2.9-5.1v-11.8c0-4.8-0.1-4.9-2.9-4.9h-0.3v-1.4h17.9l0.6,6.6h-1.4
l-0.1-0.2c-1.1-4.9-2.8-4.9-6.7-4.9h-3.1v9.5H76c3.2,0,3.3-0.6,3.3-3.3v-0.3h1.4v8.8h-1.4v-0.3c0-3.5-0.7-3.5-3.3-3.5h-2.3v5.4
c0,5.5,0.2,5.5,3.3,5.5h1.8c2,0,5.4,0,7-6.4l0.1-0.2h1.4l-0.6,8H66V171.1z"/>
                                    <path fill="#FFFFFF" d="M126,171.1v-1.4h1.1c2.8,0,2.8-0.5,2.8-5.1v-14l-9.1,20.5h-1.2l-9.2-20.5v14.7c0,3,0.9,4.2,3.6,4.4h0.3v1.4
h-9.2v-1.4h0.3c2-0.2,3.6-0.7,3.6-4.7v-12.2c0-4.8,0-4.9-2.9-4.9h-1v-1.4h7.8l8.7,19.4l8.6-19.4h8v1.4H137c-2.9,0-3,0-3,4.9v11.8
c0,4.7,0,5.1,2.8,5.1h1.4v1.4H126z"/>
                                    <path fill="#FFFFFF" d="M159.7,171.3v-1.4h0.6c0.8,0,1.4,0,1.9-0.2c0.4-0.1,0.6-0.4,0.6-0.9c0-0.3-0.2-0.9-0.4-1.4l-2.1-5.1h-8.8
l-1.4,3.3c-0.2,0.6-0.6,1.7-0.6,2.2c0,0.9,0.6,2,2.3,2h0.3v1.4h-7.8v-1.4h0.3c0.6,0,2.2-0.3,3.2-2.7l8.8-20.8h1.1l9,21
c0.6,1.3,1.2,2.5,3,2.5h0.3v1.4L159.7,171.3L159.7,171.3z M159.5,161.1l-3.8-9.2l-3.8,9.2H159.5z"/>
                                    <path fill="#FFFFFF" d="M195.4,171.1L195.4,171.1c-0.7-0.5-1.7-1.3-3.4-3.6l-3.8-5.2c-2.1-2.8-2.7-2.8-4-2.8H184v5.2
c0,2.2,0,3.5,0.3,4.2c0.3,0.6,0.9,0.8,2.4,0.8h1.5v1.4H176v-1.4h1.1c2.8,0,2.8-0.5,2.8-5.1v-11.8c0-4.9-0.1-4.9-3-4.9h-0.7v-1.4
h0.3c2.6-0.2,6.6-0.3,9-0.3h0.2c6.8,0,10.5,2.3,10.5,6.5c0,3.2-2.4,5.6-6.5,6.2c1.4,0.9,2.9,3,2.9,3l3.1,4c1.4,1.8,3.3,3.8,6.2,3.8
h0.3v1.4L195.4,171.1L195.4,171.1z M185.7,158.1c4.2,0,6-1.5,6-5.1c0-4.4-2.5-5.3-6.5-5.3c-0.5,0-0.9,0-1.2,0.1v10.4L185.7,158.1
L185.7,158.1z"/>
                                    <path fill="#FFFFFF" d="M207.8,171.1v-1.4h1c2.8,0,2.8-0.5,2.8-5.1v-11.8c0-4.8-0.1-4.9-3-4.9h-0.8v-1.4h11.6v1.4h-0.8
c-2.9,0-3,0-3,4.9v11.8c0,4.7,0,5.1,2.8,5.1h1v1.4H207.8z"/>
                                    <path fill="#FFFFFF" d="M236.3,171.5c-3.3,0-5.5-1.6-6.6-2.8c-0.2,0.3-0.4,0.9-0.6,1.9v0.2h-1.4v-8.3h1.4v0.2
c1,4.8,3.3,7.3,6.9,7.3c3.3,0,5.1-2.3,5.1-4.4c0-3-2.9-4.2-5.3-5.2l-0.5-0.2c-3.7-1.6-7.5-3.3-7.5-7.9c0-3.1,2.3-6.2,6.7-6.2
c3.1,0,4.7,1.4,5.6,2.4c0.5-0.7,0.6-1.3,0.7-1.6v-0.2l0.3-0.1h1.1v6.8h-1.3l-0.1-0.2c-1.3-5.2-5-5.6-6.2-5.6
c-2.7,0-3.9,1.7-3.9,3.4c0,2.5,2.4,3.8,5.6,5.1c4.9,2.1,7.9,3.7,7.9,8.3C244.2,167.7,242.1,171.5,236.3,171.5"/>
                                </g>
                                <g class="lg-vungtau">
                                    <path fill="#FFFFFF" d="M89.1,185.5c0-0.8-0.4-1.3-1.2-1.3c-0.6,0-0.9,0.1-1.2,0.5c-0.2,0.3-0.4,0.7-0.4,1.1c0,0.4-0.1,1.1-0.3,1.9
c-0.1,0.8-0.3,1.8-0.5,2.8s-0.5,2-0.8,3.1c-0.3,1-0.7,1.9-1,2.7c-0.6,1.3-1,2.2-2,2.2c-0.7,0-1.1-0.7-1.6-1.9
c-1.3-3.3-2.3-6.8-3-10.4c-0.2-1-0.7-1.3-1.2-1.3s-1,0.2-1.3,0.5s-0.5,0.8-0.5,1.3c0,0.3,0,0.6,0.1,0.9c0.2,1.4,0.7,3.4,1.4,5.5
c0.6,2,1.4,4.2,2.3,5.9c0.5,1,1,1.7,1.4,2.3c0.5,0.6,1.1,0.9,1.8,0.9c1.8,0,3.1-1.8,4.4-4.2c2.1-3.9,3.4-9.2,3.7-11.8
C89.1,185.9,89.1,185.6,89.1,185.5z"/>
                                    <path fill="#FFFFFF" d="M129.6,195.4c-2.7,0-2.2,3.5-4.9,3.5c-1.4,0-2-1.7-2-2.8c0-0.8,0.2-1.5,0.7-2s1.1-0.8,1.9-0.8
c0.6,0,1,0.1,1.3,0.3s0.7,0.5,1.1,0.9c0.2,0.2,0.6,0.4,0.9,0.4c0.9,0,1.4-0.7,1.4-1.7c0-1.3-1.6-2.7-3.8-2.7c-1.4,0-2.9,0.8-4.1,2
c-0.8,0.8-1.4,1.8-1.7,2.9l-0.4,1c-0.4,0.9-0.5,1.8-1.5,1.8c-1.6,0-1.4-6.3-4.1-6.3c-1.5,0-2.5,1.4-3.1,2.8
c-0.6,1.4-1.1,2.7-1.7,2.8c-1.3,0-1.7-6.4-4.2-6.4c-1.8,0-3.1,1.8-4.4,5.6c-0.4,1-0.7,1.8-1.7,1.8c-0.9,0-0.9-1.2-1-3
c-0.1-2.3,0.1-3.5-1.2-3.5c-1.8,0-1.7,1-2,3.3c-0.5,3.2-1.3,3.5-2.2,3.5c-1.1,0-1.4-1.3-1.4-2.8c0-0.9,0.1-1.9,0.1-2.6v-0.1
c0-0.4-0.1-0.7-0.2-1c-0.2-0.3-0.5-0.5-1.1-0.5s-1.5,0.2-1.7,1.4c-0.1,1-0.2,2.3-0.2,3.5c0,2.9,0.7,5.1,3.4,5.1
c2.3,0,3.1-2.1,3.6-3.1c0.2-0.4,0.2-0.5,0.4-0.5c0.1,0,0.2,0.1,0.3,0.4c0.1,0.9,0.2,2.7,2.3,2.7c1.3,0,2.3-0.9,3.1-2.5
c0.2-0.5,0.4-1,0.6-1.5c0-0.1,0.1-0.2,0.1-0.3c0.5-1.2,0.8-1.9,1.8-1.9c2,0,1.8,6.3,4.4,6.3c2.2,0,3.2-5.7,4.9-5.7
c0.9,0,1.3,1.3,1.7,2.7c0.4,1.3,1,2.7,2.5,2.7c1.2,0,2.1-0.7,2.8-2.1c0.5,1.9,1.9,2.9,3.3,2.9c2.3,0,3.5-2,4.1-3.2
c0.1-0.2,0.2-0.3,0.3-0.3c0.3,0,0.3,0.6,0.3,1.9c0,4.1-1.2,5.6-3.7,5.6c-1.6,0-2.4-0.7-3.2-0.7c-0.8,0-1.2,0.6-1.2,1.4
c0,1.6,1.8,1.8,3.6,1.8c3.4,0,7-3,7-8.1C131.1,197.9,131.1,195.4,129.6,195.4z"/>
                                    <path fill="#FFFFFF" d="M147.5,187.1c0.5,0,0.9-0.2,1.1-0.6c0.3-0.4,0.4-0.9,0.4-1.4s-0.3-1-1.1-1.1s-1.7-0.2-2.7-0.2
c-4,0-9.4,0.9-12.2,2.3c-0.6,0.3-0.9,0.8-0.9,1.2c0,0.6,0.3,1,0.9,1c0.2,0,0.5-0.1,0.9-0.2c0.4-0.1,0.7-0.3,1-0.3
c1.2-0.4,2.9-0.7,4.4-0.9c-0.5,1.4-0.9,3-1.2,4.9c-0.3,1.8-0.4,3.7-0.4,5.5c0,1,0,2,0.1,3c0.1,1.1,0.5,1.5,1.3,1.5
c0.3,0,0.5,0,0.8-0.1c0.5-0.1,1-0.6,1-1.2c0-0.7,0-1.8-0.1-2.6c-0.1-1.2-0.1-2.4-0.1-3.8c0-2.5,0.2-5.2,1.1-7.4
C145.4,186.7,146.6,187.1,147.5,187.1z"/>
                                    <path fill="#FFFFFF" d="M170.7,194.5c-0.3,0-0.5,0.2-0.6,0.5l-0.5,1.2c-0.4,1.1-0.7,2-1.7,2c-0.9,0-0.9-1.2-1-3
c-0.1-2.3,0.1-3.5-1.2-3.5c-1.8,0-1.7,1-2,3.3c-0.5,3.2-1.3,3.5-2.2,3.5c-1.1,0-1.4-1.3-1.4-2.8c0-0.9,0.1-1.9,0.1-2.6V193
c0-0.4-0.1-0.7-0.2-1c-0.2-0.3-0.5-0.5-1.1-0.5s-1.5,0.2-1.7,1.4c-0.1,0.7-0.2,1.5-0.2,2.4l-0.4,1c-0.2,0.5-0.4,1-0.6,1.4
c-0.2,0.4-0.5,0.6-0.9,0.6c-0.8,0-1.3-2.1-1.8-3.3c-0.2-0.5-0.6-0.7-1-0.7s-0.8,0.2-1.1,0.6c-0.9,1.6-1.2,3.8-3.4,3.8
c-1.4,0-2.1-1.5-2.1-2.7c0-1.5,1.1-2.9,2.5-2.9s2.2,0.5,3.1,0.5c1,0,1.4-0.7,1.4-1.7c0-1.3-1.6-1.6-2.9-1.6c-3.3,0-6.8,3-6.8,6.6
c0,3.1,1.7,4.7,3.5,4.7c2.6,0,3.6-2.4,4.4-3.6c0.2-0.3,0.3-0.5,0.5-0.5c0.3,0,0.3,0.2,0.5,0.5c0.6,1.4,1,3,2.4,3
c1.1,0,2-0.9,2.8-2.5c0,0,0-0.1,0.1-0.1c0.3,1.8,1.2,3.1,3.2,3.1c2.3,0,3.1-2.1,3.6-3.1c0.2-0.4,0.2-0.5,0.4-0.5
c0.1,0,0.2,0.1,0.3,0.4c0.1,0.9,0.2,2.7,2.3,2.7c1.3,0,2.3-0.9,3.1-2.5c0.4-0.8,0.8-1.9,1.2-3.1c0.1-0.2,0.1-0.3,0.1-0.4
C171.3,194.7,171,194.5,170.7,194.5z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="group-central home-intro" data-name="home-intro">
                        <div class="slide-mask" data-time="5000">
                            <div class="bg-home"
                                 style="background-image:url(wp-content/uploads/2022/09/maris-4.jpg)">
                            </div>
                            <div class="bg-home"
                                 style="background-image:url(wp-content/uploads/2022/09/maris.jpg)">
                            </div>
                            <div class="bg-home"
                                 style="background-image:url(wp-content/uploads/2022/09/maris-8.jpg)">
                            </div>
                            <div class="bg-home"
                                 style="background-image:url(wp-content/uploads/2022/09/maris-5.jpg)">
                            </div>
                        </div>
                    </div>
                    <div class="group-central home-video" data-name="home-video">
                        <div class="box-video-center">
                            <div class="video-youtube-full">
                                <div class="control-youtube">
                                    <button class="play-button" type="button" id="Play" aria-label="play"></button>
                                    <button class="pause-button" type="button" id="Pause" aria-label="pause"></button>
                                </div>
                                <div class="bg-video"
                                     style="background-image:url(wp-content/themes/themaris/assets/images/video-1.jpg)">
                                </div>
                                <div class="youtube-video"
                                     data-embed="https://www.youtube.com/watch?v=K7qfz5kxAtk"></div>
                                <div class="control"><span id="current-time">0:00</span><span>/</span><span
                                    id="duration">0:00</span>
                                    <button id="playpause" type="button" data-state="play" aria-label="play"></button>
                                    <button id="mutetoggle"
                                            type="button" data-state="mute" aria-label="mute"></button>
                                    <button id="fullscreen" type="button"
                                            data-state="go-fullscreen" aria-label="fullscreen"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-central home-location" data-name="home-location">
                        <div class="map-mobile">
                            <div class="compass"></div>
                            <div class="map-img"
                                 style="background-image:url(wp-content/themes/themaris/assets/images/image-map.jpg)">
                                <a class="pointer-map" href="vi-tri"
                                   aria-label="location">
                                    <div class="pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 150 190">
                                            <path
                                                d="M64.2,39.6c-5.5,0-10.8,0.7-15.9,2.1l-26.2-38L24.9,54l0,0c-13,11.1-21.3,27.6-21.3,46.1 c0,33.5,27.1,60.6,60.6,60.6s60.6-27.1,60.6-60.6S97.7,39.6,64.2,39.6z"/>
                                        </svg>
                                    </div>
                                </a>
                                <img src="assets/images/map.svg" alt="Vị trí"/>
                                <svg class="map-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     viewbox="0 0 2000 1200">
                                    <lineargradient id="gradient2" gradienttransform="rotate(90)">
                                        <stop offset="0" style="stop-color:#c6161d"/>
                                        <stop offset="1" style="stop-color:#f8971d"/>
                                    </lineargradient>
                                    <polygon class="center-map" fill="#DF5E3E"
                                             points="1177.1,456.9 1149.3,421.6 1118.2,442.5 1143.5,477.3"/>
                                    <g class="dot-top">
                                        <g class="dot-p" data-dot="dot-01">
                                            <path class="st0"
                                                  d="M940.1,554.8c-6.9,0.1-12.5,5.5-12.4,12.2c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.3-22.4 C952.6,560,947,554.7,940.1,554.8z"/>
                                            <text transform="matrix(1 0 0 1 931 573)">01</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-02">
                                            <path class="st0"
                                                  d="M791.4,461c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C803.9,466.3,798.2,461,791.4,461z"/>
                                            <text transform="matrix(1 0 0 1 782 479)">02</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-03">
                                            <path class="st0"
                                                  d="M749.7,360.3c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4	C762.3,365.6,756.6,360.2,749.7,360.3z"/>
                                            <text transform="matrix(1 0 0 1 741 378)">03</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-04">
                                            <path class="st0"
                                                  d="M556.5,467.9c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4	C569.1,473.2,563.4,467.9,556.5,467.9z"/>
                                            <text transform="matrix(1 0 0 1 547 486)">04</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-05">
                                            <path class="st0"
                                                  d="M432.8,433.7c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C445.3,439,439.6,433.6,432.8,433.7z"/>
                                            <text transform="matrix(1 0 0 1 423 451)">05</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-06">
                                            <path class="st0"
                                                  d="M527,610.4c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C539.6,615.7,533.9,610.3,527,610.4z"/>
                                            <text transform="matrix(1 0 0 1 518 628)">06</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-07">
                                            <path class="st0"
                                                  d="M581.5,599c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C594,604.3,588.3,598.9,581.5,599z"/>
                                            <text transform="matrix(1 0 0 1 572 617)">07</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-08">
                                            <path class="st0"
                                                  d="M589.2,660c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C601.8,665.3,596.1,659.9,589.2,660z"/>
                                            <text transform="matrix(1 0 0 1 580 678)">08</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-09">
                                            <path class="st0"
                                                  d="M538.1,680.3c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C550.6,685.6,544.9,680.2,538.1,680.3z"/>
                                            <text transform="matrix(1 0 0 1 529 698)">09</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-10">
                                            <path class="st0"
                                                  d="M586.3,769.6c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C598.9,774.9,593.2,769.6,586.3,769.6z"/>
                                            <text transform="matrix(1 0 0 1 578 787)">10</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-11">
                                            <path class="st0"
                                                  d="M601,833.5c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C613.6,838.8,607.9,833.5,601,833.5z"/>
                                            <text transform="matrix(1 0 0 1 594 851)">11</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-12">
                                            <path class="st0"
                                                  d="M729.1,747c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C741.7,752.3,736,746.9,729.1,747z"/>
                                            <text transform="matrix(1 0 0 1 721 765)">12</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-13">
                                            <path class="st0"
                                                  d="M696.9,921.9c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C709.5,927.2,703.8,921.8,696.9,921.9z"/>
                                            <text transform="matrix(1 0 0 1 689 940)">13</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-14">
                                            <path class="st0"
                                                  d="M682,986.7c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C694.6,992,688.9,986.6,682,986.7z"/>
                                            <text transform="matrix(1 0 0 1 674 1005)">14</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-15">
                                            <path class="st0"
                                                  d="M746.4,939.6c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C759,944.9,753.3,939.5,746.4,939.6z"/>
                                            <text transform="matrix(1 0 0 1 738 957)">15</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-16">
                                            <path class="st0"
                                                  d="M811.8,572.4c-6.9,0.1-12.5,5.5-12.4,12.2c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.3-22.4 C824.4,577.6,818.7,572.3,811.8,572.4z"/>
                                            <text transform="matrix(1 0 0 1 804 590)">16</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-17">
                                            <path class="st0"
                                                  d="M567,882.9c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C579.5,888.2,573.8,882.8,567,882.9	z"/>
                                            <text transform="matrix(1 0 0 1 560 901)">17</text>
                                        </g>
                                        <g class="dot-p" data-dot="dot-18">
                                            <path class="st0"
                                                  d="M491.3,699c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C503.8,704.3,498.1,698.9,491.3,699 z"/>
                                            <text transform="matrix(1 0 0 1 484 717)">18</text>
                                        </g>
                                    </g>
                                </svg>
                            </div>

                        </div>
                        <div class="box-cover-right">
                            <div class="viewer">
                                <div class="compass"></div>
                                <div class="panzoom">
                                    <div class="map-img"
                                         style="background-image:url(wp-content/themes/themaris/assets/images/image-map.jpg)">
                                        <a class="pointer-map" href="vi-tri"
                                           aria-label="location">
                                            <h3>xem chi tiết</h3>
                                            <div class="pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                     viewbox="0 0 150 190">
                                                    <path
                                                        d="M64.2,39.6c-5.5,0-10.8,0.7-15.9,2.1l-26.2-38L24.9,54l0,0c-13,11.1-21.3,27.6-21.3,46.1 c0,33.5,27.1,60.6,60.6,60.6s60.6-27.1,60.6-60.6S97.7,39.6,64.2,39.6z"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <img src="assets/images/map.svg" alt="Vị trí"/>
                                        <svg class="map-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             viewbox="0 0 2000 1200">
                                            <lineargradient id="gradient" gradienttransform="rotate(90)">
                                                <stop offset="0" style="stop-color:#c6161d"/>
                                                <stop offset="1" style="stop-color:#f8971d"/>
                                            </lineargradient>
                                            <polygon class="center-map" fill="#DF5E3E"
                                                     points="1177.1,456.9 1149.3,421.6 1118.2,442.5 1143.5,477.3"/>
                                            <g class="dot-top">
                                                <g class="dot-p" data-dot="dot-01">
                                                    <path class="st0"
                                                          d="M940.1,554.8c-6.9,0.1-12.5,5.5-12.4,12.2c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.3-22.4 C952.6,560,947,554.7,940.1,554.8z"/>
                                                    <text transform="matrix(1 0 0 1 931 573)">01</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-02">
                                                    <path class="st0"
                                                          d="M791.4,461c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C803.9,466.3,798.2,461,791.4,461z"/>
                                                    <text transform="matrix(1 0 0 1 782 479)">02</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-03">
                                                    <path class="st0"
                                                          d="M749.7,360.3c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4	C762.3,365.6,756.6,360.2,749.7,360.3z"/>
                                                    <text transform="matrix(1 0 0 1 741 378)">03</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-04">
                                                    <path class="st0"
                                                          d="M556.5,467.9c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4	C569.1,473.2,563.4,467.9,556.5,467.9z"/>
                                                    <text transform="matrix(1 0 0 1 547 486)">04</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-05">
                                                    <path class="st0"
                                                          d="M432.8,433.7c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C445.3,439,439.6,433.6,432.8,433.7z"/>
                                                    <text transform="matrix(1 0 0 1 423 451)">05</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-06">
                                                    <path class="st0"
                                                          d="M527,610.4c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C539.6,615.7,533.9,610.3,527,610.4z"/>
                                                    <text transform="matrix(1 0 0 1 518 628)">06</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-07">
                                                    <path class="st0"
                                                          d="M581.5,599c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C594,604.3,588.3,598.9,581.5,599z"/>
                                                    <text transform="matrix(1 0 0 1 572 617)">07</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-08">
                                                    <path class="st0"
                                                          d="M589.2,660c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C601.8,665.3,596.1,659.9,589.2,660z"/>
                                                    <text transform="matrix(1 0 0 1 580 678)">08</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-09">
                                                    <path class="st0"
                                                          d="M538.1,680.3c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C550.6,685.6,544.9,680.2,538.1,680.3z"/>
                                                    <text transform="matrix(1 0 0 1 529 698)">09</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-10">
                                                    <path class="st0"
                                                          d="M586.3,769.6c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C598.9,774.9,593.2,769.6,586.3,769.6z"/>
                                                    <text transform="matrix(1 0 0 1 578 787)">10</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-11">
                                                    <path class="st0"
                                                          d="M601,833.5c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C613.6,838.8,607.9,833.5,601,833.5z"/>
                                                    <text transform="matrix(1 0 0 1 594 851)">11</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-12">
                                                    <path class="st0"
                                                          d="M729.1,747c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C741.7,752.3,736,746.9,729.1,747z"/>
                                                    <text transform="matrix(1 0 0 1 721 765)">12</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-13">
                                                    <path class="st0"
                                                          d="M696.9,921.9c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C709.5,927.2,703.8,921.8,696.9,921.9z"/>
                                                    <text transform="matrix(1 0 0 1 689 940)">13</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-14">
                                                    <path class="st0"
                                                          d="M682,986.7c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C694.6,992,688.9,986.6,682,986.7z"/>
                                                    <text transform="matrix(1 0 0 1 674 1005)">14</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-15">
                                                    <path class="st0"
                                                          d="M746.4,939.6c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4 C759,944.9,753.3,939.5,746.4,939.6z"/>
                                                    <text transform="matrix(1 0 0 1 738 957)">15</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-16">
                                                    <path class="st0"
                                                          d="M811.8,572.4c-6.9,0.1-12.5,5.5-12.4,12.2c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.3-22.4 C824.4,577.6,818.7,572.3,811.8,572.4z"/>
                                                    <text transform="matrix(1 0 0 1 804 590)">16</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-17">
                                                    <path class="st0"
                                                          d="M567,882.9c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C579.5,888.2,573.8,882.8,567,882.9	z"/>
                                                    <text transform="matrix(1 0 0 1 560 901)">17</text>
                                                </g>
                                                <g class="dot-p" data-dot="dot-18">
                                                    <path class="st0"
                                                          d="M491.3,699c-7,0.1-12.5,5.5-12.4,12.1c0.1,9.8,12.7,22.2,12.7,22.2s12.4-12.6,12.2-22.4C503.8,704.3,498.1,698.9,491.3,699 z"/>
                                                    <text transform="matrix(1 0 0 1 484 717)">18</text>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="description-map white">
                            <div class="title-main">
                                <h2>Vị Trí The Maris</h2>
                            </div>
                            <ul>
                                <li><span class="yellow">01</span>
                                    <p>Sân Golf Paradise Vũng Tàu</p>
                                </li>
                                <li><span class="yellow">02</span>
                                    <p>Cảng Hàng Không Sân Bay Vũng Tàu</p>
                                </li>
                                <li><span class="yellow">03</span>
                                    <p>Cảng VietsoVPetro</p>
                                </li>
                                <li><span class="yellow">04</span>
                                    <p>Thích Ca Phật Đài</p>
                                </li>
                                <li><span class="yellow">05</span>
                                    <p>Chùa Phổ Đà</p>
                                </li>
                                <li><span class="yellow">06</span>
                                    <p>Khu Du Lịch Hồ Mây</p>
                                </li>
                                <li><span class="yellow">07</span>
                                    <p>Thiền Viện Chơn Không</p>
                                </li>
                                <li><span class="yellow">08</span>
                                    <p>SVD Lam Sơn - Trường Đua Chó</p>
                                </li>
                                <li><span class="yellow">09</span>
                                    <p>Bạch Dinh</p>
                                </li>
                            </ul>
                            <ul>
                                <li><span class="yellow">10</span>
                                    <p>Công Viên Bãi Trước</p>
                                </li>
                                <li><span class="yellow">11</span>
                                    <p>Hải Đăng</p>
                                </li>
                                <li><span class="yellow">12</span>
                                    <p>Hồ Bàu Sen</p>
                                </li>
                                <li><span class="yellow">13</span>
                                    <p>Tượng Núi Chúa</p>
                                </li>
                                <li><span class="yellow">14</span>
                                    <p>Mũi Nghinh Phong</p>
                                </li>
                                <li><span class="yellow">15</span>
                                    <p>Hòn Bà</p>
                                </li>
                                <li><span class="yellow">16</span>
                                    <p>Nhà Thi Đấu TDTT</p>
                                </li>
                                <li><span class="yellow">17</span>
                                    <p>Bến Tàu Cánh Ngầm</p>
                                </li>
                                <li><span class="yellow">18</span>
                                    <p>Bến Tàu Greenlines</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="group-central home-masterplan" data-name="home-masterplan">
                        <div class="apartment-map">
                            <div class="apartment-bg"
                                 style="background-image:url(wp-content/themes/themaris/assets/images/masterplan.jpg)">
                                <div class="all-dot">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 2600 1600">
                                        <g class="hover-block" data-block="block-1">
                                            <path
                                                d="M808.4,740.1 781.1,768.7 740,779.9 687.2,781.1 687.7,766 669.5,765.8 669.2,698.4 683.6,686.2 683.6,574.3 680.7,574.1 680.7,566.9 709.2,548.9 709.1,539.3 720.9,532 721.9,526.4 745.3,508.2 753.2,507.6 762.7,502.3 762.3,482.5 765.8,482.5 765.3,473 821.5,443.7 883.4,446.1 882.8,586.1 886.2,589.4 886.2,618.2 902.2,637.9 897,645.7z"/>
                                        </g>
                                        <g class="hover-block disable-link" data-block="block-2">
                                            <path
                                                d="M1264.2,523.2l-0.2-25.2l-7.5-2l-0.1-6.1l12.8-4.5  l0.5-105.5l7.9-6.5l12.4-6.6l137.6,2l20.7-3.6l29.1-0.6l29.1,1.8c0,0,12.6,4.1,13.1,4.1c0.5,0,113.3-4.8,113.3-4.8l39.3,7.3l3.9,7.8 l-0.3,106.9l11.2,5.4l0.3,19.1l-29.2,20.7l-80.9,7.3l-124.5,6.5l-103.2-1.5l-16-7.1l-22.1-1.4l-10.5-5.1l-0.3-7.2L1264.2,523.2z"/>
                                        </g>
                                        <g class="hover-block disable-link" data-block="block-3">
                                            <path
                                                d="M1710.3,539.2 1770.7,618 1771.4,424.8 1816.6,424.2 1816,415.4 1797.3,395.4 1791.8,395.6 1768.5,380.4 1713.6,380.6 1713.6,385.3 1715.7,493.1 1710.6,493.9z"/>
                                        </g>
                                        <g class="hover-block disable-link" data-block="block-4">
                                            <path
                                                d="M1770.8,618.6 1771.4,424.8 1833.5,423.6 1872.5,449.1 1872.3,473.7 1881.9,476.8 1893.9,486.1 1893.7,492.1 1909.5,503 1908.7,510.5 1932.4,531.7 1929.9,537.6 1929.9,642 1943.6,654.2 1942.4,715.4 1889.9,722.3 1850.5,722.9z"/>
                                        </g>
                                        <g class="hover-block" data-block="block-5">
                                            <path
                                                d="M1547.9,914.5c6.6,8.8,15.9,20.1,25.2,25.2 c41.7,23.3,147,38.6,194.5,42.8c50.2,4.5,130.5,5,180.2-3.6c47.3-8.2,208.5-54.4,208.5-54.4l-20.9-26.9l-25.7-1.7l0.5-26.7l-72.7-71 l-104.8,9.6l2.8,30.7c0,0-26.9,12.7-37,15.7c-14.4,4.4-46.2,9.4-61,11.3c-31.2,3.9-93.9,8.8-125.4,9.3 c-44.8,0.7-178.8-8.3-178.8-8.3S1534.6,897,1547.9,914.5z"/>
                                        </g>
                                        <g class="hover-block" data-block="block-8">
                                            <path
                                                d="M1249.6,861.5l-229.5,15.7l-188.9-1.3l-24-12l20.8-58l-35.4-17l-13.2-7.9l-91.6-0.1V766l-25.3-0.5
l-50.9,31.1l-9.6,9.6l-5.6,12.8l-11.8,13.8l-13.1-0.8l-9.9,8.6l-7.1,14.6l0.3,19.4l-25.4-0.7l-30.9,53.8l0.9,34.3l66-8.5
c0,0,121.9,31.1,164.2,35.8c52.4,5.9,158.4,0.6,211.1-1.2c40.5-1.4,121.8-5.4,162-10.8c50.6-6.9,169-12.6,202.2-51.9 c10.7-12.7,6.3-55.6,5-66.3L1249.6,861.5z"/>
                                        </g>
                                        <g class="hover-block" data-block="block-6">
                                            <path
                                                d="M1489.5,858.4c0,0,41,11.6,132,13.9
c50.4,1.3,109.5,7.9,205.7-5c26-3.5,76.3-14.6,76.3-14.6L1831.9,752l-59.7-91l-30.6-15.4l-42.8,5.4l-125.1,14.2l-90.8,7.2 l-28.4,28.1c0,0,13,18.3,25.9,45.6C1502.6,792.5,1489.5,858.4,1489.5,858.4z"/>
                                        </g>
                                        <g class="hover-block" data-block="block-7">
                                            <path
                                                d="M1737.9,646l16.6-2.5l-49.6-73.6l-39.3-40.3l-28.1,5.7
l-44.3,3l-134.5,7.1l-143.6,2.9l-83.8,3.7l-5.7,7c0,0,82.4,30.2,106.5,42.5c23.7,12.2,89.1,58.7,89.1,58.7l56.4,15.8L1737.9,646z"/>
                                        </g>
                                        <g class="hover-block" data-block="block-9">
                                            <path
                                                d="M883.4,789.8l-29,38.5l-8,25.7c-1.4,4.6,0.2,9.6,4.1,12.5l13.3,9.6l156.2,1.1l229.5-15.7l60.2-2.4
c-0.2-1.6-0.3-2.4-0.3-2.4l-18.7-50.4l-27.7,2.6l-19.3-6.3c-2.2-5.4-3.4-11.1-3.4-11.1l14.6-10.3c0,0,8.6-19.4,9.5-27.9
c0.8-7.1,0.7-20.4,2.2-27c3.4-14.5,45.9-48.4,45.9-48.4s-151.7-4.2-202.1-7.5c-45-3-186.1-18.6-186.1-18.6l-48,52.4l-52.9,62.5 c0,0,1.3,6.1,2.2,9.2l13.1,9.9L883.4,789.8z"/>
                                        </g>
                                        <g class="hover-block" data-block="block-10">
                                            <path d="M1214,613.3c-5.5-2.3-11.6-10.7-15.4-18.7
c-3.1-6.5-17.3-8.3-26.5-16.7c-4.5-4-19.3-17.3-19.3-17.3l-83.6-13.6c0,0-45.3,11.6-57.5,18.1c-15.6,8.2-33.7,29.8-46.4,42.2
c-10.9,10.5-41.6,44.3-41.6,44.3l146.2,16.4l128.8,7.3l116,2.2c0,0-27.5-13.4-45.6-25.2c-10.2-6.7,11-6.1-2-20.1
C1258.1,622.6,1232.4,621,1214,613.3z"/>
                                        </g>
                                    </svg>
                                    <a class="block-title post-01 link-load" data-block="block-1"
                                       href="can-ho-alaric"><span
                                        class="oval"></span>
                                        <div class="m-block">
                                            <h2><strong>Alaric</strong> Tower</h2>
                                            <div class="status ">Đang Triển Khai</div>
                                        </div>
                                    </a> <a class="block-title post-02 disable-link" data-block="block-2"
                                            href="#foo"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Eastin Grand</strong> Hotel</h2>
                                        <div class="status coming-soon">Sắp triển khai</div>
                                    </div>
                                </a> <a class="block-title post-03 disable-link" data-block="block-3" href="#foo"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Atlantic</strong> Tower</h2>
                                        <div class="status coming-soon">Sắp triển khai</div>
                                    </div>
                                </a> <a class="block-title post-04 disable-link" data-block="block-4" href="#foo"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Ambersun</strong> Tower</h2>
                                        <div class="status coming-soon">Sắp triển khai</div>
                                    </div>
                                </a> <a class="block-title post-05 link-load" data-block="block-5"
                                        href="biet-thu"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Concerto</strong> Villa</h2>
                                        <div class="status ">Đang Triển Khai</div>
                                    </div>
                                </a><a class="block-title post-08 link-load" data-block="block-8"
                                       href="biet-thu"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Concerto</strong> Villa</h2>
                                        <div class="status ">Đang Triển Khai</div>
                                    </div>
                                </a> <a class="block-title post-06 link-load" data-block="block-6"
                                        href="biet-thu"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Sonata</strong> Villa</h2>
                                        <div class="status ">Đang Triển Khai</div>
                                    </div>
                                </a> <a class="block-title post-07 link-load" data-block="block-7"
                                        href="biet-thu"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Broadway</strong> Villa</h2>
                                        <div class="status ">Đang Triển Khai</div>
                                    </div>
                                </a> <a class="block-title post-09 link-load" data-block="block-9"
                                        href="biet-thu"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Serenade</strong> Villa</h2>
                                        <div class="status ">Đang Triển Khai</div>
                                    </div>
                                </a> <a class="block-title post-10 link-load" data-block="block-10"
                                        href="biet-thu"><span
                                    class="oval"></span>
                                    <div class="m-block">
                                        <h2><strong>Opera</strong> Villa</h2>
                                        <div class="status ">Đang Triển Khai</div>
                                    </div>
                                </a></div>
                            </div>
                        </div>
                        <div class="box-txt white">
                            <p><strong>The Maris</strong> - Khu phức hợp nghỉ dưỡng 5 sao chuẩn quốc tế mặt tiền biển
                                với
                                quy mô
                                23ha lớn
                                nhất thành phố biển Vũng Tàu, mang đến những trải nghiệm đẳng cấp, kết hợp hoàn hảo với
                                mô
                                hình
                                giải
                                trí sôi
                                động, hứa hẹn sẽ trở thành một điểm đến thời thượng bậc nhất và là cánh cửa đưa du lịch
                                Vũng
                                Tàu
                                thăng hạng
                                xứng tầm với vị thế vốn có của “<strong>một thủ phủ du lịch</strong>” Việt Nam cũng như
                                thu
                                hút
                                du
                                khách
                                quốc tế.</p> <a class="view-more"
                                                href="gioi-thieu">xem chi tiết</a>
                        </div>
                    </div>
                    <div class="group-central home-facilities" data-name="home-facilities">
                        <div class="content-main">
                            <div class="title-main">
                                <h2>MỘT ĐIỂM ĐẾN - ĐA TRẢI NGHIỆM - VẠN NIỀM VUI</h2>
                            </div>
                            <div class="box-facilities">
                                <div class="item-faci-home">
                                    <div class="box-img">
                                        <img
                                            src="wp-content/themes/themaris/assets/images/post/2.jpg"
                                            alt="Hồ bơi tràn &amp; beach club"/>
                                    </div>
                                    <div class="title-pic">
                                        <h3>Hồ bơi tràn &amp; beach club</h3>
                                    </div>
                                </div>
                                <div class="item-faci-home">
                                    <div class="box-img"><img
                                        src="wp-content/themes/themaris/assets/images/post/3.jpg"
                                        alt="Hồ bơi tràn"/></div>
                                    <div class="title-pic">
                                        <h3>Hồ bơi tràn</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-central home-news" data-name="home-news">
                        <div class="bg-cover" style="background-color:#21364b">
                        </div>
                        <div class="content-main">
                            <div class="box-news-home">
                                <div class="slider-news">
                                    <div class="item-news-home">
                                        <div class="box-news">
                                            <div class="pic-news-home">
                                                <div class="pic-img">
                                                    <img
                                                        src="wp-content/uploads/2022/09/le-ky-ket-hop-tac-du-an-Alaric-Tower-1024x461-1.jpg"
                                                        alt="Trùng Dương Group ký kết với các đối tác triển khai căn hộ Alaric Tower &#8211; Vũng Tàu"/>
                                                </div>
                                            </div>
                                            <div class="date-thumb">12<span>09-2022</span></div>
                                            <div class="txt-news-home">
                                                <h3>Trùng Dương Group ký kết với các đối tác triển khai căn hộ Alaric
                                                    Tower &#8211;
                                                    Vũng Tàu</h3>
                                                <a class="view-more"
                                                   href="trung-duong-group-ky-ket-voi-cac-doi-tac-trien-khai-can-ho-alaric-tower-vung-tau/">chi
                                                    tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-news-home">
                                        <div class="box-news">
                                            <div class="pic-news-home">
                                                <div class="pic-img">
                                                    <img src="wp-content/uploads/2022/09/Bao-loc-ban-dem-1024x670-1.jpg"
                                                         alt="10 điểm nổi bật khiến bất động sản Bảo Lộc đáng để đầu tư"/>
                                                </div>
                                            </div>
                                            <div class="date-thumb">08<span>09-2022</span></div>
                                            <div class="txt-news-home">
                                                <h3>10 điểm nổi bật khiến bất động sản Bảo Lộc đáng để đầu tư</h3>
                                                <a class="view-more"
                                                   href="10-diem-noi-bat-khien-bat-dong-san-bao-loc-dang-de-dau-tu/">chi
                                                    tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-news-home">
                                        <div class="box-news">
                                            <div class="pic-news-home">
                                                <div class="pic-img">
                                                    <img src="wp-content/uploads/2022/09/maris-1024x512.jpg"
                                                         alt="Phê duyệt chủ trương đầu tư Dự án cao tốc Dầu Giây &#8211; Tân Phú hơn 8.300 tỷ đồng"/>
                                                </div>
                                            </div>
                                            <div class="date-thumb">07<span>09-2022</span></div>
                                            <div class="txt-news-home">
                                                <h3>Phê duyệt chủ trương đầu tư Dự án cao tốc Dầu Giây &#8211; Tân Phú
                                                    hơn
                                                    8.300
                                                    tỷ
                                                    đồng</h3>
                                                <a class="view-more"
                                                   href="phe-duyet-chu-truong-dau-tu-du-an-cao-toc-dau-giay-tan-phu/">chi
                                                    tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-central home-library" data-name="home-library">
                        <div class="content-main">
                            <div class="box-library-home">
                                <div class="item-album-home item-01">
                                    <div class="title-pic">
                                        <h3>Phối cảnh tiện ích</h3>
                                    </div>
                                    <a class="preview-album" data-fancybox="tienich"
                                       href="wp-content/uploads/2022/09/maris-3.jpg"
                                       aria-label="album"></a>

                                    <a class="preview-album" data-fancybox="tienich"
                                       href="wp-content/uploads/2022/09/maris-4.jpg"
                                       aria-label="album"></a>

                                    <a class="preview-album" data-fancybox="tienich"
                                       href="wp-content/uploads/2022/09/maris-8.jpg"
                                       aria-label="album"></a>

                                    <a class="preview-album" data-fancybox="tienich"
                                       href="wp-content/uploads/2022/09/maris-6.jpg"
                                       aria-label="album"></a>

                                    <a class="pic-news-home" data-fancybox="tienich"
                                       href="wp-content/uploads/2022/09/maris-3.jpg">
                                        <div class="pic-img"><img
                                            src="wp-content/themes/themaris/assets/images/tienich/1.jpg"
                                            alt="Phối cảnh tiện ích"/></div>
                                    </a>
                                </div>
                                <div class="item-pdf-home">
                                    <div class="pic-news-home">
                                        <div class="pic-img"><img
                                            src="wp-content/themes/themaris/assets/images/tienich/brochure.jpg"
                                            alt="E-catalogue"/></div>
                                    </div>
                                    <a class="download-pdf"
                                       href="wp-content/uploads/2022/09/response.pdf"
                                       target="_blank" rel="noreferrer">
                                        <h3>E-catalogue</h3>
                                    </a>
                                </div>
                                <div class="item-album-home item-02">
                                    <a class="pic-news-home" data-fancybox="bietthu"
                                       href="wp-content/uploads/2022/09/maris-4.jpg">
                                        <div class="pic-img"><img
                                            src="wp-content/themes/themaris/assets/images/tienich/2.jpg"
                                            alt="Phối cảnh Biệt thự mẫu"/></div>
                                    </a>
                                    <div class="title-pic">
                                        <h3>Phối cảnh Biệt thự mẫu</h3>
                                    </div>

                                    <a class="preview-album" data-fancybox="bietthu"
                                       href="wp-content/uploads/2022/09/maris-4.jpg"
                                       aria-label="album"></a>
                                    <a style="display:none" class="preview-album" data-fancybox="bietthu"
                                       href="wp-content/uploads/2022/09/maris-3.jpg" aria-label="album"></a>
                                    <a style="display:none" class="preview-album" data-fancybox="bietthu"
                                       href="wp-content/uploads/2022/09/maris-9.jpg" aria-label="album"></a>
                                </div>
                                <div class="item-album-home item-03">
                                    <a class="pic-news-home" data-fancybox="canho"
                                       href="wp-content/uploads/2022/09/maris-9.jpg">
                                        <div class="pic-img"><img
                                            src="wp-content/themes/themaris/assets/images/tienich/3.jpg"
                                            alt="Phối cảnh Căn hộ du lịch mẫu"/></div>
                                    </a>
                                    <div class="title-pic">
                                        <h3>Phối cảnh Căn hộ du lịch mẫu</h3>
                                    </div>
                                    <a class="preview-album" data-fancybox="canho"
                                       href="wp-content/uploads/2022/09/maris-9.jpg"
                                       aria-label="album"></a>
                                    <a style="display:none" class="preview-album" data-fancybox="canho"
                                       href="wp-content/uploads/2022/09/maris-5.jpg" aria-label="album"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-central home-contact" data-name="home-contact">
                        <div class="content-main">
                            <div class="box-contact-main">
                                <div class="company-info">
                                    <h2>PHÁT TRIỂN DỰ ÁN</h2>
                                    <div class="item-logo"><img
                                        src="wp-content/uploads/2022/09/logo-dkrv.png"
                                        alt="Công ty Cổ phần Đầu tư Bất động sản Rio Land"/></div>
                                    <h3>CÔNG TY CỔ PHẦN DKRV HOLDINGS</h3>
                                    <ul>
                                        <li class="add"><span class="address"></span>
                                            <p>13 Đặng Tất, Phường Tân Định, Quận 1, TP. HCM</p>
                                        </li>

                                        <li><span class="phone"></span><a href="tel:0931683979">090 886 0000</a></li>
                                        <li><span class="email"></span><a
                                            href="mailto:info@stgrealestate.vn">info@stgrealestate.vn</a></li>
                                    </ul>
                                </div>

                                <div class="partner-info box-01">
                                    <h2>Địa chỉ dự án &amp; nhà mẫu</h2> <span class="address"></span>
                                    <p>Đường 3 Tháng 2, Bãi biển Chí Linh, phường 10, TP. Vũng Tàu</p>
                                </div>
                                <div class="partner-info box-02">
                                    <h2>Đại lý phân phối</h2>
                                    <div class="slide-logo">
                                        <div class="logo-partner">
                                            <img
                                                src="wp-content/uploads/2022/09/ST-REAL-LOGO_2.png"
                                                alt="STG REAL ESTATE"/>
                                            <h3>STG REAL ESTATE</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-note"><i>(*) Thông tin, hình ảnh, các tiện ích trên website này chỉ mang
                                tính
                                chất
                                minh
                                hoạ
                                tương đối và có thể được điều chỉnh theo quyết định của Chủ đầu tư tại từng thời điểm
                                đảm
                                bảo
                                phù
                                hợp quy
                                hoạch và thực tế thi công dự án. Các thông tin, cam kết chính thức sẽ được quy định cụ
                                thể
                                tại
                                Hợp
                                đồng
                                mua bán. Việc quản lý, vận hành và kinh doanh của khu đô thị sẽ theo quy định của Ban
                                quản
                                lý.</i>
                            </div>
                        </div>
                    </div>
                    <div class="group-central page-register" data-name="page-register">
                        <div class="bg-cover" style={{backgroundColor:"#21364b"}} >
                        </div>
                        <div class="content-main">
                            <div class="register-form">

                                <div class="require-col white">
                                    <div role="form" class="wpcf7" id="wpcf7-f4244-o1" lang="vi" dir="ltr">
                                        <div class="screen-reader-response"><p role="status" aria-live="polite"
                                                                               aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form action="#wpcf7-f4244-o1" method="post" class="wpcf7-form init"
                                              novalidate="novalidate"
                                              data-status="init">
                                            <div style="display: none;">
                                                <input type="hidden" name="_wpcf7" value="4244"/>
                                                <input type="hidden" name="_wpcf7_version" value="5.6.3"/>
                                                <input type="hidden" name="_wpcf7_locale" value="vi"/>
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4244-o1"/>
                                                <input type="hidden" name="_wpcf7_container_post" value="0"/>
                                                <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
                                            </div>
                                            <div class="title-main">
                                                <h2>ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h2>
                                            </div>
                                            <div class="input-text"><span class="holder">Họ và Tên (*)</span><br/>
                                                <span class="wpcf7-form-control-wrap" data-name="your-name"><input
                                                    type="text"
                                                    name="your-name"
                                                    value=""
                                                    size="40"
                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    aria-required="true"
                                                    aria-invalid="false"/></span>
                                            </div>
                                            <div class="input-text"><span class="holder">Email (*)</span><br/>
                                                <span class="wpcf7-form-control-wrap" data-name="your-email">
                                                <input type="text"
                                                       name="your-email"
                                                       value=""
                                                       size="40"
                                                       class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                       aria-required="true"
                                                       aria-invalid="false"/></span>
                                            </div>
                                            <div class="input-text"><span class="holder">Điện thoại (*)</span><br/>
                                                <span class="wpcf7-form-control-wrap" data-name="your-phone"><input
                                                    type="text"
                                                    name="your-phone"
                                                    value=""
                                                    size="40"
                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    aria-required="true"
                                                    aria-invalid="false"/></span>
                                            </div>
                                            <div class="input-area"><span class="holder">Nhắn tin</span><span
                                                class="wpcf7-form-control-wrap" data-name="your-message"><textarea
                                                name="your-message" cols="40" rows="10"
                                                class="wpcf7-form-control wpcf7-textarea"
                                                aria-invalid="false"></textarea></span></div>
                                            <div class="input-but">
                                                <div class="button">
                                                    <input type="submit" value="Gửi đi"
                                                           class="wpcf7-form-control has-spinner wpcf7-submit"/>
                                                </div>
                                            </div>
                                            <div class="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
