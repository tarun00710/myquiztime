import  { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { Quizzes } from "../Context/QuizDataContext";
import { Link } from "react-router-dom";
import { ScoreContext } from "../Context/ScoreCon";
import { toast } from "react-toastify";

const Home = () => {
  const {quiz} = useContext(DataContext);
  const { dispatch} = useContext(ScoreContext);
  return (
    <>
      {!quiz ? (
        <div className="text-orange">loading</div>
      ) : (
        quiz?.map((ele: Quizzes, i: number) => {
          return (
            <div key={i} className="pt-8 ">
              <div className="max-w-sm mx-auto bg-gray-light rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-2">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-40 w-full object-cover md:h-25 md:w-48"
                      src={ele.image}
                      alt="friends"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-white font-semibold">
                      {ele.topic} 
                    </div>
                    <a
                      href="#i"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      {}
                    </a>
                    <p className="mt-2 text-white">{ele.topic}</p>
                    <Link to={`quiz/${ele.topic}`}>
                      <button
                        className="btn bg-orange px-3 py-1.5 mt-1 text-white font-bold hover:bg-blue-600 rounded-md"
                        onClick={() => {
                          dispatch({ type: "RESET" });
                          toast.success("Welcome")
                        }}
                      >
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export { Home };
