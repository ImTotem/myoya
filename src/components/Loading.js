function Loading() {
    return (
        <div id="loading" className="center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                width="200"
                height="200"
            >
                <g>
                    <circle
                        cx="100"
                        cy="100"
                        r="88.9"
                        fill="transparent"
                        stroke="#f5a1b1"
                        strokeWidth="10"
                        strokeDasharray="486,316.1593"
                    >
                        <animate
                            attributeName="stroke"
                            repeatCount="indefinite"
                            dur="1.5s"
                            values="#C6E1FF;#FACDD5;#ed7e92;#C6E1FF"
                            begin="0s"
                        ></animate>
                        <animate
                            attributeName="stroke-dasharray"
                            repeatCount="indefinite"
                            dur="1.5s"
                            values="486,316.1593;942.4778,316.1593;942.4778,316.1593"
                            begin="0s"
                        ></animate>
                        <animate
                            attributeName="stroke-dashoffset"
                            repeatCount="indefinite"
                            dur="1.5s"
                            values="0;-300.5;-800"
                            begin="0s"
                        ></animate>
                    </circle>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 100 100"
                        to="360 100 100"
                        dur="1.5s"
                        repeatCount="indefinite"
                    ></animateTransform>
                </g>
            </svg>
        </div>
    );
}

export default Loading;