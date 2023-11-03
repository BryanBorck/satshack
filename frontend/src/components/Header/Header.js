import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoApp from "../../assets/betcoin_logotext.png";

export default function Header({ isUnisatInstalled, connectWallet, account, signer }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useNavigate();

    return (
        <header className="lg:w-[25vw] lg:h-screen p-4 text-fl text-white">
            <div className="w-[100%] h-[100%] container mx-auto px-4 py-2 rounded-[16px] shadow-xl flex justify-between bg-cover bg-[url('././assets/bkg_sidemenu.png')]">
                <div className="w-[100%] flex flex-col items-center space-y-6">
                    <img className="w-[80%] py-[10vh]" src={LogoApp} alt="Betcoin"/>
                    <button
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(256,256,256,0.05)] hover:bg-[rgba(100,50,256,0.5)] transition duration-1000 ease-in-out"
                        onClick={() => history("/")}
                    >
                        Explore
                    </button>
                    <button
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(256,256,256,0.05)] hover:bg-[rgba(100,50,256,0.5)] transition duration-1000 ease-in-out"
                        onClick={() => history("/mybet")}
                    >
                        My Bets
                    </button>
                    <button
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(256,256,256,0.05)] hover:bg-[rgba(100,50,256,0.5)] transition duration-1000 ease-in-out"
                        onClick={() => history('/success')}
                    >
                        Test Success
                    </button>        
                    <button
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(256,256,256,0.05)] hover:bg-[rgba(100,50,256,0.5)] transition duration-1000 ease-in-out"
                        onClick={() => history('/createtheme')}
                    >
                        Test Create Theme
                    </button>             
                    <button
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(256,256,256,0.05)] hover:bg-[rgba(100,50,256,0.5)] transition duration-1000 ease-in-out"
                        onClick={() => history('/createbet')}
                    >
                        Test Create Bet
                    </button>        
                    <button
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(100,50,256,0.5)] hover:bg-[rgba(100,50,256,1)] transition duration-1000 ease-in-out"
                    >
                        {isUnisatInstalled ? (
                    <div
                        onClick={connectWallet}
                    >
                        <h3 className="flex justify-center">
                            {account
                                ? "Wallet Connected: " +
                                  account.substring(0, 5) +
                                  "..." +
                                  account.substring(39, 42)
                                : "Connect Wallet"}
                        </h3>
                    </div>
                ) : (
                    <div 
                    >
                        <a className="text-center" href="https://unisat.io/download">
                            Install Unisat
                        </a>
                    </div>
                )}
                    </button>        
                </div>
            </div>
        </header>
    );
}
