import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import Post from "./Post";
import { Row } from "react-bootstrap";



const Posts = props => {

  const posts = useSelector(getAllPosts);

	return (
      <Row className="justify-content-between">
        {posts.map(post => <Post key={post.id} {...post} />)}  
      </Row>  
	);
};

export default Posts;