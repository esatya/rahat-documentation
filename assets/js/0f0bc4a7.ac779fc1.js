"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8832],{59971:function(e){e.exports=JSON.parse('{"operationId":"UserController_create","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","example":"Rahat User","description":"Rahat User name"},"email":{"type":"string","example":"user@mailinator.com"},"walletAddress":{"type":"string","example":"0xac0C1207D054a64FFc68830b0db2e17Fc1e93766","description":"User Wallet Address"},"profileImage":{"type":"string"},"role":{"type":"string","example":"User"}},"required":["name","walletAddress","profileImage","role"]}}}},"responses":{"201":{"description":""}},"tags":["users"],"postman":{"name":"User Controller create","description":{"type":"text/plain"},"url":{"path":["api","v1","users"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"name\\": \\"<string>\\",\\n    \\"walletAddress\\": \\"<string>\\",\\n    \\"profileImage\\": \\"<string>\\",\\n    \\"role\\": \\"<string>\\",\\n    \\"email\\": \\"<string>\\"\\n}"}},"description":"UserController_create","summary":"UserController_create","method":"post","path":"/api/v1/users","hashId":"user-controller-create","servers":[],"permalink":"/api/user-controller-create","previous":{"title":"AppController_getContractByName","permalink":"/api/app-controller-get-contract-by-name"},"next":{"title":"UserController_findAll","permalink":"/api/user-controller-find-all"},"jsonRequestBodyExample":{"name":"Rahat User","email":"user@mailinator.com","walletAddress":"0xac0C1207D054a64FFc68830b0db2e17Fc1e93766","profileImage":"string","role":"User"}}')}}]);