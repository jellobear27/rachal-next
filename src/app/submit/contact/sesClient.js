import { SESClient } from "@aws-sdk/client-ses";

// Create SES service object.

const AWS_REGION = process.env.AWS_SES_REGION;
const credentials = {
    accessKeyId: process.env.AWS_SES_IAM_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_IAM_SECRET_KEY
}

const sesClient = new SESClient({ region: AWS_REGION, credentials});
export { sesClient };