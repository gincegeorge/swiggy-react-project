import { useRouteError } from 'react-router-dom'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
const Error = () => {

    const routeErr = useRouteError()
    console.log(routeErr);
    return (
        <>
            <Header />
            <div className='container'>
                <h1>{routeErr?.status}:{routeErr?.statusText}!</h1>
                <br />
                <h2>{routeErr?.error?.message}</h2>
            </div>
            <Footer />
        </>
    )
}

export default Error