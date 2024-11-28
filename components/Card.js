"use client";

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
            <style jsx>{`
                .card {
                    border: 1px solid #ddd;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    margin-top: 0;
                    color: #333;
                }
            `}</style>
        </div>
    );
};
export default Card;