import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Home = (props: Props) => {
    return (
        <>
            <ProductsList addProductToCart={props.addProductToCart} />
            <Reviews />
        </>
    )
}
export default Home
