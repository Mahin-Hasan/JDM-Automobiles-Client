import error from '../../assets/error.png'


const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <img className='w-40' src={error} alt="" />
            <h1 className='text-5xl font-semibold text-center'><span className='text-rose-600 text-6xl'>404</span> Error <br /> Page not found</h1>
        </div>
    );
};

export default ErrorPage;