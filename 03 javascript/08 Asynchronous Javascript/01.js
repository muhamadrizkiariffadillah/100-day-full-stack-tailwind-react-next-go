console.log("Callback");

function sayHello(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function goodBye() {
  console.log("Good bye");
}

sayHello("Kibo", goodBye);

// Callback with setTimeOut
setTimeout(() => {
  console.log("wait 2 second");
}, 2000);

// Promise

const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

myPromise
  .then((result) => {
    console.log("Hasil promise:", result);
  })
  .catch((error) => {
    console.log("Hasil promise:", error);
  });

function getDataPromisa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data di terima");
    }, 1500);
  });
}

getDataPromisa().then(console.log);

async function getDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data sudah diterima ya ");
    }, 3000);
  });
}

async function ShowData() {
  try {
    const result = await getDataAsync();
    console.log("result:", result);
  } catch (err) {
    console.log("err:", err);
  }
}

ShowData();

async function loopExample() {
  const items = [1, 2, 3, 4, 5];
  for (const item of items) {
    setTimeout(() => {
      console.log("item:", item);
    }, 500);
  }
  console.log("success");
}

loopExample();
