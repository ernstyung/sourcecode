<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*" import="java.io.*"%>
<html lang="en">
<head>
    <link href="https://sit.norprototype.com/clothkart/css/lib/bootstrap.css" rel="stylesheet">
    <link href="https://sit.norprototype.com/clothkart/css/lib/font-awesome.css" rel="stylesheet">
    <link href="https://sit.norprototype.com/clothkart/css/lib/skin-all.css" rel="stylesheet">
    <link href="https://sit.norprototype.com/clothkart/css/lib/custom.css" rel="stylesheet">
    <!-- Library CSS ends-->
    
    <!-- Custom CSS starts-->
    <link href="https://sit.norprototype.com/clothkart/css/style.css" rel="stylesheet">
    <!-- jQuery starts -->
    <script src="http://sit.norprototype.com/clothkart/js/lib/jquery.js" type="text/javascript"></script>
    <!-- jQuery ends-->
     
     <!-- BootStrap starts-->
     <script src="https://sit.norprototype.com/clothkart/js/lib/bootstrap.js"></script>
     
     <!-- BootStrap ends-->
    
<style>
table {
    width:100%;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;
}
table#t01 tr:nth-child(even) {
    background-color: #eee;
}
table#t01 tr:nth-child(odd) {
   background-color:#fff;
}



</style>   
</head>
<body>
    <%-- HEADER --%>
   <header class="main-header" style="height: 50px;">
        <a class="logo ng-scope" style="width: 100%; background: rgb(40,116,240);color:white;">
                        <span class="logo-lg"><img class="bank-logo" src="https://sit.norprototype.com/clothkart/css/img/cart_logo.png"> Cloth Kart</span>
        </a>
   </header>

    <div class="container" style="height: calc(100% - 91px)">

        <%-- <div class="starter-template">
            <h1>Payment Gateway</h1>
            <p>${verifoneResponce}</p></n>
            <h1>Verifone Response</h1>
            <p>${verifoneResponce1}</p></n>
        </div> --%>
        
	    <%-- BODY --%>
        <div class="main-container col1-layout" style="height: 100%">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="main">
                            <div class="col-main">
                                <div class="padding-s">
                                    <div class="form-group">
                                        <a href="https://sit.norprototype.com/clothkart/views/index.html#/products">
                                            <button class="pull-right btn btn-info">Continue Shopping</button>
                                        </a>
                                    </div>
                                    <div class="page-title">
                                        <h1>Your order has been received.</h1>
                                    </div>
                                    <div class="theme-block">
                                        <h2 class="sub-title">Thank you for your purchase!</h2>
                                    </div>
                                    <div>
					                    <table id="t01">
					                       <tr>
                                                <td colspan="2" style="text-align: center;font-size:18px;">Payment Details</td>
                                             </tr>
                                           <% 
                                             Map<String, String> paramsmap = (Map<String, String>) request.getAttribute("responseParamsMap");
                                           %>
                                             <c:forEach items="<%=paramsmap%>" var="entry">
                                             
                                             <tr>
                                               <td style="font-size:15px;">${entry.key}</td>
                                               <td style="font-size:15px;">${entry.value}</td>
                                             </tr>
                                             </c:forEach>
                                       </table>
					                </div>
					            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="main-footer non-admin">
        <strong>Copyright &copy; 2016 <a style="color: white;">Cloth Kart</a>.
        </strong> All rights reserved.
    </footer>
    
</body>
</html>