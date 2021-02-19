import React from 'react';
import {Card, Container} from 'lib/components';

const Home = () => (
  <Container>
    <Card
      buttonLabel="BOOK"
      buttonOnPress={() => {}}
      cover="gymPod"
      footerTitle="$12.5"
      title="The Dungeon"
      subtitle={`80 Bendemeer Road, #01-10, Singapore, 339949
4 minutes from Boon Keng MRT
7 minutes from Bendemeer MRT
Enter via the open carpark behind the main building
PER PAX (or pod) PER HOUR basis.`}
    />

    <Card
      buttonLabel="BOOK"
      buttonOnPress={() => {}}
      cover="gymPod"
      footerTitle="$9.5"
      title="Alexandra Technopark Blk A"
      subtitle="438A Alexandra Rd, Singapore 119967"
    />
  </Container>
);

export default Home;
