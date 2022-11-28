Cypress API Automation

Approach -

1. I tried looking API information on trengo API reference but didnt get any info on custom channel creation API,then I used inspect element to identify the end point and payload for request which I used for automation .

2. I used static bearer token for authentication and added as environment varible in cypress.config.js

3. As part of test I am sending default payload request which I copied from inspect element , however we need to clearly identify mandatory and optional fields to test edge scenarios.

4. I designed test to also delete test data at the end of test.

5. For now I added only positive tests due to time constraint but we also need to add negative tests aswell.
 