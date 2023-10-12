export const SecondSection = () => {
    const chairType = [
        {
            id: 0,
            imageClass: "img1",
            cardText: "Chair CLAIR",
        },
        {
            id: 1,
            imageClass: "img2",
            cardText: "Chair MARGARITA",
        },
        {
            id: 2,
            imageClass: "img3",
            cardText: "Chair ROSITA",
        },
    ];
    return (
        <section className="second-section">
            {chairType.map(({ id, imageClass, cardText }) => {
                return (
                    <div key={id} className={`${imageClass} images-style`}>
                        <div className="gray-line">
                            <p className="card-text">{cardText}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
