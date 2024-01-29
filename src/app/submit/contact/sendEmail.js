import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient";
import { generateEmail } from "./emailTemplate";

 const createSendEmailCommand = (reqFormData) => {
    return new SendEmailCommand({
      Destination: {
        ToAddresses: [
          process.env.FORM_RESPONSE_RECIPIENT_EMAIL,
        ],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: generateEmail(reqFormData),
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "New Form Submission",
        },
      },
      Source: `"KimGordonDesigns.com - Form Submission" <${process.env.FORM_RESPONSE_SEND_AS_EMAIL}>`,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };
  

  export const sendEmail = async (reqFormData) => {

    const sendEmailCommand = createSendEmailCommand(
      reqFormData
    );
  
    try {
      return await sesClient.send(sendEmailCommand);
    } catch (e) {
      console.error(e);
      return e;
    }
  };
  