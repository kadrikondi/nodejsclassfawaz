import fs from "fs";

fs.readFile("text.txt", (err, data) => {
  if (err) {
    console.log(err, "no file");
  } else {
    console.log(data.toString());
  }
});

fs.writeFile(
  "hello.pdf",
  "This proposal outlines the plan for developing a modern, user-friendly website for the Nigerian Association of Sports Medicine (NASMED). The goal is to create a platform that provides comprehensive resources and services related to sports medicine and technology, enhances member engagement, and integrates e-commerce functionalities. The proposed website will be designed with a focus on user experience, accessibility, and accessibility.",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
    }
  }
);

// create folder
if (!fs.existsSync("./photo")) {
  fs.mkdir("photo", (err, res) => {
    if (err) console.log(err + "issue is creating");

    console.log("folder crted");
  });
} else {
  console.log("folder exists");
}

// deleted folder
if (fs.existsSync("./photo")) {
  fs.rmdir("./photo", (err, res) => {
    if (err) console.log(err);
    console.log("folder deleted");
  });
}

// deleted file
if (fs.existsSync("./text/blog.txt")) {
  fs.unlink("./text/blog.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  console.log("Are you sure you want to delete this file?");
}
