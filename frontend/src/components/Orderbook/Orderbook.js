import axios from "axios";
import { useState, useEffect, useMemo } from "react";

const Orderbook = ({themeId, option_1, option_2}) => {
    const [orders, setOrders] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // dummy data
    // orders = [
    //     { type: "A", wallet: "0x035475D1b044F15AA710ME468872523622DF7eb2", quantity: 5, odd: 1 },
    //     { type: "A", wallet: "0x035475D1b044F15A710ME468D872523622DF7eb2", quantity: 10, odd: 2 },
    //     { type: "A", wallet: "0x035475D1b044F15A710ME468G872523622DF7eb2", quantity: 15, odd: 2 },
    //     { type: "B", wallet: "0x035475D1b044F15A710ME4688S72523622DF7eb2", quantity: 20, odd: 1 },
    //     { type: "B", wallet: "0x035475D1b044F15A710ME4F68872523622DF7eb2", quantity: 25, odd: 4 },
    // ];

    useEffect(() => {
        const fetchOrders = async () => {
            const url = `${process.env.REACT_APP_API_URL}/bets/${themeId}`;
            axios.get(url)
            .then(response => {
                setOrders(response.data);
                console.log("got orders", response.data);
            }).catch(error => {
                console.log(error);
                window.alert(" order Error");
                setOrders([]);
            });
        };
        fetchOrders();
    }, []);
    
    option_1 = "1";
    option_2 = "2";

    const orderTypes = [option_1, option_2]; // Extract unique order types
    

    const handleBetClick = () => {
        console.log("Bet clicked");
    }

    return (
        <div className="w-[100%] grid grid-cols-1 lg:gap-10 lg:grid-cols-2 my-[2.5vh] ">
            {errorMsg && <div className="text-red-500">{errorMsg}</div>}
            {orderTypes.map((type, index) => {
                
                console.log(type)
                return(<div key={index} className="">
                    <h1 className="text-3xl text-white font-semibold my-6 md:mb-4 lg:mb-4">{`Type ${type} Orders`}</h1>
                    <div className="w-full shadow-lg rounded-lg overflow-hidden">
                        <div className= {`${index ? 'border-green-color' : 'border-yellow-color'} bg-gradient-to-r from-primary-color to-secondary-color rounded-lg border-[3px] text-white font-bold uppercase text-[0.8rem] leading-normal flex`}>
                            <div className="py-3 px-6 text-left flex-1">
                                Wallet
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                Quantity
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                Odd
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                Bet now
                            </div>
                        </div>
                        <div className="text-white text-base font-bold my-8 h-[25vh] md:my-0 md:h-[40vh] lg:my-0 lg:h-[40vh] shadow-lg overflow-y-auto">
                            {orders
                                .filter((order) => order.option === type)
                                .map((order, orderIndex) => {
                                    console.log("type", type)
                                    console.log("option", order.option)
                                    console.log("order", order)
                                    console.log("orderIndex", orderIndex)
                                    return(
                                    <div
                                        key={orderIndex}
                                        className="border-b h-14 items-center border-secondary-color flex hover:bg-secondary-color hover:bg-opacity-50"
                                    >
                                        <div className="py-3 px-6 text-left flex-1">
                                            {order.public_key_starter.substring(0, 5) +
                                                "..." +
                                                order.public_key_starter.substring(39, 42)}
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            {order.value}
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            {order.odd}
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            <button 
                                                onClick={() => handleBetClick()}
                                                className="w-full bg-transparent hover:bg-blue-color text-clue-color font-bold hover:text-white py-2 px-4 border-2 border-blue-color hover:border-transparent rounded">
                                                Bet
                                            </button>
                                        </div>
                                    </div>
                                )})}
                        </div>
                    </div>
                </div>
            )})}
        </div>
    );
};

export default Orderbook;
