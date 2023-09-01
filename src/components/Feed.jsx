import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import Loader from "./Loader";
import { fetchData } from "./FetchData";
const Feed = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(5)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetchData(page, setData, setLoader)
  }, [page])


  // Lazily load
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, 1000)
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoader(true);
      setInterval(setPage((prev) => prev + 2), 2000)
    }
  }
  // Lazily load  //
  return (
    <Box
      flex={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      onScrollCapture={(e) => {
        handleScroll(e);
      }}
    >
      {data &&
        data.map((post, idx) => {
          return (
            <Post
              key={idx}
              title={post.title.rendered}
              subtitle={post.yoast_head_json.subtitle}
              imgUrl={post.yoast_head_json["og_image"][0].url}
              desc={post.primary_category.description}
              date={post.date}
              name={post.yoast_head_json.schema["@graph"][0].author.name}
            />
          );
        })}
      {loader && <Loader />}
    </Box>
  );
};

export default Feed;
