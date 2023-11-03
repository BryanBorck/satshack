import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LogoApp from '../../assets/betcoin_logotext.png';
import Orderbook from '../../components/Orderbook/Orderbook';

export default function Bet() {
    const { id } = useParams();

    const [bet, setBet] = useState({
        // TESTE
        id: id,
        title: `Bet ${id} aaa`,
        description: `Bet ${id} ddd description`,
        cover: 'https://picsum.photos/seed/picsum/200/300'
    });

    return (
        <div className='w-[75vw]'>
            {bet ? (
                <div className='flex flex-col items-start m-[5vh] space-y-6'>
                    <Link
                        to=".."
                        relative="path"
                        className="text-white text-xl hover:text-blue-color"
                    >&larr;
                        <span className='p-3 text-1.5rem'>Back</span>
                    </Link>
                    <div className="w-[100%] flex justify-center items-center bg-cover bg-[url('././assets/bkg_active_card.png')] h-[12vh] text-4xl font-bold text-center text-white shadow-lg rounded-[16px]">
                        Tema da Aposta
                    </div>

                    <div className='flex flex-row mb-[2.5vh] content-center w-full'>
                        <Orderbook/>
                    </div>


                    {/* <div className='flex flex-row mb-[2.5vh] content-center'>
                        <img className='h-[2rem] w-[2rem] rounded-[100px] shadow-md' src={LogoApp} alt="aaaa" />
                        <h1 className='leading-[2rem] ml-[10px] align-middle text-primary-color'>AAAAA</h1>
                    </div>
                    <div className='flex flex-row w-full'>
                        <div className='w-[75%]'>
                            


                            <section className='flex mt-[3vh]'>
                                <div className='flex flex-col items-start w-2/3 p-[2vh] rounded-[15px] shadow-md bg-[#fff]'>
                                    <h2 className='text-fl text-secondary-color mb-[2vh]'>Description</h2>
                                    <p className='text-fn text-gray-400 pr-[5vw]'>FASFSAFASF</p>
                                </div>
                                <div className='flex flex-col items-start ml-[3%] w-[30%] p-[2vh] rounded-[15px] shadow-md bg-[#fff]'>
                                    <h2 className='text-fn text-black mb-[2vh]'>About this bet</h2>
                                    <ul className='text-fs text-gray-400 w-full'>
                                        <li className='py-[1vh]'>Category: FASFAFAS</li>
                                        <div className='h-[2px] bg-[#f6f6f6]' />
                                        <li className='py-[1vh]'>Level: hARD</li>
                                        <div className='h-[2px] bg-[#f6f6f6]' />
                                        <li className='py-[1vh]'>Hours: 1</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className='flex flex-col items-start w-[25%]'>
                            <div className='ml-[3vw] w-[80%] rounded-[15px] shadow-md bg-[#fff]'>
                                <h2 className='text-fn text-black p-[2vh]'>bet Program</h2>
                                <ul>
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 1</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]' />
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 2</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]' />
                                    <li className='text-fn pl-[2vh] py-[1.5vh] hover:bg-[#5c5050] cursor-pointer transition duration-600'>Modulo 3</li>
                                    <div className='h-[2px] mx-[1.5vh] bg-[#f6f6f6]' />
                                    <li className='text-fn pl-[2vh] py-[1.5vh] mb-[2vh] hover:bg-[#f6f6f6] cursor-pointer transition duration-600'>Modulo 4</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}