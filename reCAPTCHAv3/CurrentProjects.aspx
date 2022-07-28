<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="CurrentProjects.aspx.cs" Inherits="reCAPTCHAv3.CurrentProjects" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
       
         <!-- Project START -->
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
                                <li><a href="Projects.aspx">Projects</a></li>
                                
                                <li>Current Projects</li>
                            </ul>
                        </div>
                    
                    <!-- BREADCRUMB ROW END -->                        
                </div>
            </div>
        </div>
        <!-- INNER PAGE BANNER END -->

        <!-- Project 2 SECTION START -->
        <div class="section-full p-t120 p-b90 site-bg-white">
            <div class="container-fluid">

                <!-- PAGINATION START -->
         <%--       <div class="filter-wrap">
                    <ul class="masonry-filter">
                        <li class="active"><a data-filter="*" href="#">All</a></li>
                        <li><a data-filter=".cat-1" href="#">Upcoming</a></li>
                        <li><a data-filter=".cat-2" href="#">Current</a></li>
                        <li><a data-filter=".cat-3" href="#">Completed</a></li>
                        <li><a data-filter=".cat-4" href="#">Residential</a></li>
                        <li><a data-filter=".cat-5" href="#">Commercial</a></li> 
                    </ul>
                </div>--%>
                <!-- PAGINATION END -->
                
                <!-- PROJECT CONTENT START -->
                <div class="row clearfix d-flex justify-content-center flex-wrap">
        
          <div class="cat-4 cat-3 col-xl-4 col-lg-4 col-md-6 m-b30">
                                <div class="effect-hvr2">
                                    <div class="effect-sarah">
                                        <a href="OakvilleON.aspx">
                                      <img src="images/305-Morrison-cover.jpg" alt="Oakville, ON">
                                      </a>
                                    </div>
                                                                
                                    
                                </div> 
                          <div class="effect-hvr2-inner">
                                        <h4 class="wt-title"><a href="OakvilleON.aspx">Oakville, ON</a></h4>
                                         <span class="project-new-category">Design + Build</span>
                                      </div>  
                            </div>
        

                        <div class="cat-5 col-xl-4 col-lg-4 col-md-6 m-b30">
                                <div class="effect-hvr2">
                                    <div class="effect-sarah">
                                        <a href="379-Wescana.aspx">
                                      <img src="images/379-Wescana.jpg" >
                                     </a>
                                    </div>
                                                             
                                    
                                </div>
                             <div class="effect-hvr2-inner">
                                        <h4 class="wt-title"><a href="379-Wescana.aspx">379 Wescana St</a></h4>
                                        <span class="project-new-category">For Sale</span>
                                  
                                      </div>      
                            </div>
           
                    
                                                                                                                                
                </div>
                <!-- PROJECT CONTENT END --> 
            </div>
        </div>   
        <!-- Project 2 SECTION END --> 
                  
            <!-- WE PROVIDE SERVICE SECTION END -->             
               <div class="section-full bg-cover p-t120 p-b90 site-bg-white">
            <div class="container">
                <div class="testimonial2-outer">
                    <!-- TITLE START-->
                    <div class="section-head center wt-small-separator-outer">
                     
                        <h2 class="wt-title">Testimonials</h2>
                    </div>
                    <!-- TITLE END-->

                    <div class="section-content">
                        <div class="testimonial-1-content owl-carousel owl-btn-bottom-center m-b30">
                            <!--block 1-->
                            <div class="item">
                                <div class="testimonial-1">
                                    <div class="testimonial-content">


                                        <div class="testimonial-text">
                                            <i class="flaticon-straight-quotes"></i>
                                            <p>
                                             We have enjoyed an outstanding working relationship with Canas Corp for over a decade on our past commercial projects.  The Canas Corp team is detail oriented, efficient and a pleasant to work with.  We are very happy to continue working them in the future.</div>


                                    </div>
                                </div>
                            </div>

                            <!--block 2-->
                            <div class="item">
                                <div class="testimonial-1">
                                    <div class="testimonial-content">


                                        <div class="testimonial-text">
                                            <i class="flaticon-straight-quotes"></i>
                                            <p>
                                               I would like to commend Canas Corp and its team for the outstanding work they did on our custom home.  We were surprised at how easy and enjoyable they made the process of building our home from concept to completion.  We are proud to say they helped us build our dream home. 
                                            </p>

                                        </div>


                                    </div>
                                </div>
                            </div>

                            <!--block 3-->
                            <div class="item">
                                <div class="testimonial-1">
                                    <div class="testimonial-content">


                                        <div class="testimonial-text">
                                            <i class="flaticon-straight-quotes"></i>
                                            <p>
                                                As a condo owner, we have purchased our new home from Canas Corp and it is with great pleasure and extremely satisfied with the workmanship in and out of this wonderful building.
                                            </p>

                                        </div>

                                    

                                    </div>
                                </div>
                            </div>

                            <!--block 4-->
                            <div class="item">
                                <div class="testimonial-1">
                                    <div class="testimonial-content">


                                        <div class="testimonial-text">
                                            <i class="flaticon-straight-quotes"></i>
                                            <p>
                                                Canas Corps commitment to quality and creative planning is what sets them apart from others...there's no doubt they will bring good to every community they become involved with.
                                            </p>
                                        </div>

                                     

                                    </div>
                                </div>
                            </div>

                        

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
            <!-- Project SECTION END --> 
                <!-- GET IN TOUCH -->
            <div class="section-full  get-intouch-style-2-wrap ">
                <div class="get-intouch-style-2  overlay-wraper p-t120 p-b120 " style="background-image: url(images/Pics/2shiny-night-city.jpg);">
                    <div class="overlay-main site-bg-black opacity-07"></div>
                    <div class="get-intouch-style-2-inner site-text-white">                               
                        <h2 class="wt-title site-text-white">Bring Your Vision to Life</h2>
                    </div>
                    <div class="site-center-btn text-center">
                        <a href="Contact.aspx" class="site-button">Get in Touch</a>
                    </div>
                    
                </div>
            </div>
            <!-- GET IN TOUCH -->  
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolderFooter" runat="server">
</asp:Content>
