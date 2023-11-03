import { Player } from '@lottiefiles/react-lottie-player';
import Animation from '../../assets/congrats_animation.json';
import { useNavigate } from 'react-router-dom';

export default function SuccessBet() {

    const history = useNavigate();
      
    return (
        <>
            <div className='w-[100vw] lg:w-[75vw] h-screen overflow-y-auto'>
                <section className="mb-6">
                    <div className="container mx-auto px-6 text-center py-8">
                        <div className='flex flex-col justify-center items-center my-10 mx-6 mb-12 shadow-lg text-white rounded-[20px] bg-cover bg-[url("././assets/bkg_card.png")]'>
                            <h2 className="flex justify-center items-center h-[12vh] mx-6 text-4xl font-bold text-center text-white">
                            Congratulations
                            </h2>
                            <div className='w-[60%] h-auto md:w-[25%] lg:w-[18%]'>
                                <Player
                                    src={Animation}
                                    className="player"
                                    loop
                                    autoplay
                                />
                            </div>
                            <h2 className="flex justify-center items-center h-[12vh] mx-6 text-4xl text-center text-white">
                                You just made a bet with Betcoin
                            </h2>
                            <button
                            className="my-6 w-[90%] md:w-[55%] lg:w-[35%] bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={() => history('/mybets')}
                            >
                            See my bets
                            </button>
                            <button
                            className="mb-6 w-[90%] md:w-[55%] lg:w-[35%] bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={() => history('/')}
                            >
                            Back home
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}