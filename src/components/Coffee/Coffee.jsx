
const Coffee = ({coffee}) => {

    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div>
            <h2 className='text-green-500 font-bold text-4xl'> hello coffee {name}</h2>
        </div>
    );
};

export default Coffee;