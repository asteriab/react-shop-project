import { Container } from '@mui/system'
import Home from 'pages/Home/Home'

type Props = {
    // addProductToCart: (count: number, price: number) => void
}
const Main = (props: Props) => {
    return (
        <Container sx={{ padding: '60px 0' }}>
            <Home />
        </Container>
    )
}
export default Main
