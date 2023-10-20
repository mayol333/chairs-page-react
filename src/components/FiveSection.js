import { useState } from "react";
export const FiveSection = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
        checkbox: false,
    });
    const handleNameChange = (event) => {
        const { value } = event.target;
        setContact({ ...contact, name: value });
    };
    const handleEmailChange = (event) => {
        const { value } = event.target;
        setContact({ ...contact, email: value });
    };
    const handleMessageChange = (event) => {
        const { value } = event.target;
        setContact({ ...contact, message: value });
    };
    const handleCheckboxChange = () => {
        const value = !contact.checkbox;
        setContact({ ...contact, checkbox: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contact);
    };
    return (
        <section className="five-section">
            <form onSubmit={handleSubmit}>
                <div className="width-five-section">
                    <div className="kontakt">
                        <p className="contact">kontakt</p>
                        <input
                            onChange={handleNameChange}
                            className="name"
                            type="text"
                            placeholder="Imię"
                            value={contact.name}
                        />
                        <input
                            onChange={handleEmailChange}
                            className="email"
                            type="text"
                            placeholder="email"
                            value={contact.email}
                        />
                        <textarea
                            onChange={handleMessageChange}
                            className="message"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Wiadomość"
                            value={contact.message}
                        ></textarea>
                    </div>
                    <div className="send">
                        <img
                            alt=""
                            className="last-photo"
                            src="/public/images/red_chair.png"
                        />
                        <label className="label" for="">
                            <input
                                className="confirm"
                                type="checkbox"
                                onChange={handleCheckboxChange}
                                value={contact.checkbox}
                            />
                            Zgadzam się na przetwarzanie danych osobowych
                        </label>
                        <button className="last-click active">wyślij</button>
                    </div>
                </div>
            </form>
        </section>
    );
};
