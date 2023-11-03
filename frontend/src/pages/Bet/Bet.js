import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import LogoApp from '../../assets/betcoin_logotext.png';
import Orderbook from '../../components/Orderbook/Orderbook';

export default function Bet() {
    const { id } = useParams();

    const history = useNavigate();

    // const [bet, setBet] = useState({
    //     // TESTE
    //     id: id,
    //     name: `Bet ${id}`,
    //     option_1: 'Type A',
    //     option_2: 'Type B',
    //     description: `Bet ${id} description`,
    //     cover: 'https://img.staticmb.com/mbcontent/images/uploads/2023/1/white-house.jpg'
    // });

    // get location state
    const location = useLocation();
    const bet = location.state.bet;


    return (
        <div className='w-[100vw] md:w-[75vw] lg:w-[75vw] overflow-y-auto'>
            {bet ? (
                <div className='flex flex-col items-start m-[2.5vh] lg:m-[5vh] space-y-8'>
                    <button
                        onClick={() => history(`/`)}
                        relative="path"
                        className="text-white text-xl hover:text-blue-color"
                    >&larr;
                        <span className='p-3 text-1.5rem'>Back</span>
                    </button>
                    <div className="w-[100%] flex justify-center items-center bg-cover bg-[url('././assets/bkg_active_card.png')] h-[12vh] text-4xl font-bold text-center text-white shadow-lg rounded-[16px]">
                        {bet.name}
                    </div>
                    <div className="w-[100%] flex justify-center items-center h-[8vh] text-xl font-light uppercase tracking-wide text-center text-white bg-gradient-to-r from-primary-blur to-secondary-blur rounded-[16px]">
                        {bet.description}
                    </div>
                    <div className='w-[100%] flex flex-col justify-center bg-gradient-to-r from-primary-blur to-secondary-blur rounded-[16px]'>
                        <img src={bet.cover} className="object-cover w-[100%] flex justify-center items-center h-[60vh] rounded-t-[16px]"/>
                        <div className='flex flex-row text-center w-full text-xl lg:text-3xl text-white font-bold cursor-pointer'>
                            <button
                                onClick={() => history(`/createbet/${bet.id}/${bet.name}/${bet.option_1}/1`)}
                                className='basis-1/2 flex h-[12vh] items-center justify-center bg-transparent hover:bg-yellow-color drop-shadow-glow rounded-bl-[16px] transition duration-1000 ease-in-out'
                            >
                                <p>
                                    Create bet in {bet.option_1}
                                </p>
                            </button>
                            <button
                                onClick={() => history(`/createbet/${bet.id}/${bet.name}/${bet.option_2}/2`)}
                                className='basis-1/2 flex h-[12vh] items-center justify-center bg-transparent hover:bg-green-color drop-shadow-glow rounded-br-[16px] transition duration-1000 ease-in-out'
                            >
                                <p>
                                    Create bet in {bet.option_2}
                                </p>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row my-[5vh] content-center w-full'>
                        <Orderbook  
                        themeId={bet.id} option_1={bet.option_1} option_2={bet.option_2}/>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}