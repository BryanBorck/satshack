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
                        className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(256,256,256,0.05)] hover:bg-[rgba(100,50,256,0.5)] transition duration-1000 ease-in-out"
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

                {/* sidebar menu
                {isMenuOpen && (
                    <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-secondary-color">
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button onClick={() => setIsMenuOpen(false)} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Close sidebar</span>
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <nav className="mt-5 flex-1 px-2 space-y-1">
                                    <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" onClick={() => history('/investor')}>
                                        Dashboard
                                    </div>
                                    <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" onClick={() => history('/manager')}>
                                        Manager
                                    </div>
                                    <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" onClick={() => history('/fundslist')}>
                                        Funds List
                                    </div>
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                <ConnectWalletBtn
                                    isUnisatInstalled={isUnisatInstalled}
                                    connectWallet={connectWallet}
                                    account={account}
                                    signer={signer}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* menu */}

                {/* <div className="hidden lg:block">
                <ul className="inline-flex items-center space-x-10">
                <li><div className="px-6 lg:px-6 py-2 text-[1.23vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out"
                        onClick={() => history('/investor')}>Dashboard</div></li>
                    <li><div className="px-6 lg:px-6 py-2 text-[1.25vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out"
                    onClick={() => history("/manager")}>Manager</div></li>
                    <li><div className="px-6 lg:px-6 py-2 text-[1.25vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out" 
                    onClick={()  => history("/fundslist")} >Funds List</div></li>
                    <ConnectWalletBtn
                        isUnisatInstalled={isUnisatInstalled}
                        connectWallet={connectWallet}
                        account={account}
                        signer={signer}
                    />
                </ul>
                </div>
             */}
            </div>
        </header>
    );
}
