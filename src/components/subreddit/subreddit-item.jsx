



export default function SubRedditItem({subReddit}){
    

    return <div className="flex flex-col p-3 justify-center items-center md:flex-row">
       <img src={subReddit.icon_img} className="w-[40px] h-[40px] rounded-full border-red-500 border-solid border-4 " />
       <h3 className="truncate w-[200px] ml-2 font-semibold text-center md:text-left">{subReddit.title}</h3>
    </div>
}