import { ShowMoreButton } from "./ShowMoreButton";
import { Logo } from "./Logo";
import { useState } from "react";
const imagesArray = [
    "/images/big_chair.png",
    "/images/red_chair.png",
    "/images/orange.png",
    "/images/black_chair.png",
];
export const FirstSection = () => {
    const [image, setImage] = useState(0);
    const handleImage = (param) => {
        if (param === "-") {
            setImage(() => (image === 0 ? 3 : image - 1));
        } else if (param === "+") {
            setImage(() => (image === 3 ? 0 : image + 1));
        }
    };
    return (
        <section className="first-section">
            <div className="wrapper">
                <div className="first-click">
                    <button
                        onClick={() => handleImage("-")}
                        className="click active"
                    >
                        {"<"}
                    </button>
                </div>
                <div>
                    <img className="picture" alt="" src={imagesArray[image]} />
                </div>
                <div className="middle">
                    <h1 className="headline">
                        <Logo />
                    </h1>
                    <p className="describe">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, tempora repellendus asperiores error, vitae
                        laudantium nesciunt iste dolore deleniti labore harum
                        soluta.
                    </p>
                    <ShowMoreButton text={"zobacz więcej"} />
                </div>
                <div className="second-click">
                    <button
                        onClick={() => handleImage("+")}
                        className="click active"
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </section>
    );
};
