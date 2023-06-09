import React from "react";

function Square({ isWinning, onClick, value }) {
    return (
        <button
            className={"square " + (isWinning ? "square--won" : "")}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;