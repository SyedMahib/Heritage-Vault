import React from "react";
import { Link } from "react-router";

const ArtifactsCard = ({ artifact }) => {
  return (
    <div className="card bg-base-100 border-2 shadow-sm p-5">
      <figure>
        <img className="h-[350px] rounded-2xl" src={artifact.artifactImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artifact.artifactName}</h2>
        <p>{artifact.shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`/artifacts/${artifact._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsCard;
