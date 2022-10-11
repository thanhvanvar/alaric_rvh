import * as React from 'react';
import Image from 'next/image'
import {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, FreeMode} from "swiper";
import YouTube, {YouTubeProps} from 'react-youtube';
import Navigation from "../components/Navigation";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function Home() {

    const Slides = [
        'assets/img/slide-1.jpg',
        'assets/img/slide-2.jpg',
        'assets/img/slide-3.jpg',
    ]

    function HtmlSlide() {
        return (
            Slides.map((Slide, index) => (
                <div key={index}>{Slide}</div>
            ))
        )
    }

    return (
        <>
            <div className="click-closed"/>

            <Navigation/>
            <Swiper
                modules={[Pagination]}
                className="mySwiper section_one"
            >
                <SwiperSlide>
                    <div className="intro intro-carousel swiper position-relative slide_one">
                        <div className="swiper-slide carousel-item-a intro-item bg-image swiper-slide-duplicate"
                             style={{backgroundImage: "url(assets/img/maris.jpg)"}}>
                            <div className="overlay overlay-a"/>
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="intro-body lh-lg">
                                                    <h1 className="intro-title mb-4 text_one">
                                                        ALARIC TOWER VUNG TAU<br/>
                                                        HOME SWEET HOME<br/>
                                                        NHÀ MÌNH LÀ NHẤT
                                                    </h1>
                                                    <p className="intro-title-top text_two">
                                                        Dự án căn hộ du lịch biển được đầu tư bởi<br/>
                                                        CÔNG TY TNHH ALLGREEN VƯỢNG THÀNH - TRÙNG DƯƠNG
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <main id="main">
                <section id="section_two" className="section-services section-t8 section_two" style={{
                    backgroundColor: '#05303a',
                    backgroundImage: 'url(/assets/img/ALR2.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    height: 1200
                }}>
                    <div className="container">
                        <Row className="row_one">
                            <Col md={{span: 3, offset: 3}}>
                                <Image
                                    src="/assets/img/slide-2.jpg"
                                    alt=''
                                    layout="intrinsic"
                                    width={700}
                                    height={475}
                                    objectFit={'cover'}
                                />
                            </Col>
                        </Row>
                        <Row className="row_two">
                            <Col md={{span: 4, offset: 1}}>
                                <Card style={{borderRadius: '20px'}}>
                                    <Card.Img style={{padding: '20px'}} variant="top" src="assets/img/img-2.png"/>
                                    <Card.Body>
                                        <Card.Text>
                                            Được lấy cảm hứng từ “mũi thuyền” đang vươn mình ra biển khơi bao la, rộng
                                            lớn. Với thiết kế kiến trúc tỉ mỉ, phóng khoáng, trẻ trung kết hợp hài hòa
                                            giữa nét cổ điển châu Âu và sự hiện đại tối giản – Alaric Tower như cánh
                                            buồm trắng hòa mình cùng với thiên nhiên đón nắng đón gió, đem đến một không
                                            gian sống sang trọng và thoải mái.
                                            <br/>
                                            <br/>
                                            Sự đầu tư bài bản là yếu tố then chốt giúp cho Alaric Tower được xem như là
                                            “ngôi nhà thứ hai” ven biển kiểu mới.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section id="section_four" className="section-property section-t8 section_four">
                    <Container>
                        <Row className="row_one">
                            <Col className="col_one" md={{span: 3}}>
                                <Image
                                    src="/assets/img/Layer_9.png"
                                    alt=''
                                    layout="intrinsic"
                                    width={700}
                                    height={1175}
                                    objectFit={'cover'}
                                />
                            </Col>
                            <Col className="col_two" md={{span: 3}}>
                                <Image
                                    src="/assets/img/1-coi-xay-gio.jpg"
                                    alt=''
                                    layout="intrinsic"
                                    width={700}
                                    height={1175}
                                    objectFit={'cover'}
                                />
                            </Col>
                            <Col className="col_three" md={{span: 5}}>
                                <div className="title_one">TỔNG QUAN DỰ ÁN ALARIC TOWER TIỀM NĂNG VEN BIỂN</div>
                                <div className="text_two">Quy mô:</div>
                                <div className="text_three">&#10148; Tháp Alaric Tower cao 18 tầng, với 598 căn hộ có
                                    diện tích từ 44,54 m2 đến 90,91 m2
                                </div>
                                <hr/>
                                <div className="text_four">Tiện ích liền kề:</div>
                                <div className="text_five">&#10148; Alaric Tower thừa hưởng chuỗi hơn 100 tiện ích đa
                                    dạng như Đại lộ Marisa, Cầu tàu Huntington California…
                                </div>
                                <hr/>
                                <div className="text_six">Địa chỉ:</div>
                                <div className="text_seven">&#10148; Đường 3 Tháng 2 (bãi biển Chí Linh), Phường 10,
                                    Thành phố Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu
                                </div>
                                <hr/>
                                <div className="text_eight">Loại hình sản phẩm: Nhà sát biển</div>
                                <Row className="row_two">
                                    <Col md={{span: 4}} xs={{span:4}}>
                                        <div className="text_nine">ĐƠN VỊ PHÁT TRIỂN</div>
                                        <Image
                                            src="/assets/img/dkrv.png"
                                            alt=''
                                            layout="intrinsic"
                                            width={119}
                                            height={45}
                                            objectFit={'cover'}
                                        />
                                    </Col>
                                    <Col md={{span: 4}} xs={{span:4}}>
                                        <div className="text_ten">CHỦ ĐẦU TƯ</div>
                                        <Image
                                            src="/assets/img/tdg.png"
                                            alt=''
                                            layout="intrinsic"
                                            width={99}
                                            height={104}
                                            objectFit={'cover'}
                                        />
                                    </Col>
                                    <Col md={{span: 4}} xs={{span:4}}>
                                        <div className="text_eleven">VẬN HÀNH VÀ KHAI THÁC</div>
                                        <Image
                                            src="/assets/img/eastin.png"
                                            alt=''
                                            layout="intrinsic"
                                            width={112}
                                            height={131}
                                            objectFit={'cover'}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="section_five" className="section-services mt-4 section_five">
                    <div className="overlay_bg">
                        <Image
                            src="/assets/img/img_play.png"
                            alt=''
                            layout="intrinsic"
                            width={100}
                            height={100}
                            objectFit={'cover'}
                        />
                    </div>

                </section>

                <section id="section_six" className="section-agents section-t8 section_six">
                    <Container>
                        <Row>
                            <Col md={{span: 12}}>
                                <div className="title-wrap d-flex justify-content-center">
                                    <div className="title-box">
                                        <h2 style={{color: '#fff'}} className="title-a title_one">VỊ TRÍ DỰ ÁN ALARIC
                                            TOWER</h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row_two">
                            <Col md={{span: 7}}>
                                <Image
                                    src="/assets/img/sh2.jpg"
                                    alt=''
                                    layout="intrinsic"
                                    width={770}
                                    height={419}
                                    objectFit={'cover'}
                                />
                            </Col>
                            <Col className='col_two' md={{span: 4}}>
                                <h2 className="title-a title_one section_title">“TÂM MẠCH GIAO THOA
                                    THỊNH VƯỢNG”</h2>
                                <p>
                                    Alaric Tower tọa lạc trên “cung đường vàng” Ba Tháng Hai – vị thế huyết mạch
                                    kết nối
                                    các danh lam thắng cảnh của tỉnh Vũng Tàu. Alaric Tower trấn giữ vị trí cửa
                                    ngõ du
                                    lịch nối liền các tỉnh phía Nam như Thành phố Hồ Chí Minh - Đồng Nai - Vũng
                                    Tàu.
                                    <br/>
                                    <br/>
                                    Được thừa hưởng riêng vẻ đẹp của thiên nhiên từ bãi tắm Chí Linh dài hơn
                                    500m, tại
                                    đây cư dân chỉ “một bước chạm đến đại dương” khi Alaric Tower có vị trí nằm
                                    sát
                                    biển. Cư dân an tâm trải nghiệm một cách riêng tư và trọn vẹn nhất cùng gia
                                    đình.
                                </p>
                                {/*<Card className="bg-dark text-white card_one">
                                    <Card.Img src="/assets/img/vi-tri-2.png" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>“TÂM MẠCH GIAO THOA
                                            THỊNH VƯỢNG”</Card.Title>
                                        <Card.Text>
                                            Alaric Tower tọa lạc trên “cung đường vàng” Ba Tháng Hai – vị thế huyết mạch
                                            kết nối
                                            các danh lam thắng cảnh của tỉnh Vũng Tàu. Alaric Tower trấn giữ vị trí cửa
                                            ngõ du
                                            lịch nối liền các tỉnh phía Nam như Thành phố Hồ Chí Minh - Đồng Nai - Vũng
                                            Tàu.
                                            <br/>
                                            <br/>
                                            Được thừa hưởng riêng vẻ đẹp của thiên nhiên từ bãi tắm Chí Linh dài hơn
                                            500m, tại
                                            đây cư dân chỉ “một bước chạm đến đại dương” khi Alaric Tower có vị trí nằm
                                            sát
                                            biển. Cư dân an tâm trải nghiệm một cách riêng tư và trọn vẹn nhất cùng gia
                                            đình.
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>*/}
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="section_seven" className="section-agents section-t8 section_seven">
                    <Container>
                        <Row className="row_one">
                            <Col md={{span: 12}}>
                                <Image
                                    src="/assets/img/vi-tri.png"
                                    alt=''
                                    layout="intrinsic"
                                    width={1779}
                                    height={1178}
                                    objectFit={'cover'}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="section_eight" className="section-agents section-t8 section_eight">
                    <Container>
                        <Row className="row_one">
                            <Col className="col_one" md={{span: 6}}>
                                <h2 style={{color: '#fff', fontWeight: 100}} className="title-a title_one">NHỮNG TIỆN
                                    ÍCH CAO CẤP</h2>
                                <h2 style={{color: '#fff'}} className="title-a title_one">CỦA ALARIC TOWER</h2>
                            </Col>
                            <Col className="col_two" md={{span: 4}}>
                                <Card style={{borderRadius: '20px'}}>
                                    <Card.Body>
                                        <Card.Text>
                                            Căn hộ nghỉ dưỡng Alaric Tower thuộc quần thể nghỉ dưỡng The Maris có quy mô
                                            23ha, nên Alaric Tower thừa hưởng chuỗi hơn 100 tiện ích đa dạng như Đại lộ
                                            Marisa, Cầu tàu Huntington California…
                                            <br/>
                                            <br/>
                                            Chủ nhân căn hộ có thể tự do khám phá thiên nhiên hay thỏa sức vui chơi, ăn
                                            uống và mua sắm, ngâm mình trong 2 hồ bơi tràn bờ với diện tích mặt nước lên
                                            tới hơn 2.200 m2, thư giãn tại 6 Clubhouse với hệ thống Gym - Spa - Nhà hàng
                                            cao cấp trải dài toàn khu, sân golf gần 8.000 m2…
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="row_two pt-3">
                            <Col md={{span: 12}}>
                                <Image
                                    src="/assets/img/s-8.png"
                                    alt=''
                                    layout="intrinsic"
                                    width={3556}
                                    height={2118}
                                    objectFit={'cover'}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="section_nine" className="section-agents section-t8 section_nine">
                    <Container>
                        <Row className="row_one">
                            <Col md={{span: 12}} >
                                <div className="title-wrap d-flex justify-content-center">
                                    <div className="title-box">
                                        <h2 style={{color: '#fff'}} className="title-a title_one section_title">MẶT BẰNG
                                            TỔNG THỂ DỰ
                                            ÁN ALARIC TOWER</h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row_two">
                            <Col className="col_one" md={6}>
                                <p className="text_one">
                                    Alaric Tower Vũng Tàu sở hữu diện tích quy hoạch 3.562 m2 và tổng diện tích sàn lên
                                    đến 59.821,6 m2 nằm trong quần thể nghỉ dưỡng cao cấp The Maris Vũng Tàu.
                                    <br/>
                                    <br/>
                                    Dự án bao gồm 1 tòa tháp cao 18 tầng nổi (và 2 tầng lửng) với 2 tầng hầm phục vụ giữ
                                    xe dành riêng cho cư dân và khách ghé thăm.
                                    <br/>
                                    <br/>
                                    Số sản phẩm căn hộ Alaric Tower cung ứng ra thị trường dự kiến lên đến 598 căn hộ du
                                    lịch và 4 căn shophouse được trang bị đầy đủ tiện nghi hiện đại, phục vụ hoàn hảo
                                    mọi nhu cầu từ thiết yếu đến xa xỉ của cư dân trong cuộc sống.
                                </p>
                            </Col>
                            <Col className="col_two" md={6}>
                                <Image
                                    src="/assets/img/s-9.png"
                                    alt=''
                                    layout="intrinsic"
                                    width={3840}
                                    height={2160}
                                    objectFit={'cover'}
                                />
                            </Col>
                        </Row>
                        <Row className="row_three">
                            <Col md={{span: 12}}>
                                <Image
                                    src="/assets/img/s-9-3.png"
                                    alt=''
                                    layout="intrinsic"
                                    width={3334}
                                    height={859}
                                    objectFit={'cover'}
                                />
                            </Col>
                        </Row>
                        <Row className="row_four">
                            <Col md={{span: 12}}>
                                <div className="title-wrap d-flex justify-content-center">
                                    <div className="title-box">
                                        <h4 className="title-a title_one">MẶT BẰNG TẦNG 5-14</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="section_ten" className="section-agents section_ten">
                    <div className="overlay_bg_two section-t8 section-b8">
                        <Container>
                            <Row className="row_one">
                                <Col md={{span: 12}}>
                                    <div className="title-wrap d-flex justify-content-center">
                                        <div className="title-box">
                                            <h2 className="title-a section_title">VIDEO TỔNG THỂ DỰ ÁN
                                                ALARIC TOWER</h2>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row_two">
                                <Col md={{span: 6}}>
                                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                            frameBorder='0'
                                            allow='autoplay; encrypted-media'
                                            allowFullScreen
                                            title='video'
                                            className='video_one'
                                    />
                                </Col>
                                <Col md={{span: 6}}>
                                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                            frameBorder='0'
                                            allow='autoplay; encrypted-media'
                                            allowFullScreen
                                            title='video'
                                            className='video_two'
                                    />
                                </Col>
                            </Row>
                            <Row id="PTTT" className="row_three">
                                <Col md={{span: 12}}>
                                    <div className="title-wrap d-flex justify-content-center">
                                        <div className="title-box">
                                            <h2 style={{color: '#fff'}}
                                                className="title-a pttt_one section_title pt-5">PHƯƠNG THỨC THANH
                                                TOÁN</h2>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row_four">
                                <Col className="display_icon" md={{span: 4, offset: 2}}>
                                    <Image
                                        src="/assets/img/icon-s-10.png"
                                        alt=''
                                        layout="intrinsic"
                                        width={100}
                                        height={100}
                                        objectFit={'cover'}
                                    />
                                    <h2 className="title-a pttt">
                                        PTTT<br/>
                                        VAY NGÂN HÀNG
                                    </h2>
                                </Col>
                                <Col className="display_icon" md={{span: 4, offset: 2}}>
                                    <Image
                                        src="/assets/img/icon-s-10-1.png"
                                        alt=''
                                        layout="intrinsic"
                                        width={100}
                                        height={100}
                                        objectFit={'cover'}
                                    />
                                    <h2 className="title-a pttt">
                                        PTTT<br/>
                                        CHUẨN
                                    </h2>
                                </Col>
                                <Col className="display_icon" md={{span: 4, offset: 2}}>
                                    <Image
                                        src="/assets/img/icon-s-10-2.png"
                                        alt=''
                                        layout="intrinsic"
                                        width={100}
                                        height={100}
                                        objectFit={'cover'}
                                    />
                                    <h2 className="title-a pttt">
                                        PTTT<br/>
                                        NHANH 50%
                                    </h2>
                                </Col>
                                <Col className="display_icon" md={{span: 4, offset: 2}}>
                                    <Image
                                        src="/assets/img/icon-s-10-3.png"
                                        alt=''
                                        layout="intrinsic"
                                        width={100}
                                        height={100}
                                        objectFit={'cover'}
                                    />
                                    <h2 className="title-a pttt">
                                        PTTT<br/>
                                        NHANH 70%
                                    </h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section id="section_eleven" className="section-agents section_eleven">
                    <div className="overlay_bg_two section-t8 section-b8">
                        <Container>
                            <Row className="row_one">
                                <Col md={{span: 12}}>
                                    <div className="title-wrap d-flex justify-content-center">
                                        <div className="title-box">
                                            <h2 className="title-a section_title">TRANG THÔNG TIN</h2>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row_two">
                                <Col className="col_one" md={{span: 4, offset: 7}}>
                                    <Form.Control className="input_form" type="nam"
                                                  placeholder="Họ và Tên"/>
                                    <Form.Control className="input_form" type="email" placeholder="Email"/>
                                    <Form.Control className="input_form" type="phone"
                                                  placeholder="Số điện thoại"/>
                                    <Button className="mt-5 btn_submit" variant="primary" type="submit">
                                        TƯ VẤN VÀ NHẬN BẢNG GIÁ TỐT NHẤT
                                    </Button>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

            </main>
            <section className="section-footer m-0">
                <Container>
                    <Row className="row_one">
                        <Col md={{span: 12}}>
                            <h2 className="title-a section_title_footer">
                                CÔNG TY CỔ PHẦN DKRV HOLDINGS
                            </h2>
                        </Col>
                    </Row>
                    <Row className="row_two mt-3">
                        <Col md={{span: 3}}>
                            <Image
                                src="/assets/img/logo-rvh.png"
                                alt=''
                                layout="intrinsic"
                                width={250}
                                height={90}
                                objectFit={'cover'}
                            />
                        </Col>
                        <Col md={{span: 4}}>
                            <div className="w-footer-a">
                                <ul className="list-unstyled">
                                    <li className="color-a">
                                        <span className="color-text-a"><i className="bi bi-pin-map"/></span> 13 Đặng
                                        Tất, Phường Tân Định, Quận 1, TP.HCM
                                    </li>
                                    <li className="color-a">
                                        <span className="color-text-a"><i
                                            className="bi bi-envelope"/></span> info@dkrvholdings.vn
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={{span: 3}}>
                            <div className="w-footer-a">
                                <ul className="list-unstyled">
                                    <li className="color-a">
                                        <span className="color-text-a"><i className="bi bi-phone"/></span> 0901 8888 02
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={{span: 2}}>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-facebook" aria-hidden="true"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-twitter" aria-hidden="true"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-instagram" aria-hidden="true"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-linkedin" aria-hidden="true"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright
                                    <span className="color-a"> RVH</span> All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <div id="preloader"></div>*/
            }
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"/></a>
        </>
    )
}
