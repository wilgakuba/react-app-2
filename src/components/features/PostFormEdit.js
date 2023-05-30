import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../redux/postsRedux";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm";
import { getPostById } from "../../redux/postsRedux";
import { Navigate } from "react-router-dom";
const PostFormEdit = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = post => {
    navigate("/");
    dispatch(editPost({ ...post, id }));
  }; 
  
  if(!postData) return <Navigate to="/" />
    return (
      <div>
        <PostForm actionText="Edit post" action={handleEdit} author={postData.author} publishedDate={postData.publishedDate} title={postData.title} shortDescription={postData.shortDescription} content={postData.content} category={postData.category} />
      </div>
  );
};

export default PostFormEdit;