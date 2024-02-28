import React from "react";

export default function Panel({ inputs }) {
    return (
        <div className="panel">
            {inputs && inputs.length > 0 && inputs.map((input, index) => (
                <div key={index} className="panel-item" style={{ backgroundColor: input.color }}>
                    {input.text}
                </div>
            ))}
        </div>
    );
}
