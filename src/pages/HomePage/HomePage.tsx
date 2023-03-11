import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (count: number, price: number) => void
    productsLike: {
        [id: number]: boolean
    }
    likeBtnClick: Function
}

const Home = (props: Props) => {
    return (
        <>
            <ProductsList
                addProductToCart={props.addProductToCart}
                productsLike={props.productsLike}
                likeBtnClick={props.likeBtnClick}
            />
            <Reviews />
        </>
    )
}
export default Home
