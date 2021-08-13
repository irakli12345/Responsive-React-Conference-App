const faker = require("faker");
const fs = require("fs");
const generateLorem = () => {
  return faker.lorem.paragraphs(1);
};
const generateFullName = () => {
  return faker.name.findName();
};

const generateArray = () => {
  const arr = [];
  const avatars = [
    "https://d3d5t7k3.rocketcdn.me/wp-content/uploads/2017/06/Speaking-image.jpg",
    "https://coursegate.co.uk/wp-content/uploads/2017/08/P3-ADVANCED-DIPLOMA-IN-TV-PRESENTER-1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Roberto_leal.jpg/440px-Roberto_leal.jpg",
    "https://www.swindonadvertiser.co.uk/resources/images/3473468.jpg?display=1&htype=0&type=responsive-gallery",
    "https://www.hkphil.org/f/artist/22384/421c432/DSCF2513_Daniel%20Chua_1613731446_1613731480.jpg",
    "https://www.celebrationofmind.org/wp-content/uploads/2016/12/FernandoBlasco-BioPic.png",
    "https://i1.sndcdn.com/artworks-l7djJEWR65zOpteg-m8SSyA-t500x500.jpg",
    "https://pbs.twimg.com/profile_images/979344346871947265/nTbVe2jP_400x400.jpg",
  ];
  const object = {
    description: generateLorem(),
    fullName: generateFullName(),
  };
  for (let i = 0; i < avatars.length; i++) {
    arr.push({ ...object });
    arr[i].image = avatars[i];
    arr[i].id = i;
  }
  return arr;
};

const data = {
  speakers: generateArray(),
};
