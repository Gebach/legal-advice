function DesignCircle({ classname }: { classname?: string }) {
  return (
    <div
      className={`disign-circle md:w-[228px] md:h-[228px] w-[156px] h-[156px] bg-gradient-to-b 
                from-secondary to-secondary rounded-full max-md:opacity-70 ${classname}`}
    ></div>
  )
}

export default DesignCircle
