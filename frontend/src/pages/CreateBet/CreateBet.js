import react from "react";
import { useParams, Link } from "react-router-dom";

export default function CreateBet() {
    return (
        <>
            <Link
                to="../../"
                relative="path"
                className="text-white text-xl hover:text-blue-color"
            >
                &larr;
                <span className="p-3 text-1.5rem">Back</span>
            </Link>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <h1 className="text-5xl font-bold text-white">Create Bet</h1>
            </div>
        </>
    );
}
