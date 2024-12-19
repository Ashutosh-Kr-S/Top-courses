import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    if(likedCourses.includes(course.id)){
      // phle se liked hai
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("like removed");
    }
    else{
      // phle se liked nhi hai
      // insert krna hai yeh course
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }  
      else{
        // list khali nhi hai
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("like Successfully");
    }
  }

  return (
    <div className='w-[300px] bg-[rgb(24,24,64)] bg-opacity-50 overflow-hidden rounded-md'>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt}/>
        <div className='absolute right-1 bottom-32 w-[40px] h-[40px] bg-white rounded-full grid place-items-center'>
          <button onClick={clickHandler}>
              {
                likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
              }
          </button>
        </div>

        <div className='text-white p-4'>
            <h3 className='font-bold'>{course.title}</h3>
            <p className='mt-2'>
              {
                course.description.length > 100 ? 
                (course.description.substr(0,100)+ "....") : 
                (course.description)
              }
            </p>
        </div>

      </div>
    </div>
  )
}

export default Card
