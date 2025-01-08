// App.js
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllPosts} from "./Redux/Slices/PostSlice";
import {getMyValue} from "./Redux/Slices/DeneSlice";
function App() {
  const data = useSelector((state) => state.PostSlice);
  const isLoading = useSelector((state) => state.PostSlice.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatch");
    dispatch(getAllPosts());
    dispatch(getMyValue());
  }, []);
  return (
    <div className="App">
      {data.postsData.length >= 1 ? (
        data.postsData.map((post) => <h2 key={post.id}>{post.title}</h2>)
      ) : (
        <h2>No Data</h2>
      )}
      {isLoading ? <h2>isLoading component work</h2> : ""}
      {/* <Pages /> */}
    </div>
  );
}

export default App;
