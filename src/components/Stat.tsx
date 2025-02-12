type StatProps = {
    count : string,
    title : string,
    img:string,
    id : number
}

function Stat({count, title, img, id}: StatProps) {
  return (
    <div className={`${id === 1 ? 'bg-purple400' :
    id === 2 ?  'bg-yellow500' : 'bg-orange500'} rounded-5ab p-5 relative flex flex-col gap-2 overflow-hidden md:basis-1/3 md:px-3 md:py-4 lg:p-4`}>
        <div>
            <h3 className="text-preset1M text-neutral900 font-bold md:text-preset1">{count}</h3>
            <p className="text-preset3 text-neutral900 ">{title}</p>
        </div>
        <img src={img} alt="" className="absolute top-0 right-0 translate-x-1/3 w-37.5 h-37.5"/>
    </div>
  )
}

export default Stat