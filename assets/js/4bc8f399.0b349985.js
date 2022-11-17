"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[2909],{389834:function(e){e.exports=JSON.parse('{"tags":["beneficiaries"],"summary":"Distribute token to beneficiary","operationId":"postApiV1BeneficiariesIdToken","security":[{"access_token":[]}],"parameters":[{"schema":{"type":"string"},"description":"Resource identifier","name":"id","in":"path","required":true}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"beneficiary_id":{"type":"string","description":"Beneficiary ID"},"project_id":{"type":"string","description":"Project ID"},"amount":{"type":"number","description":"Amount of token to be distributed"},"txhash":{"type":"string","description":"Blockchain transaction hash"}},"required":["beneficiary_id","project_id","amount","txhash"]}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"beneficiary_id":{"type":"string","description":"Beneficiary ID"},"project_id":{"type":"string","description":"Project ID"},"amount":{"type":"number","description":"Amount of token to be distributed"},"txhash":{"type":"string","description":"Blockchain transaction hash"}},"required":["beneficiary_id","project_id","amount","txhash"]}}}},"405":{"description":"Invalid input"}},"postman":{"name":"Distribute token to beneficiary","description":{"type":"text/plain"},"url":{"path":["beneficiaries",":id","token"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Resource identifier","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"\\"schema type not provided\\""}},"description":"Distribute token to beneficiary","method":"post","path":"/beneficiaries/{id}/token","hashId":"distribute-token-to-beneficiary","servers":[{"url":"https://agency-stage.rahat.io/api/v1"}],"permalink":"/api/distribute-token-to-beneficiary","previous":{"title":"List token distributions to beneficiary","permalink":"/api/list-token-distributions-to-beneficiary"},"next":{"title":"List all the financial institutions","permalink":"/api/list-all-the-financial-institutions"},"jsonRequestBodyExample":{"beneficiary_id":"string","project_id":"string","amount":0,"txhash":"string"}}')}}]);