import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export const CarouselComponent: React.FC = () => {
  return (
    <div className="carousel-container w-full-1200">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="dot-selected"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={{
                background: "white",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                display: "inline-block",
                margin: "0 5px",
              }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div>
          <Image
            src="/slides/slide1.png"
            width={1920}
            height={720}
            alt="Slide 1"
            priority
          />
        </div>
        <div>
          <Image
            src="/slides/slide2.png"
            width={1920}
            height={720}
            alt="Slide 2"
            priority
          />
          {/* <p className="legend">Slide 2</p> */}
        </div>
        <div>
          <Image
            src="/slides/slide3.png"
            width={1920}
            height={720}
            alt="Slide 3"
            priority
          />
          {/* <p className="legend">Slide 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};
