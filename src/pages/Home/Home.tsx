import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Home = (props: Props) => {
    return (
        <>
            <ProductsList addProductToCart={props.addProductToCart} />
        </>
    )
}
export default Home
