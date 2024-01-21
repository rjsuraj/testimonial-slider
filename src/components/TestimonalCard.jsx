import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const TestimonalCard = ({
    image,
    name,
    job,
    text,
    reviews,
    Index,
    setIndex,
}) => {
    const nextClickHandler = () => {
        if (Index === reviews.length - 1) setIndex(0);
        else setIndex((prev) => prev + 1);
    };

    const beforeClickHandler = () => {
        if (Index === 0) setIndex(reviews.length - 1);
        else setIndex((prev) => prev - 1);
    };

    const surpriseClickHandler = () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    };

    return (
        <div className="card relative w-[300px] sm:w-[450px] md:w-[680px] md:h-[480px] rounded-lg shadow-lg p-8 bg-white flex flex-col justify-center items-center gap-2">

            <div className="image relative md:absolute md:left-10 md:top-0 md:-translate-y-1/2 w-36 rounded-full">
                <img src={image} alt="person_info" className="rounded-full w-full h-full relative z-20 aspect-square"/>
                <div className="circle absolute z-10 -top-2 -right-2 bg-[#8B5CF6] w-36 h-36 rounded-full"></div>
            </div>

            <div className="name tracking-wider font-bold text-2xl capitalize">{name}</div>
            <div className="job text-violet-300 uppercase text-sm">{job}</div>

            <div className="text-center flex flex-col justify-center items-center gap-2 mt-4 text-slate-500">
                <FaQuoteLeft className="text-violet-400 mb-2"/>
                {text}
                <FaQuoteRight className="text-violet-400 mt-2"/>
            </div>

            <div className="flex gap-2">
                <MdNavigateBefore
                    className="text-[2.5rem] cursor-pointer text-violet-400"
                    onClick={beforeClickHandler}
                />
                <MdNavigateNext
                    className="text-[2.5rem] cursor-pointer text-violet-400"
                    onClick={nextClickHandler}
                />
            </div>

            <button
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                onClick={surpriseClickHandler}
            >
                Surprise
            </button>
        </div>
    );
};

export default TestimonalCard;
