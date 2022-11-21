import Image from "next/image";
export default function Attribute(props) {
    const left = props.left
    return (
        <div className='grid grid-cols-5 my-40 gap-5'>
            {left && <div className='grid col-span-3 place-items-center'>
                <div className='rounded-3xl bg-white w-full'>
                    <div className="w-11/12 relative top-5 left-4">
                        <Image src={props.image} height={1500} className='rounded-2xl'/>
                    </div>
                </div></div>}
            <div className="col-span-2">
                <h1 className='text-xl text-white font-extrabold lg:text-6xl'>{props.title}</h1>
                <p className='mt-6 text-sm text-white font-extralight lg:text-3xl'>
                    {props.subtitle}
                </p>
            </div>
            {!left && <div className='grid col-span-3 place-items-center'>
                <div className='rounded-3xl bg-white w-full'>
                    <div className="w-11/12 relative top-5 right-3">
                        <Image src={props.image} height={1500} className='rounded-2xl'/>
                    </div>
                </div></div>}
        </div>
    );
}