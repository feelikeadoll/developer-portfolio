import { useState } from 'react';
// import SlideBar from './SlideBar'; // If in a separate file

// Define SlideBar here if keeping everything in one file (recommended for this example)
const BASE_CLASSES = "transition-all rounded-xl shadow-around bg-white";
const BIG_CLASSES = "h-47% w-2/5";
const SMALL_CLASSES = "h-30% w-1/4";

type OnMouseEnterType = (barId: string) => void;
type OnMouseLeaveType = () => void;

type SlideBarProps = {
    barId: string;
    activeBar: string;
    onMouseEnter: OnMouseEnterType;
    onMouseLeave: OnMouseLeaveType
}
function SlideBar({ barId, activeBar, onMouseEnter, onMouseLeave }: SlideBarProps) {
    const isBig = activeBar === barId;
    const sizeClasses = isBig ? BIG_CLASSES : SMALL_CLASSES;
    return (
        <div
            className={`${BASE_CLASSES} ${sizeClasses}`}
            onMouseEnter={() => onMouseEnter(barId)}
            onMouseLeave={onMouseLeave}
        ></div>
    );
}

function SlideOnHover() {
    const [activeBar, setActiveBar] = useState('bar2');

    function handleMouseEnter(barId: string) {
        setActiveBar(barId);
    };
    function handleMouseLeave() {
    };

    return (
        <div className="h-47% w-full flex justify-between items-end">

            <SlideBar
                barId="bar1"
                activeBar={activeBar}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

            <SlideBar
                barId="bar2"
                activeBar={activeBar}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

            <SlideBar
                barId="bar3"
                activeBar={activeBar}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

        </div>
    );
}

export default SlideOnHover;