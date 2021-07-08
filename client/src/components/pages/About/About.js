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
          using one of your social accounts, and start penning your thoughts!
        </p>
        <p>
          You can edit your Blog post at any time, as long as you're logged in.
          If you ever feel like your post is no longer a valid representation of
          your thoughts, you can also delete it at any instant of time.
        </p>
        <hr className="gold-hr" />
        <p>
          If you ever feel the need to provide criticism or drop a suggestion,
          or if you just want to say "Nice job", feel free to contact me using
          the links in the footer
          <span className="full-stop">.</span>
        </p>
      </main>
    </div>
  );
}
