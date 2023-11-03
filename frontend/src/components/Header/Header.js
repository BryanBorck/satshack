import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoApp from "../../assets/betcoin_logotext.png";

export default function Header({ unisat, address, publicKey, isUnisatInstalled, handleAccountsChanged }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const history = useNavigate();

    return (
        <header className="lg:w-[25vw] lg:h-screen p-4 text-fl text-white">
            <div className="w-[100%] h-[100%] container mx-auto px-4 py-2 rounded-[16px] shadow-xl flex justify-between bg-cover bg-[url('././assets/bkg_sidemenu.png')]">
                <div className="w-[100%] flex flex-row md:flex-col lg:flex-col items-center items-center">
                    <img className="w-[30%] py-[1vh] md:w-[80%] md:py-[10vh] lg:w-[80%] lg:py-[10vh]" src={LogoApp} alt="Betcoin"/>

                    {/* responsivo */}

                    <div className="block lg:hidden ml-[50%]">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-color hover:border-blue-color appearance-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    {/* sidebar menu */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
                            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-cover bg-[url('././assets/bkg_sidemenu.png')]">
                                <div className="absolute top-0 right-0 ">
                                    <button onClick={() => setIsMenuOpen(false)} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Close sidebar</span>
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <nav className="mt-5 flex-1 px-2 space-y-2">
                                        <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" 
                                             onClick={() => history('/')}>
                                            Explore
                                        </div>
                                        <div className="group flex items-center px-4 pt-3 pb-8 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" 
                                             onClick={() => history('/mybet')}>
                                            My Bets
                                        </div>
                                        <button
                                            className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(100,50,256,0.5)] hover:bg-[rgba(100,50,256,1)] transition duration-1000 ease-in-out"
                                        >
                                            {isUnisatInstalled ? (
                                                <div
                                                    onClick={async () => {
                                                        const result = await unisat.requestAccounts();
                                                        handleAccountsChanged(result);
                                                    }}
                                                >
                                                    <h3 className="flex justify-center truncate">
                                                        {address
                                                            ? "Wallet Connected: " +
                                                            address.substring(0, 5) +
                                                            "..." +
                                                            address.substring(39, 42)
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
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                </div>
                            </div>
                        </div>
                    )}

                    {/* menu */}
                    
                    <div className="hidden lg:block space-y-6">
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
                            className="w-full py-[1vh] rounded-[16px] font-bold bg-[rgba(100,50,256,0.5)] hover:bg-[rgba(100,50,256,1)] transition duration-1000 ease-in-out"
                        >
                            {isUnisatInstalled ? (
                                <div
                                    onClick={async () => {
                                        const result = await unisat.requestAccounts();
                                        handleAccountsChanged(result);
                                    }}
                                >
                                    <h3 className="flex justify-center truncate">
                                        {address
                                            ? "Wallet Connected: " +
                                            address.substring(0, 5) +
                                            "..." +
                                            address.substring(39, 42)
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
            </div>
        </header>
    );
}
