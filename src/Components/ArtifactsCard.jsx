import React from "react";

const ArtifactsCard = ({artifact}) => {
  return (
    <div className="card bg-base-100 border-2 shadow-sm p-5">
      <figure>
        <img
          src={artifact.artifactImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artifact.artifactName}</h2>
        <p>
         {artifact.shortDescription}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsCard;
