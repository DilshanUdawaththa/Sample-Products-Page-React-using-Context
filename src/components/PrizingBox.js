const PrizingBox = (props) => {
    return(
        <>
            <span className="item_price">{props.currencySymbol}{props.priceBegin}<sup>{props.priceLast}</sup></span>
        </>
    );
}

export default PrizingBox;