import React from 'react'
import { filterData } from '../data'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }
  return (
    <div className='flex justify-center flex-wrap space-x-4 my-4 mx-auto max-w-max w-11/12'>
        {
            filterData.map((data) => {
                return (
                    <button key={data.id} className={`text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 decortation-none px-4 py-2 rounded-lg
                    ${category === data.title ? 
                        "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
                    `}
                        onClick={() => filterHandler(data.title)}
                    >
                        {data.title}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Filter;
