const form = document.querySelector("#form");
const mainDiv = document.querySelector("#divOne");
const messageDiv = document.querySelector("#message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const imgTag = divOne.children[0];
  const name = divOne.children[1];
  const repos = divOne.children[2];
  const link = divOne.children[3];

  const value = event.target.children[0].value;
  const API_URI = `https://api.github.com/users/${value}`;

  try {
    const response = await axios(API_URI);

    console.log(response);

    imgTag.src = response.data.avatar_url;
    name.innerText = response.data.name;
    repos.innerText = `public repos: ${response.data.public_repos}`;
    link.href = response.data.html_url;
  } catch (err) {
    console.log(err.response.data.message);

    messageDiv.innerText = err.response.data.message;

    imgTag.src = "";
    name.innerText = "";
    repos.innerText = "";
    link.href = "";
  }
  //   console.log("form is being submitted", value);
});


