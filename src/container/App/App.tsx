import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/system'
import Home from 'pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import ProductPage from 'pages/ProductPage/ProductPage'

type Props = {}
export type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
