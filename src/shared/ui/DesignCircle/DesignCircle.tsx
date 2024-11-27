function DesignCircle({ classname }: { classname?: string }) {
  return (
    <div
      className={`disign-circle w-[228px] h-[228px] bg-gradient-to-b from-secondary to-secondary rounded-full ${classname}`}
    ></div>
  )
}

export default DesignCircle
