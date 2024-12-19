import React from 'react'
import Card from './Card';
import {useState} from 'react'; 

const Cards = (props) => {

    let allCourses = [];
    const[likedCourses,setLikedCourses] = useState([]);
    let category = props.category;
    let errorfound = props.errorfound;

    // return you a list of all courses recived from api
    const getCourses = () => {
        if(category === "All"){
            Object.values(props.courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            });
            return allCourses;
        }
        else{
            return props.courses[category];
        }
    }

  return (
    <div className='flex justify-center flex-wrap gap-4 h-full'>
        {
            !errorfound ? 
            getCourses().map((course) => {
                return(
                    <Card key={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                )
            }) :
            (
                <div className='h-3/5 w-full'>
                    <span className='text-white text-3xl font-bold'>
                        No data found
                    </span>
                </div>
            )
        }
    </div>
  )
}

export default Cards;
