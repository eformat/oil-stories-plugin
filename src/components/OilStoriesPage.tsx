import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Page,
  PageSection,
  Title,
} from '@patternfly/react-core';

export default function OilStoriesPage() {
  const style = {
    height: '1200px',
    width: '100%',
    scrolling: 'no',
  }
  return (
    <>
      <Helmet>
        <title>Open Innovation Lab Stories</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">Open Innovation Lab Stories</Title>
        </PageSection>
        <iframe style = { style } src="https://eformat.github.io/rht-labs.github.io/stories"/>
      </Page>
    </>
  );
}
