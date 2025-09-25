
export default function HeaderWave() {
  return (
    <div className="relative w-full h-10 -mt-px overflow-hidden bg-transparent">
      <div className="header-waves">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              className="wave-1"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              className="wave-2"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              className="wave-3"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              className="wave-4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
