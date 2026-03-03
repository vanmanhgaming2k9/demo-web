export default function GoldenRatioDesktop() {
    return (
        <>
            <svg
                className="pointer-events-none absolute inset-0 overflow-visible text-edge"
                viewBox="0 0 340 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className="text-border/50">
                    <path
                        d="M105.1 -170.853L464.633 411.625"
                        stroke="currentColor"
                        strokeDasharray="4 2"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M-267.831 375.247L600.141 -159.777"
                        stroke="currentColor"
                        strokeDasharray="4 2"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
                <g>
                    <path
                        d="M260 0.5V80"
                        stroke="currentColor"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M339.5 80.5H210"
                        stroke="currentColor"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M210 210V0.5"
                        stroke="currentColor"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
                <g>
                    <rect
                        x={210}
                        y="50.5"
                        width={30}
                        height={30}
                        stroke="currentColor"
                        vectorEffect="non-scaling-stroke"
                    />
                    <rect
                        x={240}
                        y="60.5"
                        width={20}
                        height={20}
                        stroke="currentColor"
                        vectorEffect="non-scaling-stroke"
                    />
                    <rect
                        x={240}
                        y="50.5"
                        width={20}
                        height={10}
                        stroke="currentColor"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
                <path
                    className="text-border"
                    d="M239.897 60.3571C239.897 54.894 244.414 50.381 249.882 50.381C255.35 50.381 259.868 54.894 259.868 60.3571C259.868 71.2835 250.833 80.3095 239.897 80.3095C223.493 80.3095 209.941 66.7704 209.941 50.381C209.941 23.0652 232.527 0.499999 259.868 0.5C303.613 0.499995 339.75 36.6043 339.75 80.3095C339.75 151.33 281.027 210 209.941 210C95.1103 210 0.25 115.226 0.25 0.5C0.250008 -185.69 154.06 -339.5 340.25 -339.5"
                    stroke="currentColor"
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

        </>
    )
}