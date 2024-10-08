import { useEffect, useState } from "react";
import { getQuestionService } from "../servers/question";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
const useLoadQuestionData = () => {
  const { id = "" } = useParams();
  // const [loading, setLoading] = useState(true);
  // const [questionData, setQuestionData] = useState({});
  // useEffect(() => {
  //   async function fn() {
  //     const data = await getQuestionService(id);
  //     setQuestionData(data);
  //     setLoading(false);
  //   }
  //   fn();
  // }, []);
  // return [loading, questionData]
  async function load() {
    const data = await getQuestionService(id);
    return data
  }
  const {data, loading, error}= useRequest(load)
  return [loading, data, error]
}
export default useLoadQuestionData;
