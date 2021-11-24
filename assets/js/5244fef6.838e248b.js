"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[1850],{870233:function(e){e.exports=JSON.parse('{"tags":["user"],"summary":"Get user by user name","description":"","operationId":"getUserByName","parameters":[{"name":"username","in":"path","description":"The name that needs to be fetched. Use user1 for testing. ","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}},"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}},"postman":{"name":"Get user by user name","description":{"content":"","type":"text/plain"},"url":{"path":["user",":username"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) The name that needs to be fetched. Use user1 for testing. ","type":"text/plain"},"type":"any","value":"<string>","key":"username"}]},"method":"GET"},"method":"get","path":"/user/{username}","hashId":"get-user-by-user-name","servers":[{"url":"/api/v3"}],"permalink":"/rahat-documentation/api/get-user-by-user-name","previous":{"title":"Logs out current logged in user session","permalink":"/rahat-documentation/api/logs-out-current-logged-in-user-session"},"next":{"title":"Update user","permalink":"/rahat-documentation/api/update-user"}}')}}]);