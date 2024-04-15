import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;
  const isHidden = true;

  //Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx === total - 1) {
      setCurrCardIdx(0);
    } else {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  //Decrease currCardIdx state by 1
  function goBackward() {
    if (currCardIdx === 0) {
      setCurrCardIdx(currCardIdx + 2);
    } else {
      setCurrCardIdx(currCardIdx - 1);
    }
  }
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx === 0 ? (
          <i
            style={{ display: isHidden ? "none" : "block" }}
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
          />
        ) : (
          <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx === total - 1 ? (
          <i
            style={{ display: isHidden ? "none" : "block" }}
            className="bi bi-arrow-right-circle"
            onClick={goForward}
          />
        ) : (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
  );
}

export default Carousel;
