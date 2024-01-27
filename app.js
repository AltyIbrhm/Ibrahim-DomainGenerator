let pronoun = ['the', 'our','your','us','Parcel'];
let adj = ['great', 'big','Shield','Ibrhm'];
let noun = ['jogger', 'racoon','Avangers','Altay'];

let length = pronoun.length;
let domainends='.com';
for(let i = 0; i< length; i++){

let domainname = pronoun[i]+adj[i]+noun[i];
console.log(domainname+domainends);
}


