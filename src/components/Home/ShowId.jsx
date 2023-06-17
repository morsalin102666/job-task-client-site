const ShowId = ({hero}) => {
    return (
        <div className="border border-[#409EFF] text-center py-10 rounded-md hover:bg-[#2C2C6C]">
            <h1 className="text-[25px] font-bold">Hero Id</h1>
            <p className="text-[40px] font-bold">{hero.heroId}</p>
        </div>
    );
};

export default ShowId;