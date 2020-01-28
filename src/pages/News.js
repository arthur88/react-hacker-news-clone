import React from "react";
import ReactDOM from "react-dom";
import NavLink from "react-router-dom";
import TimeAgo from 'timeago-react';


const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
const vkey = 0;

const Posts = ({ posts }) => {

  if(posts.length === 0) {

    return <div>Loading...</div>;
  }

  return (
  <div className="news">
      <h4>Latest {posts.length} hacker news stories</h4>
   
        {posts.map((post, key) => (
          
        <div className="card-long" key={key}>
             <span className="text-muted">{this.vkey = ++key}</span> 
             &#160; 
             <a href={post.url} target="_blank">{post.title}</a>
             <div className="sub">
             {post.score} points 
             by {post.by}  
            &#160; <TimeAgo timestamp={post.time} locale='en_EN' /> ago 
             | {post.descendants} comments</div>
        </div>

        ))}
  </div>

  )

};

function News() {

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {

    async function getTopStores() {

      try {

        const res = await fetch(url);
     
        if(res.ok === false ) {

          throw new Error("response Error:" + res.text);
        }

        const json = await res.json();
  
        const promises = json
                          .slice(0, 15)
                          .map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(

                            res => res.json()
                          )
                        );
    
        const res = await Promise.all(promises);
       
        setPosts(res);

      } catch (err) {

        console.error(err);
      }
    }
    getTopStores();
  }, []);

  return (
    <div className="api">
      <Posts posts={posts} />
    </div>
  )
}

export default News;