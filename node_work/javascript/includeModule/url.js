let myURL = new URL("http://example.org:8080/foo?username=choi#bar");

console.log(myURL.search);
console.log(myURL.searchParams.get("username"));
console.log(myURL.protocol);
console.log(myURL.pathname);
console.log(myURL.hash);
