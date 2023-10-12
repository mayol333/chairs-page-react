export const Box = ({ plan, price, offers }) => {
    return (
        <div className="box1">
            <div className="small-circle">
                <div className="small-gray-circle"></div>
            </div>
            <p className="basic-plan">{plan}</p>
            <div className="circle">
                {price}
                <p className="text-center pln">pln/msc</p>
            </div>
            {offers.map((offer, index) => {
                return (
                    <p key={index} className="zakup">
                        {offer}
                    </p>
                );
            })}
            <button className="join-click active">dołącz</button>
        </div>
    );
};
