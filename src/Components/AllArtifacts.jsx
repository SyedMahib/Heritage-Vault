import React from 'react';
import { useLoaderData } from 'react-router';
import ArtifactsCard from './ArtifactsCard';

const AllArtifacts = () => {

    const allArtifacts = useLoaderData()
    console.log(allArtifacts);

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
                {
                    allArtifacts.map((artifact) => <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;