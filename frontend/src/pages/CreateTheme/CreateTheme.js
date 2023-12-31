import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnim from '../../assets/loading.json';
import { useNavigate } from 'react-router-dom';

export default function CreateTheme() {

    const history = useNavigate();

    const [name, setName] = React.useState('');
    const [ticker, setTicker] = React.useState('');
    const [admFee, setAdmFee] = React.useState(0.5);
    const [perfFee, setPerfFee] = React.useState(10);

    const [loading, setLoading] = React.useState(false);

    return (
        <>
            <div className='h-screen w-[100vw] lg:w-[75vw] text-gray-700 overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-0 text-center py-12 mb-2 md:px-6 lg:px-6">
                        <div className='flex flex-col items-start pl-8'>
                            <button
                                onClick={() => history(`/`)}
                                relative="path"
                                className="text-white text-xl hover:text-blue-color"
                            >&larr;
                                <span className='p-3 text-1.5rem'>Back</span>
                            </button>
                        </div>
                        <div className='flex flex-row justify-center mt-10 mb-10'>
                            <div className='w-[100%] mx-6 px-10 pb-6 shadow-lg text-white bg-cover bg-[url("././assets/bkg_card.png")] rounded-[20px]'>
                                <h2 className="flex justify-center items-center h-[12vh] mx-6 text-4xl font-bold text-center text-white">
                                    Create your theme
                                </h2>
                                <div className='my-12'>
                                    <div>
                                        <div className="mb-4 text-white">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                                            <div className="flex flex-col">
                                                <label className="block font-medium md:text-md lg:text-md mb-2" htmlFor="name">
                                                    What will be the name of your fund?
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder='Name'
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className=" bg-transparent border-b-[1px] border-white md:text-md lg:text-md text-center text-white p-2 mt-4 outline-0 shadow-lg hover:bg-[rgba(256,256,256,0.05)] transition duration-1000 ease-in-out"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="block font-medium md:text-md lg:text-md mb-2 mt-6 md:mt-0 lg:mt-0" htmlFor="ticker">
                                                    What will be its ticker representation?
                                                </label>
                                                <input
                                                    type="text"
                                                    id="ticker"
                                                    name="ticker"
                                                    placeholder='Ticker'
                                                    value={ticker}
                                                    onChange={(e) => setTicker(e.target.value)}
                                                    className="bg-transparent border-b-[1px] border-white md:text-md lg:text-md text-center text-white p-2 mt-4 outline-0 shadow-lg hover:bg-[rgba(256,256,256,0.05)] transition duration-1000 ease-in-out"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                                            <div className="flex flex-col">
                                                <label className="block font-medium md:text-md lg:text-md mb-2 mt-6" htmlFor="admFee">
                                                    What will be the admin fee (in %)?
                                                </label>
                                                <input
                                                    type="number"
                                                    id="admFee"
                                                    name="admFee"
                                                    placeholder='Admin Fee'
                                                    value={admFee}
                                                    onChange={(e) => setAdmFee(e.target.value)}
                                                    className=" bg-transparent border-b-[1px] border-white md:text-md lg:text-md text-center text-white p-2 mt-4 outline-0 shadow-lg hover:bg-[rgba(256,256,256,0.05)] transition duration-1000 ease-in-out"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="block font-medium md:text-md lg:text-md mb-2 mt-6" htmlFor="perfFee">
                                                    What will be the performance fee (in %)?
                                                </label>
                                                <input
                                                    type="percentage"
                                                    id="perfFee"
                                                    name="perfFee"
                                                    placeholder='Performance Fee'
                                                    value={perfFee}
                                                    onChange={(e) => setPerfFee(e.target.value)}
                                                    className=" bg-transparent border-b-[1px] border-white md:text-md lg:text-md text-center text-white p-2 mt-4 outline-0 shadow-lg hover:bg-[rgba(256,256,256,0.05)] transition duration-1000 ease-in-out"
                                                />
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <button
                                className="bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold border-2 border-transparent py-2 px-20 shadow-lg rounded-full uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" 
                                // onClick={handleClick}
                                >
                                {loading ? 'Loading...' : 'Create'}
                                </button>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-[100px] h-[25px] my-4'>
                                        {loading ? 
                                        <Player
                                            src={LoadingAnim}
                                            className="player"
                                            loop
                                            autoplay
                                        />
                                        : <></>}  
                                    </div>
                                </div>                                                              
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}