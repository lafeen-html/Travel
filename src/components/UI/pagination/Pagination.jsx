import React, { useState, useEffect } from "react";
import "./Pagination.css";
import ServiceItem from '../../../components/ServiceItem';
import PrimaryButton from '../../../components/UI/buttons/PrimaryButton';

export default function Pagination({ pageDataLimit, items }) {
    const [currPageNo, setCurrPageNo] = useState(1);
    const [currPageItems, setCurrPageItems] = useState([]);
    const [pageNumberGroup, setPageNumberGroup] = useState([]);

    useEffect(() => {
        setCurrPageItems(getPageData());
        setPageNumberGroup(getPageNumberGroup());
        toTopOnClick();
    }, [items, currPageNo]);

    function nextPage() {
        setCurrPageNo((prev) => prev + 1);
        toTopOnClick();
    };

    function previousPage() {
        setCurrPageNo((prev) => prev - 1);
        toTopOnClick();
    }

    function changePageTo(pageNumber) {
        setCurrPageNo(pageNumber);
        toTopOnClick();
    };

    function getPageData() {
        const startIndex = currPageNo * pageDataLimit - pageDataLimit;
        const endIndex = startIndex + pageDataLimit;
        return items.slice(startIndex, endIndex);
    };

    function getPageNumberGroup() {
        let start = Math.floor((currPageNo - 1) / 3) * 3;
        return new Array(3).fill(" ").map((_, index) => start + index + 1);
    };

    function toTopOnClick() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 mt-2 mb-4 align-content-stretch">
                {currPageItems.map((arr, id) => {
                    return (
                        <ServiceItem
                            key={id}
                            id={arr.id}
                            img={arr.img}
                            title={arr.title}
                            description={arr.description}
                            date={arr.date}
                            price={arr.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}
                        />
                    )
                })}
            </div>
            <div className="page-num-container">
                <PrimaryButton
                    className={`page-change-btn ${currPageNo === 1 ? "disabled-pages" : ""}  `}
                    disabled={currPageNo === 1}
                    onClick={previousPage}
                >
                    ← Назад
                </PrimaryButton>
                <ul className="page-num-container list-style-none mt-2">
                    {pageNumberGroup.map((value, index) => {
                        return (
                            <li
                                className={`page-number ${currPageNo === value ? "active-pages" : ""
                                    } `}
                                key={index}
                                onClick={() => changePageTo(value)}
                            >
                                {value}
                            </li>
                        );
                    })}
                </ul>
                <PrimaryButton
                    disabled={currPageNo === Math.floor(items.length / pageDataLimit)}
                    className={`page-change-btn ${currPageNo === Math.floor(items.length / pageDataLimit)
                        ? "disabled-pages"
                        : ""
                        }  `}
                    onClick={nextPage}
                >
                    Вперёд →
                </PrimaryButton>
            </div>
        </div>
    );
};