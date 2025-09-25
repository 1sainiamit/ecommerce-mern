import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Parallel lines joke",
      content:
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    },
    {
      id: 3,
      title: "Dad joke classic",
      content: "I only know 25 letters of the alphabet. I don't know y.",
    },
    {
      id: 4,
      title: "Time flies",
      content: "Time flies like an arrow. Fruit flies like a banana.",
    },
    {
      id: 5,
      title: "Elevator humor",
      content: "I got stuck in an elevator with a mime. It was unspeakable.",
    },
    {
      id: 6,
      title: "Math pun",
      content:
        "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else.",
    },
    {
      id: 7,
      title: "Programmer joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 8,
      title: "Skeleton joke",
      content:
        "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    {
      id: 9,
      title: "Coffee pun",
      content: "What did the coffee say to the sugar? You make life sweet.",
    },
    {
      id: 10,
      title: "Library joke",
      content:
        "Why did the librarian get kicked off the plane? Because it was overbooked!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
