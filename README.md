# reCAPTCHAv3
This project aims to simplify implementing Google's reCAPTCHAv3 for regular .NET Framework users with minimal fuss.

By Westley Bennett, with MOST knowledge and code "stolen" from Nihar Sarkar's StackOverflow post at https://stackoverflow.com/a/55390797/7308469

I just put this all together, centralized, genericized, and simplified it as much as possible (as well as wrote a custom JsonConverter so that Google's ErrorCodes could be returned back to the programmer/user!).

License - This software is released under the Creative Commons Attribution Share Alike 4.0 International, which can be found here:
https://creativecommons.org/licenses/by-sa/4.0/legalcode

Prerequisites:
Microsoft .NET Framework 4.5 or higher
The following nuget packages - Microsoft.AspNet.WebApi, Newtonsoft.Json, and System.Net.Http

Below are the steps needed for implementation:

1. Place the web service file reCAPTCHAv3Service.asmx in your project root
1. Place the reCAPTCHAv3.js file to be in the /js folder of your project. Create the folder if it doesn't exist
1. Add the following lines to whatever webpages you want to implement the reCAPTCHA on.
   1. In the markup, between the HEAD tags:
      1. <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      1. <script src="https://www.google.com/recaptcha/api.js?render=<%#Westley_Bennett.ReCAPTCHAv3Service.siteKey%>"></script>
      1. <script src="js/reCAPTCHAv3.js"></script>
   1. In the markup, this line anywhere between the <form></form> tags:
      1. <asp:HiddenField ID="reCAPTCHAResponse" runat="server" />
   1. In the markup, at the following attribute into whatever button you want to trigger the reCAPTCHAv3 code into:
      1. OnClientClick="btnClick()"
      2. In the Page_Load event, make sure that you're calling the DataBind() method to make sure that the SiteKey transfers from the server code to the JavaScript in the header properly.
1. Replace the placeholders of "SiteKey" and "SecretKey" inside of the reCAPTCHAv3.js and reCAPTCHAv3Service.asmx with your own actual values
1. Handle the resulting output however you want! By obtaining a ReCAPTCHAv3Service.ResponseToken object in your codebehind like shown in the
    below example, you can choose what is done with the variables that are returned by Google:

        ReCAPTCHAv3Service.ResponseToken rt = new ReCAPTCHAv3Service.ResponseToken(reCAPTCHAResponse.Value);
        if (rt.Score > 0.5)
        {
            lblStatus.Text = "User is human!";
            lblStatus.ForeColor = System.Drawing.Color.LimeGreen;
        }
        else
        {
            if (rt.ErrorCodes.Count > 0)
            {
                StringBuilder sb = new StringBuilder();
                foreach(string ErrorCode in rt.ErrorCodes)
                {
                    sb.AppendLine(
                        (sb.ToString() == "" ? "" : ", ") + ErrorCode );
                }
                lblStatus.Text = "We don't consider you human, and this is why: " + sb.ToString();
                lblStatus.ForeColor = System.Drawing.Color.Red;
            }
        }

Here's a couple of the possible errors you may see in the error codes:

**Bad Site Key**

![image](https://user-images.githubusercontent.com/50267102/126704875-f7f1b0ba-6be0-4803-a378-de5fb7e224ea.png)

**Bad Secret Key**

![image](https://user-images.githubusercontent.com/50267102/126704920-d1bba323-808b-4713-9138-80a73fc1393d.png)

All of Google's error codes can be found here:
https://developers.google.com/recaptcha/docs/verify
