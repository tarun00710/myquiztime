import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../Context/ScoreCon";

const UserInfo = () => {
  const { quizResponse } = useContext(ScoreContext);
  const { name, score, topic } = quizResponse.userData;
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const dataForDashboard = async () => {
      try {
        const response = await axios.get(
          "https://quiz-fun-app.herokuapp.com/quiz/quizDashboard"
        );
        console.log(response.data);
        await setAllUser(response.data.getUsersData);
      } catch (error) {
        console.log(error);
      }
    };
    dataForDashboard();
  }, []);

  return (
    <>
      <div className="h-screen flex ">
        <div className="flex flex-col items-center justify-center h-screen bg-orange bg-opacity-30 w-1/2">
          <p className="text-2xl text-white">
            Player Name : <span className="text-orange">{name}</span>
          </p>
          <p className="text-2xl text-white">
            Last Played : <span className="text-orange">{topic}</span>
          </p>
          <p className="text-2xl text-white">
            Previously Scored : <span className="text-orange">{score}</span>
          </p>
        </div>
        <div className="bg-white h-max w-1/2">
          <p className="bg-gray-darkest text-white p-2 text-center text-xl ">Quiz Dashboard</p>
          <ul>
            {allUser?.map((user: any) => {
              return (
                <li className="bg-gradient-to-l from-orange to-gray-light p-2 flex justify-between pl-4 mb-0.2">
                  <p className="text-white">
                    {user?.name}
                  </p>
                  <p className="text-white mr-2">
                     {user?.score}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
