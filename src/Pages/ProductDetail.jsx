import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {data} from "../data/data";
const ProductDetail = () => {
  const { id } = useParams();
//   const items = data.find((e) => e.id == id);
    const items = data.find((e)=>{
        if(e.id == id){
            return e;
        }
    })
  return (
    <div className="detail-product">
      <div className="info-container">
        <img className="info-img" src={items.img} alt={items.title} />
        <ul className="product-info">
          <li>
            Model : <span>{items.title}</span>
          </li>
          <li>
            Color : <span>{items.color}</span>
          </li>
          <li>
            Announced Date : <span>{items.announced}</span>
          </li>
          <li>
            Display : <span>{items.display}</span>
          </li>
          <li>
            Resolution : <span>{items.resolution}</span>
          </li>
          <li>
            Camera : <span>{items.camera}</span>
          </li>
          <li>
            Chip : <span>{items.chipset}</span>
          </li>
          <li>
            Ram : <span>{items.ram}</span>
          </li>
          <li>
            Battery : <span>{items.battery}</span>
          </li>
          <li>
            Price : <span>{items.price}</span>
          </li>
          
        </ul>
        
      </div>
      <Link to={"/"} className="back">Back</Link>
    </div>
  );
};

export default ProductDetail;
