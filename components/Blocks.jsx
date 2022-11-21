
export default function Blocks(props) {
    return (
        <div className='grid place-items-center text-8xl text-white border-2 border-white rounded-2xl py-3 mt-6'>
            {props.icon}
            <h1 className='text-3xl text-white text-center mt-3 font-semibold px-2'>{props.label}</h1>
        </div>
    );
}
