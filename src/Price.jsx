import "./price.css"
export default function Price({oldPrice  , newPrice}) {
    return (
        <div className="price">
            <span className="old-price"> &#8377; {oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
          <span className="new-price"> &#8377; {newPrice}</span>
        </div>
    )
}
