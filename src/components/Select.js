export const Select = ({ options, handlePrice }) => {
    return (
        <select
            onChange={(event) => handlePrice(Number(event.target.value))}
            id="softness"
            className="input1 rodzaj"
        >
            {options.map(({ feature, value }) => {
                return (
                    <option value={value} key={value}>
                        {feature}
                    </option>
                );
            })}
        </select>
    );
};
