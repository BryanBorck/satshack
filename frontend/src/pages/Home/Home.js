import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [bets, setBets] = useState([
        // TESTE
        {
            id: 1,
            title: 'Course 1',
            description: 'Course 1 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 2,
            title: 'Course 2',
            description: 'Course 2 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 3,
            title: 'Course 3',
            description: 'Course 3 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 4,
            title: 'Course 4',
            description: 'Course 4 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 5,
            title: 'Course 5',
            description: 'Course 5 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 6,
            title: 'Course 6',
            description: 'Course 6 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 7,
            title: 'Course 7',
            description: 'Course 7 description',
            cover: 'https://picsum.photos/seed/picsum/200/300'
        },
    ])

    // const [courses, setCourses] = React.useState<{
    //     id: number,
    //     title: string,
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
    //                     title: course.title,
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
            <div key={bet.id} className="bg-cover bg-[url('././assets/bkg_active_card.png')] h-[180px] flex flex-col items-center justify-center text-white rounded-lg shadow-lg m-[2vh] hover:bg-[url('././assets/bkg_second_card.png')] transition duration-600 ease-in-out">
                <h2 className="text-xl font-bold text-[#fcfcfc]">{bet.title}</h2>
                <p className="text-fs mt-2">{bet.description}</p>
                <div className="grid grid-cols-3 space-x-4 mt-4 w-[80%]">
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>123</p>
                        <p>TVL</p>
                    </div>
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>100</p>
                        <p>Investors</p>
                    </div>
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>100</p>
                        <p>Investors</p>
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
            <div className='w-[75vw] h-[100vh] text-gray-700 overflow-y-auto'>
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