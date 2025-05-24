// promise ko kaise banate h

// Promise Createion
const promise1 = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// Promise Consume
promise1.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, rejecct) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Alok", email: "alok@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // false
    if (!error) {
      resolve({ username: "Alok", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected"); // mai to chlunga hi
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // false
    if (!error) {
      resolve({ username: "javascripy", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5; // promise ek object h to promise5() nahi krna h hmesha promise5 hi krna h
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// async function getNameApi() {
//   try {
//     const res = await fetch("https://randomuser.me/api/");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getNameApi();

fetch("https://randomuser.me/api/")
  .then((res) => {
    return res.json();
  })
  .then((jsonres) => {
    console.log(jsonres);
  })
  .catch((err) => {
    console.log(err);
  });
