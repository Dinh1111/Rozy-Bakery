import { Rate } from 'antd';
import {HeartOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './cardItem.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardItem=(props)=>{
    const{src,alt,title,description,rate,price,displayStyle}=props;
    return(
            <div className={displayStyle} >
                <div className="ProductImage">
                    <div className="Cart-Wish">
                        <div className="Wish"><HeartOutlined style={{fontSize:"18px"}}/></div>
                        <div className="Cart"><ShoppingCartOutlined style={{fontSize:"18px"}}/></div>
                    </div>
                    <LazyLoadImage
                    alt={alt}
                    src={src}
                    effect="blur"
                    className="Image"
                    />
                </div>
                <div className="CardItemInfo">
                    <div className="ProductTitle">
                        <p>{title}</p>
                    </div>
                    <div className="ProductDescription">
                        <p>{description}</p>
                    </div>
                    <div className="ProductRate">
                        <Rate disabled defaultValue={rate} />
                    </div>
                    <div className="ProductPrice">
                            <p>{price}$</p>
                    </div>
                </div>
                
                
            </div>
    )
}
export default CardItem