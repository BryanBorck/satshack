import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MyBet() {
    // const { myBetAcc } = useParams();

    // const [myBetInfo, setMyBetInfo] = useState({
    //     myBetAcc: myBetAcc,
    //     title: `Bet ${myBetAcc} aaa`,
    //     description: `Bet ${myBetAcc} ddd description`,
    // });

    let id = 1;

    const history = useNavigate();

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
            <h1 className="text-3xl text-white font-semibold mb-8">My Bets</h1>

            {myBets.length ? (
                <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                <div className="flex border-blue-color bg-gradient-to-r from-primary-color to-secondary-color rounded-lg border-[3px] text-white uppercase text-sm leading-normal">
                    <div className="py-3 px-6 text-left flex-1">Title</div>
                    <div className="py-3 px-6 text-left flex-1">Bet On</div>
                    <div className="py-3 px-6 text-left flex-1">Quantity</div>
                    <div className="py-3 px-6 text-left flex-1">Odd</div>
                    <div className="py-3 px-6 text-left flex-1">Status</div>
                    <div className="py-3 px-6 text-left flex-1">Accept Bet</div>
                </div>
                <div className="text-white text-base font-light">
                    {myBets.map((bet) => (
                        <div key={bet.id} className="border-b h-14 items-center border-secondary-color flex hover:bg-secondary-color hover:bg-opacity-50">
                            <div className="py-3 px-6 text-left flex-1">{bet.title}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.betOn}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.quantity}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.odd}</div>
                            <div className="py-3 px-6 text-left flex-1 relative">
                                <div className={`h-4 w-4 rounded-full absolute left-[-10px] top-1/2 transform -translate-y-1/2 ${bet.status === "accepted" ? "bg-green-500" : bet.status === "pending" ? "bg-yellow-500" : "bg-red-500"}`}></div>
                                {bet.status}
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                {bet.status === 'pending' && 
                                    <button className="w-full bg-transparent hover:bg-blue-color text-clue-color font-bold hover:text-white py-2 px-4 border-2 border-blue-color hover:border-transparent rounded"
                                            onClick={() => history('/')}>
                                        Accept Bet
                                    </button>
                                }
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
