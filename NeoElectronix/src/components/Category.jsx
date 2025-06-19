import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    // const {categoryOnlyData} = getData()
    const navigate = useNavigate()
    const {data} = getData()

    const getUniqueCategory = (data, property) =>{
      let newVal = data?.map((curElem) =>{
          return curElem[property]
      })
      newVal = [...new Set(newVal)]
      return newVal
    }

    const categoryOnlyData = getUniqueCategory(data, "category")
  
  return (
    <div className='bg-[#d9d9d9] dark:bg-[#080d10]'>
      <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4'>
        {
            categoryOnlyData?.map((item, index)=>{
                return <div key={index}>
                    <button onClick={()=>navigate(`/category/${item}`)} className='uppercase bg-[#000] dark:bg-[#169976] dark:text-[#000] 
                    hover:dark:bg-[#1dcd9f] hover:bg-[#fe7743] text-[#fe7743] hover:text-[#000] px-3 py-1 rounded-md cursor-pointer'>{item}</button>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Category
