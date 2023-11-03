import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MyBet() {
    // const { myBetAcc } = useParams();

    // const [myBetInfo, setMyBetInfo] = useState({
    //     myBetAcc: myBetAcc,
    //     title: `Bet ${myBetAcc} aaa`,
    //     description: `Bet ${myBetAcc} ddd description`,
    // });

    let id = 1;

    const [myBets, setMyBets] = useState([
        // TESTE
        {
            id: 1,
            title: `Bet ${id} A vs B`,
            betOn: "A",
            description: `Bet ${id} ddd description`,
            quantity: 1,
            odd: 2,
            status: "accepted",
        },
        {
            id: 2,
            title: `Bet ${id} A vs B`,
            betOn: "A",
            description: `Bet ${id} ddd description`,
            quantity: 1,
            odd: 2,
            status: "not_accepted",
        },
        {
            id: 3,
            title: `Bet ${id} A vs B`,
            betOn: "A",
            description: `Bet ${id} ddd description`,
            quantity: 1,
            odd: 2,
            status: "pending",
        },
        {
            id: 4,
            title: `Bet ${id} A vs B`,
            betOn: "B",
            description: `Bet ${id} ddd description`,
            quantity: 1,
            odd: 2,
            status: "pending",
        },
        {
            id: 5,
            title: `Bet ${id} A vs B`,
            betOn: "A",
            description: `Bet ${id} ddd description`,
            quantity: 1,
            odd: 2,
            status: "not_accepted",
        },
        {
            id: 6,
            betOn: "B",
            title: `Bet ${id} A vs B`,
            description: `Bet ${id} ddd description`,
            quantity: 1,
            odd: 2,
            status: "accepted",
        },
    ]);

    return (
        <div className="w-[75vw] p-12">
            <h1 className="text-3xl text-white font-semibold mb-4">My Bets</h1>

            {myBets.length ? (
                <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                <div className="flex bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <div className="py-3 px-6 text-left flex-1">Title</div>
                    <div className="py-3 px-6 text-left flex-1">Bet On</div>
                    <div className="py-3 px-6 text-left flex-1">Quantity</div>
                    <div className="py-3 px-6 text-left flex-1">Odd</div>
                    <div className="py-3 px-6 text-left flex-1">Status</div>
                </div>
                <div className="text-gray-600 text-base font-light">
                    {myBets.map((bet) => (
                        <div key={bet.id} className="flex border-b border-gray-200 hover:bg-gray-100 items-center">
                            <div className="py-3 px-6 text-left flex-1">{bet.title}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.betOn}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.quantity}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.odd}</div>
                            <div className="py-3 px-6 text-left flex-1 relative">
                                <div className={`h-4 w-4 rounded-full absolute left-[-10px] top-1/2 transform -translate-y-1/2 ${bet.status === "accepted" ? "bg-green-500" : bet.status === "pending" ? "bg-yellow-500" : "bg-red-500"}`}></div>
                                {bet.status}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            ):(
                <div className="flex justify-center items-center text-gray-500 text-xl font-medium">
                    You have no bets yet
                </div>
            )}
        </div>
    );
}
