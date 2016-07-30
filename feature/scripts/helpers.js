function MakeAsyncApiRequest(request){
   var endpoint = request.url;
   var requestURL = rootFolder ? rootFolder + endpoint: endpoint;
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.onreadystatechange = function() {
      if(xmlHttp.readyState === 4){
         if(xmlHttp.status === 200 && request.success){
            request.success(JSON.parse(this.responseText));
         }
         else if(xmlHttp.status === 500 && request.error){
            request.error(JSON.parse(this.responseText));
         }
      }
   }
   xmlHttp.open("POST", requestURL, true );
   xmlHttp.setRequestHeader("Content-type", "application/json");

   if(request.payload){
      xmlHttp.send(JSON.stringify(request.payload));
   }
   else{
      xmlHttp.send(null);
   }
};
