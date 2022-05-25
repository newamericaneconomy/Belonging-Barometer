// create_clone_images("https://picsum.photos/250/350", 10);

// function create_clone_images(imageUrl, shiftInterval) {
//   const images = document.querySelectorAll('[data-type="clone-image"]');

//   images.forEach((image) => {
//     const number_of_images = image.attributes["data-image-count"].value;
//     let opacity_interval = 1 / number_of_images;
//     let current_opacity = 1;
//     let current_shift_rate = 0;
//     let current_z_index = image.attributes["data-image-count"].value + 1;

//     for (var x = 1; x <= number_of_images; x++) {
//       var innerImage = document.createElement("img");
//       innerImage.src = imageUrl;
//       innerImage.classList.add("cloneImage__innerImage");
//       innerImage.style.opacity = current_opacity;
//       innerImage.style.top = "-" + current_shift_rate + "px";
//       innerImage.style.left = +current_shift_rate + "px";
//       innerImage.style.zIndex = current_z_index;
//       image.appendChild(innerImage);

//       current_z_index = current_z_index - 1;
//       current_shift_rate = current_shift_rate + shiftInterval;
//       current_opacity = current_opacity - opacity_interval;
//     }
//   });
// }

document.addEventListener("aos:in:super-duper", function () {
  create_circles();
});

function create_circles() {
  const circles = document.querySelectorAll('[data-type="circle"]');

  setTimeout(
    circles.forEach((circle) => {
      const number_of_circles = circle.attributes["data-circle-count"].value;
      let growth_interval = 100 / number_of_circles;
      let current_growth_rate = 100;

      for (var x = 1; x <= number_of_circles; x++) {
        var innerCircle = document.createElement("div");
        innerCircle.classList.add("circle__innerCircle");
        innerCircle.style.width = current_growth_rate + "%";
        innerCircle.style.height = current_growth_rate + "%";
        circle.appendChild(innerCircle);

        current_growth_rate = current_growth_rate - growth_interval;
      }
    }),
    1000
  );
}
