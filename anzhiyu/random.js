var posts=["posts/undefined.html","posts/4cec0d6e.html","posts/7dccf0e3.html","posts/aaea630f.html","posts/6f6925cb.html","posts/e1539f30.html","posts/a767a042.html","posts/7e66a467.html","posts/439c322c.html","posts/a40c130c.html","posts/d30b239a.html","posts/4a027220.html","posts/a361d715.html","posts/d466e783.html","posts/3d0542b6.html","posts/db34f9f3.html","posts/534e3aec.html","posts/caf7ca09.html","posts/a8fad53.html","posts/caf7ca08.html","posts/cawdawda5465745.html","posts/63b0d074.html","posts/ed2a79d8.html","posts/cawdawda.html","posts/62c6c373.html","posts/a3bc84e3.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };