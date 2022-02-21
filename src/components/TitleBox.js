// import '../pages/ProductPage.css';

const TitleBox = (props) => {
    return(
        <>
            <h1 className="item_title">{props.title}</h1>
            <span className="item_no">Item No. {props.itemNo}</span>
        </>
    );
}

export default TitleBox;