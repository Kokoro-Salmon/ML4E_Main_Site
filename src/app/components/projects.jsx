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
          "Leash-Belka Protein Ligand Affinity Prediction for Drug Testing.",
        body: "Predicts protein-ligand binding to accelerate development of life-saving therapies. This innovative approach utilizes BELKA (Big Encoded Library for Chemical Assessment) to analyze potential drugs at the molecular level, allowing researchers to prioritize promising candidates and reduce the time it takes to bring new treatments to patients. Additionally, Leash-Belka can help identify potential off-target effects, minimizing the risk of adverse side effects.",
        image:
          "https://media.drugdesign.org/course/protein-ligand-binding/3_2_0_1.png",
      },
      {
        header:
          "NLP for Indigenous Language: AmericasNLP Low-Resource MT Project",
        body: "This project leads the application of cutting-edge Natural Language Processing (NLP) techniques for low-resource machine translation (MT). By using AmericasNLP's  MT framework, We worked on Spanish and these historically under-represented tongues.",
        image: "/32b50a1a-d3b9-4b84-be2e-f38cf4f102b9.png",
      },
      {
        header:
          "MRI Based MGMT promoter methylation detection using Deep Learning",
        body: "The paper discusses the challenges associated with the treatment of glioblastoma, a highly dangerous and malignant brain tumour. The current standard of care includes surgical treatment, radiation therapy, and chemotherapy using temozolomide. However,chemotherapy often becomes ineffective due to resistance development and disease re-emergence. Recent research has shown that the methylation status of the O6-methylguanine-DNA methyltransferase (MGMT) promoter region is an essential indicator of the response to temozolomide therapy in glioblastoma patients.",
        image:
          "https://www.researchgate.net/profile/Khanh-Lee/publication/344282867/figure/fig1/AS:938381487910913@1600738989729/An-illustrative-example-of-how-to-segment-the-MRI-scan-of-a-patient-with-GBM-into-three.png",
      },
    ];

    return (
      <div className="carousel-container">
        <div className="carousalhead">Some Of Our Projects</div>
        <div className="sub-carousel-container">
          <Carousel
            className="actual_carousel"
            showThumbs={false}
            transitionTime={1000}
          >
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
