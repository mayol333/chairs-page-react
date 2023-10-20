export const FiveSection = () => {
    return (
        <section className="five-section">
            <div className="width-five-section">
                <div className="kontakt">
                    <p className="contact">kontakt</p>
                    <input className="name" type="text" placeholder="Imię" />
                    <input className="email" type="text" placeholder="email" />
                    <textarea
                        className="message"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Wiadomość"
                    ></textarea>
                </div>
                <div className="send">
                    <img
                        alt=""
                        className="last-photo"
                        src="/public/images/red_chair.png"
                    />
                    <label className="label" for="">
                        <input className="confirm" type="checkbox" />
                        Zgadzam się na przetwarzanie danych osobowych
                    </label>
                    <button className="last-click active">wyślij</button>
                </div>
            </div>
        </section>
    );
};
