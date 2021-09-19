import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const addPost = (value) => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostsFormRedux onSubmit={addPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder={"Add new Post"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostsFormRedux = reduxForm({ form: "profileAddPostForm" })(
  AddPostsForm
);

export default MyPosts;
