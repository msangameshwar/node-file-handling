const fs = require("fs");

// reading file
fs.readFile("sample.txt", (err, buf) => {
  if (err) console.log(err);
  console.log(buf.toString());
});
fs.readFile("./files/first.txt", (err, buf) => {
  if (err) console.log(err);
  console.log(buf.toString());
});

//writing file
const data = "Hello Everyone !!!!";
fs.writeFile("./files/first.txt", data, (err) => {
  if (err) console.log(err);
  fs.readFile("./files/first.txt", (err, buf) => {
    if (err) console.log(err);
    console.log(buf.toString());
  });
});
