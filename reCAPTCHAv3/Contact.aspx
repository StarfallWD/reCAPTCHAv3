<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="reCAPTCHAv3.Contact1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">

            <!-- INNER PAGE BANNER -->
            <div class="wt-bnr-inr overlay-wraper bg-center" style="background-image:url(images/breadcrumb_bg.jpg);">
            	<div class="overlay-main site-bg-white opacity-07"></div>
                <div class="container">
                    <div class="wt-bnr-inr-entry">
                    	<div class="banner-title-outer">
                        	<div class="banner-title-name">
                        		
                            </div>
                        </div>
                        <!-- BREADCRUMB ROW -->                            
                        
                            <div>
                                <ul class="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="Default.aspx">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        
                        <!-- BREADCRUMB ROW END -->                        
                    </div>
                </div>
            </div>
            <!-- INNER PAGE BANNER END -->
            <!-- CONTACT FORM -->
            <div class="section-full  p-t50 p-b90">   
                <div class="section-content">
                    <div class="container">

                        <div class="contact-info-section m-b50">  
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 c-info-column">
                                    <div class="c-info-icon flaticon-telephone"></div>
                                    <span class="m-t0">Phone Number</span>
                                    <p><a href="tel:+18882660149">+1 888 266-0149</a></p>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 c-info-column">
                                    <div class="c-info-icon flaticon-email"></div>
                                    <span class="m-t0">Email Address</span>
                                    <p><a href="mailto:info@canascorp.com">info@canascorp.com</a></p>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 c-info-column">
                                    <div class="c-info-icon flaticon-email"></div>
                                    <span class="m-t0">Work Hours</span>
                                    <p>Mon-Fri : 9 am - 5 pm</p>
                                    <p>Sat-Sun : Closed</p>
                                </div>
                            </div>
                        
                        </div>

                        <div class="contact-one">
                            <!-- CONTACT FORM-->
                              <asp:HiddenField ID="reCAPTCHAResponse" runat="server" />
                            <div class="row justify-content-center">
                           
                                <div class="col-xl-8 col-lg-8 col-md-7 m-b30">
                                    <div class="contact-form-outer" >
                                        
                                      
                                                <h2 class="wt-title m-b30 text-center">Send Us A Message</h2>
                                       
                                            <div class="row" >
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <asp:TextBox ID="txtName" CssClass="form-control" placeholder="Name" runat="server"></asp:TextBox>
                                                  <asp:RequiredFieldValidator ID="rqName" CssClass="validate" ControlToValidate="txtName" runat="server" ErrorMessage="This field is required."></asp:RequiredFieldValidator>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <asp:TextBox ID="txtEmail" CssClass="form-control" placeholder="Email" runat="server"></asp:TextBox>
                                                        <asp:RequiredFieldValidator ID="rqEmail" CssClass="validate" ControlToValidate="txtEmail" runat="server" ErrorMessage="This field is required."></asp:RequiredFieldValidator>
                            <asp:RegularExpressionValidator ID="rgEmail" ControlToValidate="txtEmail" CssClass="validate" runat="server" ErrorMessage="Email is not in a correct format" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <asp:TextBox ID="txtPhone" CssClass="form-control" placeholder="Phone" runat="server"></asp:TextBox>
                                                        
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                         <asp:TextBox ID="txtSubject" CssClass="form-control" placeholder="Subject" runat="server"></asp:TextBox>
                                                        
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                           <asp:TextBox ID="txtMessage" TextMode="MultiLine" CssClass="form-control" Rows="5" placeholder="Message" runat="server"></asp:TextBox>
                                                     <asp:RequiredFieldValidator ID="rqMessage" CssClass="validate" ControlToValidate="txtMessage" runat="server" ErrorMessage="This field is required."></asp:RequiredFieldValidator>
                                                    </div>
                                                </div>
                                              
                                                <div class="col-md-12 text-center"><asp:Label ID="lblStatus" runat="server" Text=""></asp:Label></div>
                                                <div class="col-md-12 text-center">
                                                    <asp:Button ID="btnSubmit" 
       CssClass="site-button bbtn" runat="server" Text="Submit" OnClick="btnSubmit_Click"  OnClientClick="btnClick()" />
                                                    
                                                </div>
                                                
                                            </div>
                                       
                                    </div>
                                </div>  
                                  
                                <!-- <div class="col-xl-5 col-lg-5 col-md-6 m-b30">
                                    <div class="contact-timing">
                                        
                                            <div class="call-24">
                                                <h3 class="wt-title">Open Hour</h3>
                                                <span>Mon - Sat At 10.00 Am to 10.00 PM</span>
                                                <i class="fa fa-key"></i> 
                                            </div>
                                            <div class="call-24">
                                                <h3 class="wt-title">Close Hour</h3>
                                                <span>Sunday Office Close</span>
                                                <i class="fa fa-lock"></i> 
                                            </div>
                                    
                                        
                                    </div>
                                </div> -->
                                
                            </div>
                        </div>


                    </div>
                </div>
            </div>

     

        </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolderFooter" runat="server">
  
</asp:Content>
