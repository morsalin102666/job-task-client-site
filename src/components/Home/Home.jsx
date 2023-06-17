import { useEffect, useState } from "react";
import useTitel from "../useTitel/useTitel";
import ShowId from "./ShowId";

const Home = () => {
    // use title hook 
    useTitel('Home Page')

    // state 
    const [allData, setAllData] = useState([])

    // all hero data fetch 
    useEffect(() => {
        fetch('https://supper-hero-server-site.vercel.app/supperHeroAllData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className="container mx-auto py-[100px]">
            <h1 className="text-center text-[30px] font-bold pb-[50px]">All Supper Herro</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    allData.map(hero => <ShowId
                        key={hero._id}
                        hero={hero}
                    ></ShowId>)
                }
            </div>
        </div>
    );
};

export default Home;