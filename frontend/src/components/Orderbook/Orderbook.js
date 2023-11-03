import React from "react";

const Orderbook = () => {
    const orders = [
        { type: "A", wallet: "0x035475D1b044F15AA710ME468872523622DF7eb2", quantity: 5, odd: 1 },
        { type: "A", wallet: "0x035475D1b044F15A710ME468D872523622DF7eb2", quantity: 10, odd: 2 },
        { type: "A", wallet: "0x035475D1b044F15A710ME468G872523622DF7eb2", quantity: 15, odd: 2 },
        { type: "B", wallet: "0x035475D1b044F15A710ME4688S72523622DF7eb2", quantity: 20, odd: 1 },
        { type: "B", wallet: "0x035475D1b044F15A710ME4F68872523622DF7eb2", quantity: 25, odd: 4 },
    ];

    const orderTypes = [...new Set(orders.map((order) => order.type))]; // Extract unique order types

    return (
        <div className="flex w-full justify-between">
            {orderTypes.map((type, index) => (
                <div key={index} className="w-[30vw]">
                    <h1 className="text-3xl text-white font-semibold mb-4">{`Type ${type} Orders`}</h1>
                    <div className="min-w-max w-full bg-cover bg-[url('././assets/bkg_active_card.png')] shadow-lg rounded-lg overflow-hidden">
                        <div className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal flex">
                            <div className="py-3 px-6 text-left flex-1">
                                Wallet
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                Quantity
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                Odd
                            </div>
                        </div>
                        <div className="text-white text-base font-light h-[40vh] overflow-y-auto">
                            {orders
                                .filter((order) => order.type === type)
                                .map((order, orderIndex) => (
                                    <div
                                        key={orderIndex}
                                        className="border-b h-12 border-secondary-color flex hover:bg-secondary-color hover:bg-opacity-50"
                                    >
                                        <div className="py-3 px-6 text-left flex-1">
                                            {order.wallet.substring(0, 5) +
                                                "..." +
                                                order.wallet.substring(39, 42)}
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            {order.quantity}
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            {order.odd}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orderbook;
