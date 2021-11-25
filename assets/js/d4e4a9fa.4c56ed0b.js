"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8523],{823352:function(e){e.exports=JSON.parse('{"tags":["mobilizers"],"summary":"Add a MOBILIZER.","operationId":"postApiV1Mobilizers","security":[{"access_token":[]}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of Mobilizer","example":"Rastra"},"phone":{"type":"string","description":"Mobilizer phone","example":"12121212"},"wallet_address":{"type":"string","description":"Mobilizer wallet address","example":"0x00000"},"email":{"type":"string","description":"Mobilizer email","example":"rastra@gmail.com","x-format":{"email":true}},"address":{"type":"string","description":"Mobilizer permanent address","example":"nepal"},"govt_id":{"type":"string","description":"Mobilizer government issued ID","example":"99988777nepal"},"govt_id_image":{"type":"string","description":"ID Image"},"photo":{"type":"string","description":"Photo"},"organization":{"type":"string","description":"Name of Organization mobilizer is involved with","example":"rumsan"}}}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of Mobilizer","example":"Rastra"},"phone":{"type":"string","description":"Mobilizer phone","example":"12121212"},"wallet_address":{"type":"string","description":"Mobilizer wallet address","example":"0x00000"},"email":{"type":"string","description":"Mobilizer email","example":"rastra@gmail.com","x-format":{"email":true}},"address":{"type":"string","description":"Mobilizer permanent address","example":"nepal"},"govt_id":{"type":"string","description":"Mobilizer government issued ID","example":"99988777nepal"},"govt_id_image":{"type":"string","description":"ID Image"},"photo":{"type":"string","description":"Photo"},"organization":{"type":"string","description":"Name of Organization mobilizer is involved with","example":"rumsan"}}}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Add a MOBILIZER.","description":{"type":"text/plain"},"url":{"path":["mobilizers"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Add a MOBILIZER.","method":"post","path":"/mobilizers","hashId":"add-a-mobilizer","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/add-a-mobilizer","previous":{"title":"List all Mobilizers.","permalink":"/api/list-all-mobilizers"},"next":{"title":"Get an MOBILIZER by Wallet Adress or id.","permalink":"/api/get-an-mobilizer-by-wallet-adress-or-id"},"jsonRequestBodyExample":{"name":"Rastra","phone":"12121212","wallet_address":"0x00000","email":"rastra@gmail.com","address":"nepal","govt_id":"99988777nepal","govt_id_image":"string","photo":"string","organization":"rumsan"}}')}}]);