import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: Function
}

const Home = (props: Props) => {
    return (
        <>
            <ProductsList addProductToCart={props.addProductToCart} />
        </>
    )
}
export default Home
