package com.ckart;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class HostedPageController {

       @RequestMapping(value = "/response", method = RequestMethod.POST)
       public String welcome(HttpServletRequest request, HttpServletResponse response, Map<String, Object> model) {
    	   String json = "";
    	   String json1 = "";
    	   try {
    		   final Map<String, String> parameters = new LinkedHashMap<String, String>();
    			String parameterKey = "";
    			parameterKey = "s-f-1-36_order-number";
    			parameters.put("Order Number", request.getParameter(parameterKey));
    			
    			parameterKey = "l-f-1-20_order-gross-amount";
    			String amount = request.getParameter(parameterKey);
    			parameters.put("Amount", amount.substring(0, amount.length()-2));
    			
    			parameterKey = "l-f-1-20_transaction-number";
    			parameters.put("Transaction Number", request.getParameter(parameterKey));
    			
    			parameterKey = "s-f-1-30_payment-method-code";
    			parameters.put("Payment Mode", request.getParameter(parameterKey));
    			
    			parameterKey = "t-f-14-19_order-timestamp";
    			parameters.put("Timestamp", request.getParameter(parameterKey));
    			
    			//model.put("message", "Verifone");
   				ObjectMapper mapper = new ObjectMapper();
   				
   				json = mapper.writeValueAsString(parameters);
   				model.put("verifoneResponce", json);
   				request.setAttribute("responseParamsJson", json);
   				
   				json1 = mapper.writeValueAsString(request.getParameterMap());
   				request.setAttribute("responseParamsJson1", json1);
   				
   				request.setAttribute("responseParamsMap", parameters);
   				
   				System.out.println("Test Connection Repose Json : "+ json);
   		        System.out.println("Test Connection Repose Json1 : "+ json1);
   		 
    	   } catch (Exception e) {
    		   
    	   }    	  
		   return "response";
		}
       
       @RequestMapping("/")
       public String home(Map<String, Object> model) {
			model.put("message", "Hi");
			return "index";
		}
}
