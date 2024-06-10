import React from "react";
import Link from "next/link";
import "./fourthcomponent.css";
export default function Fourthcomponent() {
  return (
    <div className="fourthMain">
      <div className="fourthtitle">Some Interesting Research Below</div>
      <div className="card-container">
        <div className="card">
          <img
            src="https://lh3.googleusercontent.com/lLW57DqUaadYg6TlUsgPae0L7UWwOvHXZHKpCucmAoq19KUBSTU2CCN0wxBlhoA1Ak3sFe-ZVC_zF35wQekd47GapIwSN5L4oPzOU68Nkk6cblvqGg=w1984-rw"
            alt="Card"
          />
          <div className="card_text">
            <div className="card-text-topic">
              Protein Structure Prediction Made Simple
            </div>
            <div className="paracard">
              This 2021 paper details AlphaFold, a protein structure prediction
              system that revolutionized the field of computational biology.
              AlphaFold achieves near-atomic accuracy, making it a
              groundbreaking advancement.
            </div>
          </div>
          <div className="buttoncard">
            <Link
              className="button-view-detail"
              href="https://deepmind.google/technologies/alphafold/"
            >
              <button className="actual-buttons">View Details</button>
            </Link>
            <Link className="button-dowload-pdf" href="https://www.google.com">
              <button className="actual-buttons">Download PDF</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/09/Diifusion_Models_JndNsEZ.png"
            alt="Card"
          />
          <div className="card_text">
            <div className="card-text-topic">Diffusion Models</div>
            <div className="paracard">
              This paper surveys diffusion models, a new class of generative
              models that have shown promise in image generation. They can
              create high-fidelity images by progressively adding noise to an
              image and then learning to remove it.
            </div>
          </div>
          <div className="buttoncard">
            <Link
              className="button-view-detail"
              href="https://arxiv.org/pdf/1706.03762"
            >
              <button className="actual-buttons">View Details</button>
            </Link>
            <Link className="button-dowload-pdf" href="https://www.google.com">
              <button className="actual-buttons">Download PDF</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Card"
          />
          <div className="card_text">
            <div className="card-text-topic">
              Using Artificial Intelligence for Space Challenges
            </div>
            <div className="paracard">
              This paper provides a comprehensive overview of how AI and Machine
              Learning are being utilized to address various challenges in space
              exploration
            </div>
          </div>
          <div className="buttoncard">
            <Link
              className="button-view-detail"
              href="https://www.mdpi.com/2076-3417/12/10/5106"
            >
              <button className="actual-buttons">View Details</button>
            </Link>
            <Link className="button-dowload-pdf" href="https://www.google.com">
              <button className="actual-buttons">Download PDF</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
