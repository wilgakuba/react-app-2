import { useDispatch } from "react-redux"
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";

const PostFormAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleAdd = params => {
    navigate("/");
    dispatch(addPost(params));
  };

  return (
    <div style={{ width: '70%' }}>
      <PostForm actionText={'Add post'} action={handleAdd}/>
    </div>

  );
};

export default PostFormAdd;