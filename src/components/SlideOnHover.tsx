import { useState } from 'react';
import Gadriana1 from '../assets/works/gadriana-1.jpg'
import Gadriana2 from '../assets/works/gadriana-2.jpg'
import Gadriana3 from '../assets/works/gadriana-3.jpg'

// --- CONSTANTS ---
const BASE_CLASSES = "transition-all rounded-xl shadow-around bg-white relative overflow-hidden";
const BIG_CLASSES = "h-47% w-52";
const SMALL_CLASSES = "h-20% w-22";

// --- TYPES ---
type OnMouseEnterType = (barId: string) => void;
type OnMouseLeaveType = () => void;

type SlideBarProps = {
    barId: string;
    activeBar: string;
    onMouseEnter: OnMouseEnterType;
    onMouseLeave: OnMouseLeaveType;
    imgSrc: string;
}

// --- CHILD COMPONENT ---
function SlideBar({ barId, activeBar, onMouseEnter, onMouseLeave, imgSrc }: SlideBarProps) {
    const isBig = activeBar === barId;
    const sizeClasses = isBig ? BIG_CLASSES : SMALL_CLASSES;

    return (
        <div
            className={`${BASE_CLASSES} ${sizeClasses}`}
            onMouseEnter={() => onMouseEnter(barId)}
            onMouseLeave={onMouseLeave}
        >
            <img
                src={imgSrc}
                alt={`Gadriana Studio website by Laia Navalon Arxe`}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
}

// --- PARENT COMPONENT ---
function SlideOnHover() {
    const [activeBar, setActiveBar] = useState<string>('bar2');

    const handleMouseEnter: OnMouseEnterType = (barId) => {
        setActiveBar(barId);
    };
    const handleMouseLeave: OnMouseLeaveType = () => { };

    // Define the data for all bars in an array
    const barData = [
        { id: "bar1", imgSrc: Gadriana1 },
        { id: "bar2", imgSrc: Gadriana2 },
        { id: "bar3", imgSrc: Gadriana3 },
    ];

    return (
        <div className="h-47% ml-10- w-screen md:w-full flex justify-between items-end">
            {barData.map((bar) => (
                <SlideBar
                    key={bar.id}
                    barId={bar.id}
                    activeBar={activeBar}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    imgSrc={bar.imgSrc}
                />
            ))}
        </div>
    );
}

export default SlideOnHover;