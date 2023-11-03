import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

    // const [bets, setBets] = useState([
    //     {
    //         id: 1,
    //         name: 'US Elections',
    //         option1: 'Biden',
    //         option2: 'Trump',
    //         description: 'Predict the winner of the US Elections.',
    //         cover: 'https://img.staticmb.com/mbcontent/images/uploads/2023/1/white-house.jpg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Libertadores Final',
    //         option1: 'Fluminense',
    //         option2: 'Boca Juniors',
    //         description: 'Predict the winner of the Libertadores Final.',
    //         cover: 'https://classic.exame.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-26-at-16.12.02.jpg?quality=70&strip=info&w=1024'
    //     },
    //     {
    //         id: 3,
    //         name: 'Tech Stock Battle',
    //         option1: 'Apple',
    //         option2: 'Microsoft',
    //         description: 'Which company\'s stock will rise more by year-end?',
    //         cover: 'https://s2-g1.glbimg.com/RXUDxXp0SrwO3uyvJw0cvAu4qe4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/C/1/ID5fRMQhGi4XVMNRBTYg/1690899271225780.jpg'
    //     },
    //     {
    //         id: 4,
    //         name: 'Space Race',
    //         option1: 'SpaceX',
    //         option2: 'Blue Origin',
    //         description: 'Which company will next successfully launch a manned mission to space?',
    //         cover: 'https://robbreport.com/wp-content/uploads/2020/08/split-template-1-3-1.jpg'
    //     },
    //     {
    //         id: 5,
    //         name: 'Box Office Hit',
    //         option1: 'Action Movie',
    //         option2: 'Comedy Movie',
    //         description: 'Predict which movie genre will top the box office this weekend.',
    //         cover: 'https://miro.medium.com/v2/resize:fit:986/1*ipv_blIqB1SFUO5gmLAhtQ.png'
    //     },
    //     {
    //         id: 6,
    //         name: 'Bestselling Book',
    //         option1: 'Fiction',
    //         option2: 'Non-Fiction',
    //         description: 'Which category will top the bestsellers list this month?',
    //         cover: 'https://i.insider.com/6270194e0983640018c0b65d?width=1200&format=jpeg'
    //     },
    //     {
    //         id: 7,
    //         name: 'Weather Forecast',
    //         option1: 'Rain',
    //         option2: 'No Rain',
    //         description: 'Will it rain tomorrow in New York City?',
    //         cover: 'https://img.freepik.com/fotos-gratis/textura-aspera-da-superficie-metalica_23-2148953930.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais'
    //     },
    // ])

    const [bets, setBets] = useState([]);
    const history = useNavigate();

    useEffect(() =>{
        const url = `${process.env.REACT_APP_API_URL}/themes`;
        axios.get(url)
        .then(response => {
            setBets(response.data);
            console.log("got themes");
        }).catch(error => {
            console.log(error);
            window.alert("Error");
        });
    }, [])

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
            bet.cover = "https://img.staticmb.com/mbcontent/images/uploads/2023/1/white-house.jpg";
        return(
            <div 
            onClick={() => history(`/${bet.id}`, {
                state: {
                    bet
                }
            })}
            key={bet.id} className="bg-cover bg-[url('././assets/bkg_active_card.png')] h-[180px] flex flex-col items-center justify-center text-white rounded-lg shadow-lg m-[2vh] border-2 border-transparent hover:border-white hover:bg-[url('././assets/bkg_second_card.png')] transition duration-1000 ease-in-out">
                <h2 className="text-xl font-bold text-[#fcfcfc]">{bet.name}</h2>
                <p className="text-fs mt-2 mx-4">{bet.description}</p>
                <div className="grid grid-cols-2 mt-4 w-[80%]">
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>64%</p>
                        <p>{bet.option_1}</p>
                    </div>
                    <div className="">
                        <p className='text-xl text-[#fcfcfc] font-bold'>36%</p>
                        <p>{bet.option_2}</p>
                    </div>
                </div>
            </div>
    )});

    const loadingElements = Array(4).fill(null).map((_, index) => (
        <div key={index} className="bg-gradient-to-r from-white to-[#f6f6f6] h-[180px] opacity-80 flex items-center justify-center text-gray-500 rounded-lg shadow-lg m-[2vh]">
        </div>
    ))

    return (
        <>
            <div className='w-[100vw] md:w-[75vw] lg:w-[75vw] h-[100vh] text-gray-700 overflow-y-auto'>
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