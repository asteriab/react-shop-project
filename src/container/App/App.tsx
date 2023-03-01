import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/system'
import Home from 'pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'

type Props = {}
type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const deleteProductFromCart = (id: number) => {
        const tempCart = { ...productsInCart }
        delete tempCart[id]
        setProductsInCart(tempCart)
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                deleteProductFromCart={deleteProductFromCart}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
