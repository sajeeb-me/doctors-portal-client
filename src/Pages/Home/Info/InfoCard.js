import React from 'react';

const InfoCard = ({ img, text }) => {
    return (
        <div className={`card lg:card-side text-white shadow-xl p-5 ${text.className}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{text.title}</h2>
                <p className="text-sm">{text.text}</p>
            </div>
        </div>
    );
};

export default InfoCard;