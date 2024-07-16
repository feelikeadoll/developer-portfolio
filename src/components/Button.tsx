type ButtonProps = {
  text: string;
};

function Button(props: ButtonProps) {
  return (
    <button className="btn btn-neutral bg-black text-white">
      <h3 className="text-md pr-2">{props.text}</h3>
      <svg
        width="30px"
        height="30px"
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
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15 12L10 7"
              stroke="#ffffff"
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
    </button>
  );
}

export default Button;
