export const FiveSection = () => {
    return (
        <section class="five-section">
            <div class="width-five-section">
                <div class="kontakt">
                    <p class="contact">kontakt</p>
                    <input class="name" type="text" placeholder="Imię" />
                    <input class="email" type="text" placeholder="email" />
                    <textarea
                        class="message"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Wiadomość"
                    ></textarea>
                </div>
                <div class="send">
                    <img
                        alt=""
                        class="last-photo"
                        src="/public/images/red_chair.png"
                    />
                    <label class="label" for="">
                        <input class="confirm" type="checkbox" />
                        Zgadzam się na przetwarzanie danych osobowych
                    </label>
                    <button class="last-click active">wyślij</button>
                </div>
            </div>
        </section>
    );
};
