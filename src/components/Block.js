
export default function Block({pos,value,updatevalue}) {
  return (
    <div className='block' onClick={()=>(
    updatevalue(pos))}>{value}</div>
  )
}
