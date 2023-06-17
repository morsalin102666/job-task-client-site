import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useTitel from "../useTitel/useTitel";
import { useState } from "react";

const Interview = () => {
    useTitel('Interview Page')
    const [on, setOn] = useState(false)
    const [heroData, setHeroData] = useState([])
    const [interviewData, setIntData] = useState([])

    const interviewrData = event => {
        event.preventDefault()
        const form = event.target;
        const comparison = form.comparison.value;
        const strength = form.strength.value;
        const invisibility = form.invisibility.value;
        const healing = form.healing.value;
        const shape = form.shape.value;
        const telekinesis = form.telekinesis.value;
        const interviewrInfo = {strength, invisibility, healing, shape, telekinesis }

        setIntData(interviewrInfo)

        fetch(`http://localhost:5000/supperHero?=${comparison}`)
            .then(res => res.json())
            .then(data => setHeroData(data))

        setOn(true)
    }

    const data = [
        {
            "name": "Strength",
            "heroData": (heroData.strength),
            "interviewData": ( interviewData.strength )
        },
        {
            "name": "Paginvisibilitye",
            "heroData": ( heroData.invisibility ),
            "interviewData": ( interviewData.invisibility )
        },
        {
            "name": "healing",
            "heroData": ( heroData.healing ),
            "interviewData": ( interviewData.healing )
        },
        {
            "name": "Shape",
            "heroData": ( heroData.shape ),
            "interviewData": ( interviewData.shape )
        },
        {
            "name": "Telekinesis",
            "heroData": ( heroData.telekinesis ),
            "interviewData": ( interviewData.telekinesis )
        }
    ]

    return (
        <div>
            <div className="container mx-auto flex justify-center py-[100px]">
                <div className="w-[40%] px-[70px] pt-[50px] pb-[60px] border border-[#409EFF] rounded-lg">
                    <div>
                        <h1 className="text-center text-[35px] mb-10 font-bold">Interview Range</h1>
                        <form onSubmit={interviewrData}>
                            <div className="mb-8 flex justify-between">
                                <p className="text-[20px] font-semibold">Comparison Id : </p>
                                <input className="ps-3 pe-2 bg-[#2C2C6C] border border-[#409EFF] rounded-md outline-none" type="number" name="comparison" required placeholder="Comparison Id" />
                            </div>
                            <div className="flex justify-between ">
                                <p className="mr-[30px] text-[20px]">How strong are you?</p>
                                <input className="w-[200px]" type="range" name="strength" min='0' max='100' />
                            </div>
                            <div className="flex  justify-between mt-5">
                                <p className="mr-[30px] text-[20px]">Your invisibility power -</p>
                                <input className="w-[200px]" type="range" name="invisibility" min='0' max='100' />
                            </div>
                            <div className="flex  justify-between mt-5">
                                <p className="mr-[30px] text-[20px]">How fast can you heal?</p>
                                <input className="w-[200px]" type="range" name="healing" min='0' max='100' />
                            </div>
                            <div className="flex  justify-between mt-5">
                                <p className="mr-[30px] text-[20px]">Your Shape Shift Power -</p>
                                <input className="w-[200px]" type="range" name="shape" min='0' max='100' />
                            </div>
                            <div className="flex  justify-between mt-5">
                                <p className="mr-[30px] text-[20px]">Your telekinesis power -</p>
                                <input className="w-[200px]" type="range" name="telekinesis" min='0' max='100' />
                            </div>
                            <button className="w-full mt-8 bg-[#2C2C6C] hover:bg-[#409EFF] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Check</button>
                        </form>
                    </div>
                </div>
            </div>

            { on && <div className="container mx-auto flex justify-center py-[30px]">
                <div>
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="interviewData" fill="#8884d8" />
                        <Bar dataKey="heroData" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>}
        </div>
    );
};

export default Interview;