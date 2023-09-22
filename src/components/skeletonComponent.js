import React from 'react';
import Skeleton from '@mui/material/Skeleton';

function SkeletonComponent() {
  return (
    <li style={{ display: 'flex', margin: '10px 0px', width: '800px', boxShadow: '1px 5px 6px #bebebe', borderRadius: '5px'}}>
      <Skeleton variant="rectangular" width={150} height={150} style={{borderRadius: '5px 0px 0px 5px'}} />
      <div style={{ marginLeft: '10px', display: 'flex', flexFlow: 'column', alignItems: 'flex-start', width: '80%' }}>
        <Skeleton width="30%" height='30px' style={{ marginBottom: '5px' }} />
        <Skeleton width="90%" />
        <Skeleton width="80%" />
        <Skeleton width="90%" />
      </div>
    </li>
  );
}

export default SkeletonComponent;
