import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [author, setAuthor ] = useState(props.author || '');
  const [publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
   }
  };

  return (
    <div style={{ width: '70%' }}>
      <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true })}
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" placeholder="Enter title"
          />
        {errors.title && <span>This field is required</span>}
      </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Author</Form.Label>
          <Form.Control {...register("author", { required: true, minLength: 4 })} value={author} onChange={e => setAuthor(e.target.value)} />
          {errors.author && <small className="d-block text-danger mt-1">This field is required and should be at least 4 characters long</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Published date</Form.Label>
          <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Short description</Form.Label>
          <Form.Control {...register("shortDescription", { required: true, minLength: 20 })} as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
          {errors.shortDescription && <small className="d-block text-danger mt-1">This field is required and should be at least 20 characters long</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Content of the post</Form.Label>
          <ReactQuill as="textarea" value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-1">Content can't be empty</small>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>

  );
};

export default PostForm;