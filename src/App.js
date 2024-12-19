import React, {useState, useEffect } from 'react';
import { apiUrl} from './data';
import { filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {

  const[courses,setCourses] = useState(null);
  const[laoding,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);
  const[errorfound , setErrorFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        // save data
        setCourses(output.data);

      }
      catch(error){
        toast.error("something went wrong");
        setErrorFound(true);
      }
      setLoading(false);
    }

    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-600 h-full">
      <div>
        <Navbar/>
      </div>
      <div className=''>
        <div>
          <Filter filterData = {filterData}
            category = {category}
            setCategory = {setCategory}
          />
        </div>

        <div className='w-8/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50px]'>
          {
            laoding ? <Spinner/> : <Cards courses = {courses} category = {category} errorfound = {errorfound}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
