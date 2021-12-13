import React,{useContext} from 'react';
import {DataContext} from '../Context/DataProvider';
import {Quizzes} from '../data'
import {Link} from 'react-router-dom'

const Home = () => {
   
    const {quizzes} = useContext(DataContext)

    return (
        <>
        {
        quizzes.map((ele:Quizzes) =>{
            return(
            <div className="max-w-sm mx-auto bg-gray-light rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3">
                <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="h-40 w-full object-cover md:h-25 md:w-48" src={ele.image} alt="friends"/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-white font-semibold">{ele.topic}</div>
                    <a href="#i" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{}</a>
                    <p className="mt-2 text-white">Are you a friends fan</p>
                    <Link to={`quiz/${ele.topic}`}><button className="btn bg-orange px-3 py-1.5 mt-1 text-white font-bold hover:bg-blue-600 rounded-md">Play Now</button></Link>
                </div>
                </div>
            </div>
            )
        })}      
        
    </>
    )
}

export {Home}
