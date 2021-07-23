<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Westley_Bennett.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>reCAPTCHAv3 Example In ASP.NET</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <!--These four lines below required to be within the form tags for reCAPTCHA to work correctly-->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js?render=<%#Westley_Bennett.ReCAPTCHAv3Service.siteKey%>"></script>
    <script src="js/reCAPTCHAv3.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <!--This line also required, but within the Form tags-->
        <asp:HiddenField ID="reCAPTCHAResponse" runat="server" />

        <div class="login-form">
            <h2 class="text-center">reCAPTCHAv3 Example In ASP.NET</h2>
            <div class="form-group">
                <asp:TextBox runat="server" ID="UName" type="text" class="form-control" placeholder="Username" required="required"></asp:TextBox>
            </div>
            <div class="form-group">
                <asp:TextBox runat="server" ID="UPass" type="password" class="form-control" placeholder="Password" required="required"></asp:TextBox>
            </div>
            <div class="form-group">
                <!--Note here the method reference to the method in the reCAPTCHAv3.js file-->
                <asp:Button ID="btnLogin" Text="Login" class="btn btn-primary btn-block" runat="server" OnClick="BtnLogin_Click"
                    OnClientClick="btnClick()" type="button" />
            </div>
            <p class="text-center"><asp:Label ID="lblStatus" runat="server"></asp:Label></p>
        </div>
    </form>
</body>
</html>
