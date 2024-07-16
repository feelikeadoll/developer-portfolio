type RightArrowProps = {
  size?: string;
  color?: string;
};

function RigthArrow({ size = "30px", color = "#ffffff" }: RightArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g clipPath="url(#clip0_429_11254)">
          <path
            d="M10 17L15 12"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M15 12L10 7"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_429_11254">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

export default RigthArrow;
