export function getShuffledImages(images, path) {
  return [...images, ...images]
    .sort(() => 0.5 - Math.random())
    .map((imageName, index) => ({
      id: index,
      isSelected: false,
      src: `${path}/${imageName}`,
    }));
}
