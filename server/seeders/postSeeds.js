const lorum = [
  'lorem',
  'imsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
  'orci',
  'gravida',
  'imperdiet',
  'nullam',
  'purus',
  'lacinia',
  'a',
  'pretium',
  'quis',
];

function randomKey(scale,min = 0){
  return Math.floor(Math.random()*scale)+min
}

function generatePostTitle() {
  let postTitle = [];
  for(let i = 0; i < (randomKey(10,2));i++){
    postTitle.push(lorum[randomKey(lorum.length)]);
  }
  return postTitle.join(' ')
}

function generatePostBody() {
  let postTitle = [];
  for(let i = 0; i < (randomKey(50,25));i++){
    postTitle.push(lorum[randomKey(lorum.length)]);
  }
  return postTitle.join(' ')
}

function generatePosts(){
  let posts = []
  for(let i = 0; i < randomKey(10,1); i++){
    const title = generatePostTitle();
    const body = generatePostBody();
    posts.push({
      title,
      body
    })
  }
  return posts;
}

const postSeeds = generatePosts();

module.exports = {postSeeds};