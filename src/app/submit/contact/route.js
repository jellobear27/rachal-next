import { sendEmail } from "./sendEmail";

export async function POST(request) {
  // Parse form data
  const reqFormData = await request.formData();
  const captchaRes = reqFormData.get("g-recaptcha-response");
  const firstNameLol = reqFormData.get("firstNameLol");

  if (firstNameLol) {
    return new Response("FAILED!", {
      status: 400,
    });
  }

  // Validate Recaptcha Token
  var formdata = new FormData();
  formdata.append("secret", process.env.RECAPTCHA_SECRET_KEY);
  formdata.append("response", captchaRes);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.success === true && data.score >= 0.5) {
      await sendEmail(reqFormData);
      return new Response("Success", {
        status: 200,
      });
    } else {
      return new Response("Bot detected!", {
        status: 400,
      });
    }
  } catch (error) {
    console.log("Error:", error);
    return new Response("Error occurred", {
      status: 500,
    });
  }
}
