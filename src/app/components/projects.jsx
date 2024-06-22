"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./projects.css";

const CarouselItem = ({ header, body, image }) => (
  <div className="carousel-item">
    <div className="carousel-item-content">
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
    <div className="carousel-item-image">
      <img src={image} alt={header} />
    </div>
  </div>
);

export default class NextJsCarousel extends Component {
  render() {
    const carouselData = [
      {
        header:
          "Clustering Based Approach for Underwater Sunlight Flicker Removal",
        body: "Reproduction of a given dataset of lung sounds recorded from the chest wall using an electronic stethoscope for classification of various lung diseases from audio files and benchmarking of current state of the art classification models for ICBHI Respiratory Sound Database (ICBHI 2017 Challenge)",
        image: "/1.png",
      },
      {
        header:
          "CNN Based Image Resizing Detection and Resize Factor Classification for Forensic Applications",
        body: "The paper discusses the challenges associated with the treatment of glioblastoma, a highly dangerous and malignant brain tumour. The current standard of care includes surgical treatment, radiation therapy, and chemotherapy using temozolomide. However,chemotherapy often becomes ineffective due to resistance development and disease re-emergence. Recent research has shown that the methylation status of the O6-methylguanine-DNA methyltransferase (MGMT) promoter region is an essential indicator of the response to temozolomide therapy in glioblastoma patients.",
        image: "/2.png",
      },
      {
        header:
          "MRI Based MGMT promoter methylation detection using Deep Learning",
        body: "The paper discusses the challenges associated with the treatment of glioblastoma, a highly dangerous and malignant brain tumour. The current standard of care includes surgical treatment, radiation therapy, and chemotherapy using temozolomide. However,chemotherapy often becomes ineffective due to resistance development and disease re-emergence. Recent research has shown that the methylation status of the O6-methylguanine-DNA methyltransferase (MGMT) promoter region is an essential indicator of the response to temozolomide therapy in glioblastoma patients.",
        image: "/3.png",
      },
    ];

    return (
      <div className="carousel-container">
        <div className="sub-carousel-container">
          <Carousel className="actual_carousel" showThumbs={false} transitionTime={1000}>
            {carouselData.map((item, index) => (
              <CarouselItem
                key={index}
                header={item.header}
                body={item.body}
                image={item.image}
              />
            ))}
          </Carousel>
        </div>
      </div>
    );
  }



}
