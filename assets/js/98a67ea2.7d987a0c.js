"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[6401],{412723:function(t){t.exports=JSON.parse('{"tags":["institutions"],"summary":"Update financial institutions details","security":[{"access_token":[]}],"operationId":"putApiV1InstitutionsId","parameters":[{"schema":{"type":"string"},"description":"Resource identifier","name":"id","in":"path","required":true}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of institution"},"address":{"type":"string","description":"Address of institution"},"phone":{"type":"string","description":"Phone of institution"}}}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of institution"},"address":{"type":"string","description":"Address of institution"},"phone":{"type":"string","description":"Phone of institution"}}}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Update financial institutions details","description":{"type":"text/plain"},"url":{"path":["institutions",":id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Resource identifier","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PUT","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Update financial institutions details","method":"put","path":"/institutions/{id}","hashId":"update-financial-institutions-details","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/update-financial-institutions-details","previous":{"title":"Remove and archive a financial institutions","permalink":"/api/remove-and-archive-a-financial-institutions"},"next":{"title":"Update financial institutions status","permalink":"/api/update-financial-institutions-status"},"jsonRequestBodyExample":{"name":"string","address":"string","phone":"string"}}')}}]);