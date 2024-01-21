import React, { useState } from "react";
import TestimonalCard from "./components/TestimonalCard";
import reviews from "./data";

const App = () => {
    const [Index, setIndex] = useState(0);

    return (
        <div className="wrapper overflow-hidden w-full min-h-screen pb-3 bg-[#E5E7EB] flex flex-col justify-center items-center gap-10">
            <div>
                <h1 className="text-[35px] font-bold">Our Testimonials</h1>
                <div className="bottom h-1 bg-[#A78BFA] w-1/2 mx-auto"></div>
            </div>

            <TestimonalCard
                key={reviews[Index].id}
                {...reviews[Index]}
                reviews={reviews}
                Index={Index}
                setIndex={setIndex}
            />
        </div>
    );
};

export default App;
