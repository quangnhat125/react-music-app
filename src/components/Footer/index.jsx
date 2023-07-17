import { AiOutlineHome, AiOutlineHeart, AiOutlineFire, AiOutlineSetting } from 'react-icons/ai'
const Footer = () => {

    const footerList = [
        {
            id: 1,
            content: <AiOutlineHome />,
        },
        {
            id: 2,
            content: <AiOutlineHeart />,
        },
        {
            id: 3,
            content: <AiOutlineFire />,
        },
        {
            id: 4,
            content: <AiOutlineSetting />,
        },
    ];
    return (
        <div className='flex'>
            <div className='flex justify-between bg-[#2ab3c0] rounded-[15px] border-[2px] border-[#1d1d1d] mt-[32px] w-[100%] p-[12px] footer'>
                {footerList.map((item) => {
                    return (
                        <button
                            key={item.id}
                            id={item.id}
                            className="flex justify-center items-center text-[1.5rem] w-[80px] h-[50px] rounded-[15px] py-[6px] border-[2px] hover:bg-[#f9bc73] hover:border-[#1d1d1d]  "
                        // onClick={() => {
                        //   setTabSelected(item.id);
                        // }}
                        >
                            {item.content}
                        </button>
                    );
                })}

            </div>
        </div>

    );
}

export default Footer;
