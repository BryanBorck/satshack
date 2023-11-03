import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LogoApp from '../../assets/betcoin_logotext.png';
import Orderbook from '../../components/Orderbook/Orderbook';

export default function Bet() {
    const { id } = useParams();

    const [bet, setBet] = useState({
        // TESTE
        id: id,
        name: `Bet ${id}`,
        option1: 'Type A',
        option2: 'Type B',
        description: `Bet ${id} description`,
        cover: 'https://img.staticmb.com/mbcontent/images/uploads/2023/1/white-house.jpg'
    });

    return (
        <div className='w-[75vw] overflow-y-auto'>
            {bet ? (
                <div className='flex flex-col items-start m-[5vh] space-y-8'>
                    <Link
                        to=".."
                        relative="path"
                        className="text-white text-xl hover:text-blue-color"
                    >&larr;
                        <span className='p-3 text-1.5rem'>Back</span>
                    </Link>
                    <div className="w-[100%] flex justify-center items-center bg-cover bg-[url('././assets/bkg_active_card.png')] h-[12vh] text-4xl font-bold text-center text-white shadow-lg rounded-[16px]">
                        {bet.name}
                    </div>
                    <div className="w-[100%] flex justify-center items-center h-[8vh] text-xl font-light uppercase tracking-wide text-center text-white bg-gradient-to-r from-primary-blur to-secondary-blur rounded-[16px]">
                        {bet.description}
                    </div>
                    <div className='w-[100%] flex flex-col justify-center bg-gradient-to-r from-primary-blur to-secondary-blur rounded-[16px]'>
                        <img src={bet.cover} className="object-cover w-[100%] flex justify-center items-center h-[60vh] rounded-t-[16px]"/>
                        <div className='flex flex-row text-center w-full text-3xl text-white font-bold cursor-pointer'>
                            <div className='basis-1/2 flex h-[12vh] items-center justify-center bg-transparent hover:bg-yellow-color drop-shadow-glow rounded-bl-[16px] transition duration-1000 ease-in-out'>Create bet in {bet.option1}</div>
                            <div className='basis-1/2 flex h-[12vh] items-center justify-center bg-transparent hover:bg-green-color drop-shadow-glow rounded-br-[16px] transition duration-1000 ease-in-out'>Create bet in {bet.option2}</div>
                        </div>
                    </div>
                    <div className='flex flex-row my-[5vh] content-center w-full'>
                        <Orderbook/>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}