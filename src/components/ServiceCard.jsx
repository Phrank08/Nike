const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 justify-center items-center bg-coral-red">
        <img 
        src={imgURL} alt={label} 
        width={24} height={24}/>

      </div>

    </div>
  )
}

export default ServiceCard