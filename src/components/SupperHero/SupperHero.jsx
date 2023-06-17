import Swal from "sweetalert2";
import useTitel from "../useTitel/useTitel";

const SupperHero = () => {
    
    useTitel('SupperHero Page')

    const heroData = event => {
        event.preventDefault()
        const form = event.target;
        const heroId = form.heroId.value;
        const strength = form.strength.value;
        const invisibility = form.invisibility.value;
        const healing = form.healing.value;
        const shape = form.shape.value;
        const telekinesis = form.telekinesis.value;
        const heroInfo = { heroId, strength, invisibility, healing, shape, telekinesis }
        console.log(heroInfo)

        fetch('https://supper-hero-server-site.vercel.app/supperHero', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(heroInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Thank you added you product',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="container mx-auto flex justify-center py-[100px]">
            <div className="w-[40%] px-[70px] pt-[50px] pb-[60px] border border-[#409EFF] rounded-lg">
                <h1 className="text-center text-[35px] mb-10 font-bold">Supper Hero Range</h1>
                <form onSubmit={heroData}>
                    <div className="mb-8 flex justify-between">
                        <p className="text-[20px] font-semibold">Supper Hero Id : </p>
                        <input className="ps-3 pe-2 bg-[#2C2C6C] border border-[#409EFF] rounded-md outline-none" type="number" name="heroId" required placeholder="Hero Id" />
                    </div>
                    <div className="flex justify-between ">
                        <p className="mr-[30px] text-[20px]">Strength</p>
                        <input className="w-[200px]" type="range" name="strength" min='0' max='100' />
                    </div>
                    <div className="flex  justify-between mt-5">
                        <p className="mr-[30px] text-[20px]">Invisibility</p>
                        <input className="w-[200px]" type="range" name="invisibility" min='0' max='100' />
                    </div>
                    <div className="flex  justify-between mt-5">
                        <p className="mr-[30px] text-[20px]">Healing</p>
                        <input className="w-[200px]" type="range" name="healing" min='0' max='100' />
                    </div>
                    <div className="flex  justify-between mt-5">
                        <p className="mr-[30px] text-[20px]">Shape Shift</p>
                        <input className="w-[200px]" type="range" name="shape" min='0' max='100' />
                    </div>
                    <div className="flex  justify-between mt-5">
                        <p className="mr-[30px] text-[20px]">Telekinesis</p>
                        <input className="w-[200px]" type="range" name="telekinesis" min='0' max='100' />
                    </div>
                    <button className="w-full mt-8 bg-[#409EFF] hover:bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Create Hero</button>
                </form>
            </div>
        </div>
    );
};

export default SupperHero;