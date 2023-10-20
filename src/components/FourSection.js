import { Select } from "./Select";
import { useState } from "react";
export const FourSection = () => {
    const softSelect = [
        {
            feature: "Wybierz rodzaj",
            value: 0,
        },
        {
            feature: "Miękki",
            value: 40,
        },
        {
            feature: "Twardy",
            value: 30,
        },
    ];
    const colorSelect = [
        {
            feature: "Wybierz kolor",
            value: 0,
        },
        {
            feature: "Czerwony",
            value: 20,
        },
        {
            feature: "Czarny",
            value: 15,
        },
    ];
    const materialSelect = [
        {
            feature: "Wybierz materiał",
            value: 0,
        },
        {
            feature: "Skóra",
            value: 50,
        },
        {
            feature: "Wełna",
            value: 40,
        },
        {
            feature: "Drewno",
            value: 45,
        },
    ];
    const [softPrice, setSoftPrice] = useState(0);
    const [colorPrice, setColorPrice] = useState(0);
    const [materialPrice, setMaterialPrice] = useState(0);
    const [transport, setTransport] = useState(false);
    const transportPrice = transport ? 10 : 0;
    const finalPrice = softPrice + colorPrice + materialPrice + transportPrice;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };
    return (
        <section className="four-section">
            <form onSubmit={handleSubmit}>
                <div className="width-four-section">
                    <div className="choice1">
                        <p className="krzesło1">skomponuj swoje krzesło</p>
                        <Select
                            options={softSelect}
                            handlePrice={setSoftPrice}
                        />
                        <Select
                            options={colorSelect}
                            handlePrice={setColorPrice}
                        />
                        <Select
                            options={materialSelect}
                            handlePrice={setMaterialPrice}
                        />
                        <div className="checkbox">
                            <input
                                onChange={() => setTransport(!transport)}
                                checked={transport}
                                className="checkbox1"
                                type="checkbox"
                            />
                            <p>Transport</p>
                        </div>
                    </div>
                    <div className="red-img">
                        <img src="images/red_chair.png" alt="" />
                    </div>
                    <div className="consume">
                        <p className="krzesło">podsumowanie</p>
                        <div className="sum">
                            <p className="twój-fotel">twój fotel</p>
                            <table className="whole-table">
                                <tr>
                                    <td className="table"></td>
                                    <td>{softPrice}</td>
                                </tr>
                                <tr>
                                    <td className="table"></td>
                                    <td>{colorPrice}</td>
                                </tr>
                                <tr>
                                    <td className="table"></td>
                                    <td>{materialPrice}</td>
                                </tr>
                                <tr>
                                    <td className="table"></td>
                                    <td>{transportPrice}</td>
                                </tr>
                            </table>
                            <div className="podsumowanie">
                                <p className="suma">suma</p>
                                <p className="final-price">{finalPrice}</p>
                            </div>
                        </div>
                        <button className="join-click-last active">
                            zamawiam
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};
