const cardImages = [
  'img-1.jpg',
  'img-2.jpg',
  'img-3.jpg',
  'img-4.jpg',
  'img-5.jpg',
  'img-6.jpg',
  'img-7.jpg',
  'img-8.jpg',
];

const cardImagePath = './assets/images';

const shuffledImages = [...cardImages, ...cardImages]
  .sort(() => 0.5 - Math.random())
  .map((card, index) => ({
    id: index,
    isSelected: false,
    card,
  }));

console.log(shuffledImages);
