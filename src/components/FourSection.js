export const FourSection = () => {
    return (
        <section class="four-section">
            <div class="width-four-section">
                <div class="choice1">
                    <p class="krzesło1">skomponuj swoje krzesło</p>
                    <select id="softness" class="input1 rodzaj">
                        <option value="0">Wybierz rodzaj</option>
                        <option value="40">Miękki</option>
                        <option value="30">Twardy</option>
                    </select>
                    <select id="color" class="input1 kolor">
                        <option value="0">Wybierz kolor</option>
                        <option value="20">Czerwony</option>
                        <option value="15">Czarny</option>
                    </select>
                    <select id="source" class="input1 material">
                        <option value="0">Wybierz materiał</option>
                        <option value="50">Skóra</option>
                        <option value="40">Wełna</option>
                        <option value="45">Drewno</option>
                    </select>
                    <div class="checkbox">
                        <input
                            id="transport"
                            value="10"
                            class="checkbox1"
                            type="checkbox"
                        />
                        <p>Transport</p>
                    </div>
                </div>
                <div class="red-img">
                    <img src="images/red_chair.png" alt="" />
                </div>
                <div class="consume">
                    <p class="krzesło">podsumowanie</p>
                    <div class="sum">
                        <p class="twój-fotel">twój fotel</p>
                        <table class="whole-table">
                            <tr>
                                <td id="softnessText" class="table"></td>
                                <td id="softnessPrice"></td>
                            </tr>
                            <tr>
                                <td id="colorText" class="table"></td>
                                <td id="colorPrice"></td>
                            </tr>
                            <tr>
                                <td id="sourceText" class="table"></td>
                                <td id="sourcePrice"></td>
                            </tr>
                            <tr>
                                <td id="transportText" class="table"></td>
                                <td id="transportPrice"></td>
                            </tr>
                        </table>
                        {/* <div class="cena-koloru">
            <p class="color">color</p>
            <p class="color-price">0</p>
            </div>
            <div class="cena-materialu">
            <p class="source">source</p>
            <p class="source-price">0</p>
            </div>  */}
                        <div class="podsumowanie">
                            <p class="suma">suma</p>
                            <p class="final-price">0</p>
                        </div>
                    </div>
                    <button class="join-click-last active">zamawiam</button>
                </div>
            </div>
        </section>
    );
};
