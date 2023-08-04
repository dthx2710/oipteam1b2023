---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Team Contract

We managed to foster a productive and collaborative team environment by creating a team contract. This contract outlines the team's expectations and responsibilities, as well as the consequences of not meeting these expectations. The team contract was created at the beginning of the project and was reviewed and updated regularly to ensure that it was still relevant and effective.

export const Contract = () => (
  <div style={{
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '50%', 
      width: '100%',
      minHeight: '500px',
  }}>
    <object 
      style={{
          border: '3px solid rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
      }} 
      data={useBaseUrl('/pdf/contract.pdf')}></object>
  </div>
);

Here is our Team Contract we drafted during the first week of our commencement, and we have been following it closely since then. We have benefited from this contract as it has helped us to be more productive and efficient in our work, while also ensuring that we are able to maintain a healthy work-life balance. :smile:
<Contract/>
