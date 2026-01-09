const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.length * this.width;
  },
};
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
