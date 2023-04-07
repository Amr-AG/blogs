import Blog from "./Blog";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {pending && (
        <h3
          style={{
            height: "80vh",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading ...
        </h3>
      )}
      {error && (
        <h3
          style={{
            height: "80vh",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error}
        </h3>
      )}
      {blog && <Blog blogs={blog} title="All Blogs !" />}{" "}
    </div>
  );
};

export default Home;
