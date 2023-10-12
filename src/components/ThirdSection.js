import { Box } from "./Box";
export const ThirdSection = () => {
    const boxes = [
        {
            id: 0,
            plan: "basic",
            price: (
                <p className="text-center">
                    8<sub>5</sub> <sup>99</sup>
                </p>
            ),
            offers: ["Zakup towaru + dowóz", "Serwis"],
        },
        {
            id: 1,
            plan: "standard",
            price: (
                <p className="text-center">
                    95 <sup>99</sup>
                </p>
            ),
            offers: ["Zakup towaru + dowóz", "Serwis", "Gwarancja 5 lat"],
        },
        {
            id: 2,
            plan: "advance",
            price: (
                <p className="text-center">
                    211 <sup>00</sup>
                </p>
            ),
            offers: [
                "Zakup towaru + dowóz",
                "Serwis",
                "Gwarancja 6 lat",
                "Porady Projektanta",
            ],
        },
    ];
    return (
        <section className="third-section">
            <div className="width-third-section">
                <div className="headline2">
                    <p className="cennik">cennik</p>
                </div>
                <div className="boxes">
                    {boxes.map(({ id, plan, price, offers }) => {
                        return (
                            <Box
                                key={id}
                                plan={plan}
                                price={price}
                                offers={offers}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
