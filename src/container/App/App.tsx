import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { createContext, useState } from 'react'
import { Container } from '@mui/system'
import Home from 'pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { omit } from 'lodash'

type Props = {}
type ProductsInCartType = {
    [id: number]: number
}
type ProductsLikeType = {
    [id: number]: boolean
}

type Context = {
    productsLike: ProductsLikeType
    deleteProductFromCart: Function
}

export const MyContext = createContext<Context | null>(null)

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({})

    const [productsLike, setProductsLike] = useState<ProductsLikeType>({})

    const likeBtnClick = (id: number) => {
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const deleteProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <MyContext.Provider value={{ productsLike, deleteProductFromCart }}>
                <Header productsInCart={productsInCart} />
                <Container sx={{ padding: '60px 0' }}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    addProductToCart={addProductToCart}
                                    productsLike={productsLike}
                                    likeBtnClick={likeBtnClick}
                                />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <CartPage
                                    productsInCart={productsInCart}
                                    deleteProductFromCart={
                                        deleteProductFromCart
                                    }
                                    changeProductQuantity={
                                        changeProductQuantity
                                    }
                                />
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/shipping" element={<ShippingPage />} />
                    </Routes>
                </Container>
                <Footer />
            </MyContext.Provider>
        </StyledEngineProvider>
    )
}
export default App
