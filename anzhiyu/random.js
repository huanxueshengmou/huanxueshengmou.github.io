var posts=["posts/a40c130c.html","posts/d30b239a.html","posts/4a027220.html","posts/a361d715.html","posts/3d0542b6.html","posts/d466e783.html","posts/db34f9f3.html","posts/534e3aec.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };