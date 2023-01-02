export  const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);
  // get json web token
  fetch("https://genius-car-server-iota-silk.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("genius-token", data.token);
    });
};
