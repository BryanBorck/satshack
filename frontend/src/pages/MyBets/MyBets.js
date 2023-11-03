import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MyBet() {
    // const { myBetAcc } = useParams();

    // const [myBetInfo, setMyBetInfo] = useState({
    //     myBetAcc: myBetAcc,
    //     title: `Bet ${myBetAcc} aaa`,
    //     description: `Bet ${myBetAcc} ddd description`,
    // });

    let id = 1;
    const [myBets, setMyBets] = useState([]);
    const [publicKey, setPublicKey] = useState("");
    const [themes, setThemes] = useState([]);
    async function getThemes(){
        const url = `${process.env.REACT_APP_API_URL}/themes`;
        const themesTmp = await axios.get(url);
        console.log("themes", themesTmp.data);
        setThemes(themesTmp.data);
        return themesTmp.data;
    }

    async function getUserData() {
        const pubKey = await window.unisat.getPublicKey();
        setPublicKey(pubKey);
        const url = `${process.env.REACT_APP_API_URL}/bets/user/${pubKey}`;
        const bets = await axios.get(url);

        console.log("bets", bets.data);
        const themes = await getThemes();

        setMyBets(bets.data);

        
    }

    async function finishBet(betId, escrow, value, odd){
        try{
            const amount = parseFloat(value) * parseFloat(odd);

            const txId = await window.unisat.sendBitcoin(escrow, parseInt(amount));
            window.alert("Success! Transaction ID: " + txId);

            window.open("https://mempool.space/testnet/tx/" + txId);

            const urlConfirm = `${process.env.REACT_APP_API_URL}/bet/${betId}/finish`;

            await axios.post(urlConfirm);

            await getUserData();

            history("/success");

        }catch(err){
            console.log(err);
            window.alert("Connect Wallet to Unisat");
        }

    }

    
    useEffect(() => {
        getUserData();
    }, []);
        
    const history = useNavigate();

    // const [myBets, setMyBets] = useState([
    //     // TESTE
    //     {
    //         id: 1,
    //         title: `Bet ${id} A vs B`,
    //         betOn: "A",
    //         description: `Bet ${id} ddd description`,
    //         quantity: 1,
    //         odd: 2,
    //         status: "accepted",
    //     },
    //     {
    //         id: 2,
    //         title: `Bet ${id} A vs B`,
    //         betOn: "A",
    //         description: `Bet ${id} ddd description`,
    //         quantity: 1,
    //         odd: 2,
    //         status: "not_accepted",
    //     },
    //     {
    //         id: 3,
    //         title: `Bet ${id} A vs B`,
    //         betOn: "A",
    //         description: `Bet ${id} ddd description`,
    //         quantity: 1,
    //         odd: 2,
    //         status: "pending",
    //     },
    //     {
    //         id: 4,
    //         title: `Bet ${id} A vs B`,
    //         betOn: "B",
    //         description: `Bet ${id} ddd description`,
    //         quantity: 1,
    //         odd: 2,
    //         status: "pending",
    //     },
    //     {
    //         id: 5,
    //         title: `Bet ${id} A vs B`,
    //         betOn: "A",
    //         description: `Bet ${id} ddd description`,
    //         quantity: 1,
    //         odd: 2,
    //         status: "not_accepted",
    //     },
    //     {
    //         id: 6,
    //         betOn: "B",
    //         title: `Bet ${id} A vs B`,
    //         description: `Bet ${id} ddd description`,
    //         quantity: 1,
    //         odd: 2,
    //         status: "accepted",
    //     },
    // ]);

    async function payBet(){

    }

    

    return (
        <div className="md:w-[75vw] lg:w-[75vw] px-6 md:p-12 lg:p-12">
            <h1 className="text-3xl text-white font-semibold mb-8">My Bets</h1>

            {myBets.length ? (
                <div className="flex flex-col shadow-lg rounded-lg overflow-hidden mb-72 md:mb-0 lg:mb-0">
                <div className="flex border-blue-color bg-gradient-to-r from-primary-color to-secondary-color rounded-lg border-[3px] text-white uppercase text-[0.5rem] md:text-sm lg:text-sm leading-normal">
                    <div className="py-3 px-6 text-left flex-1">Theme</div>
                    <div className="py-3 px-6 text-left flex-1">Bet On</div>
                    <div className="py-3 px-6 text-left flex-1">Amout</div>
                    <div className="py-3 px-6 text-left flex-1">Odd</div>
                    <div className="py-3 px-6 text-left flex-1">Status</div>
                    <div className="py-3 px-6 text-left flex-1">Accept Bet</div>
                </div>
                <div className="text-white text-[0.6rem] md:text-sm lg:text-sm font-light">
                    {myBets.map((bet) => (
                        <div key={bet.id} className="border-b h-14 items-center border-secondary-color flex hover:bg-secondary-color hover:bg-opacity-50">
                            <div className="py-3 px-6 text-left flex-1">{bet.theme}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.option}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.value}</div>
                            <div className="py-3 px-6 text-left flex-1">{bet.odd}</div>
                            <div className="py-3 px-6 text-left flex-1 relative">
                                <div className={`h-4 w-4 rounded-full absolute left-[-10px] top-1/2 transform -translate-y-1/2 ${bet.status === "completed" ? "bg-green-500" : bet.status === "pending" ? "bg-yellow-500" : "bg-blue-500"}`}></div>
                                {bet.status}
                            </div>
                            <div className="py-3 px-6 text-left flex-1">
                                {bet.status === 'confirmed' && 
                                    <button className="w-full bg-transparent hover:bg-blue-color text-clue-color font-bold hover:text-white py-2 px-4 border-2 border-blue-color hover:border-transparent rounded"
                                            onClick={() => finishBet(bet.id, bet.escrow, bet.value, bet.odd)}>
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
