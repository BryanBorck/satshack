import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [bets, setBets] = useState([
        // TESTE
        {
            id: 1,
            name: 'Bet 1',
            option1: 'Option 1',
            option2: 'Option 2',
            description: 'Bet 1 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 2,
            name: 'Bet 2',
            option1: 'Option 1',
            option2: 'Option 2',
            description: 'Bet 2 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 3,
            name: 'Bet 3',
            option1: 'Option 1',
            option2: 'Option 2',
            description: 'Bet 3 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 4,
            name: 'Bet 4',
            option1: 'Option 1',
            option2: 'Option 2',
            description: 'Bet 4 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 5,
            name: 'Bet 5',
            option1: 'Option 1',
            option2: 'Option 2',
            description: 'Bet 5 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 6,
            name: 'Bet 6',
            option1: 'Option 1',
            option2: 'Option 2',
            description: 'Bet 6 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 7,
            name: 'Bet 7',
            option1: 'Option 1',
            oprtion2: 'Option 2',
            description: 'Bet 7 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
    ])

    // const [courses, setCourses] = React.useState<{
    //     id: number,
    //     name: string,
    //     description: string,
    //     cover: string
    // }[]>([])

    // React.useEffect(() => {
    //     const url = 'http://localhost:3001/courses'
    //     axios.get(url)
    //         .then(response => {
                
    //             let tmp = response.data.map((course: any) => {
    //                 return {
    //                     id: course.id,
    //                     name: course.name,
    //                     description: course.description,
    //                     cover: "https://i.ytimg.com/vi/zlJ20s5d9To/maxresdefault.jpg"
    //                 }
    //             });
    //             setCourses([...tmp]);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             window.alert("Error");
    //         })
    // }, [])

    const betsElements = bets.map(bet => 
        {   
    
        return(<Link to={`/${bet.id}`}>
            <div key={bet.id} className="bg-cover bg-[url('././assets/bkg_active_card.png')] h-[180px] flex flex-col items-center justify-center text-white rounded-lg shadow-lg m-[2vh] border-2 border-transparent hover:border-white hover:bg-[url('././assets/bkg_second_card.png')] transition duration-1000 ease-in-out">
                <h2 className="text-xl font-bold text-[#fcfcfc]">{bet.name}</h2>
                <p className="text-fs mt-2">{bet.description}</p>
                <div className="grid grid-cols-2 mt-4 w-[80%]">
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>64%</p>
                        <p>{bet.option1}</p>
                    </div>
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>36%</p>
                        <p>{bet.option2}</p>
                    </div>
                </div>
            </div>
        </Link>
    )});

    const loadingElements = Array(4).fill(null).map((_, index) => (
        <div key={index} className="bg-gradient-to-r from-white to-[#f6f6f6] h-[180px] opacity-80 flex items-center justify-center text-gray-500 rounded-lg shadow-lg m-[2vh]">
        </div>
    ))

    return (
        <>
            <div className='w-[100vw] lg:w-[75vw] h-[100vh] text-gray-700 overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto py-12 md:px-6 lg:px-6">
                        <h2 className="mb-2 text-4xl pl-6 font-bold text-white">
                        Bets List
                        </h2>
                        <div className='grid grid-cols-1 justify-center text-center my-12 cursor-pointer md:grid-cols-2 lg:grid-cols-3'>
                            {bets.length ? betsElements : loadingElements }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
    
}