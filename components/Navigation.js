import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <>
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    <Link className="navbar-brand text-brand" href="/">
                        <a>
                            <Image
                                src="/assets/img/logo-alaric.png"
                                alt="logo"
                                width={48}
                                height={70}
                                priority
                            />
                        </a>
                    </Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Tổng quan dự án</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="about.html">Tiện ích</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="property-grid.html">Vị trí</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="blog-grid.html">Mặt bằng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="blog-grid.html">Video dự án</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="blog-grid.html">Phương thức thanh toán</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blog-grid.html">Tư vấn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}