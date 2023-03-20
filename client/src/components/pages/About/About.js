import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="about">
      <h1>
        About<span className="full-stop">.</span>
      </h1>
      <main>
        <p>
          This is a Blog app that lets a user share their experiences, your thoughts with the african cultures, countries, in somme with the continent of Africa.
          User can write a blog post, or read one of the already
          uploaded Blog posts.
        </p>
        <p>
          In order to write your very own Blog post, you can conveniently login
          or create a user account, and start penning your thoughts and sharing your experiences!
        </p>
        <p>
          You can edit your Blog post at any time, as long as you're logged in.
          If you ever feel like your post is no longer a valid representation of
          your thoughts, you can also delete it at any instant of time.
        </p>
        <hr className="gold-hr" />
      </main>
    </div>
  );
}
