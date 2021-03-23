import React from 'react';
import logo from './logo.svg';
import './App.css';
import { registerCustomXPathFunction , evaluateXPath} from "fontoxpath";
import { sync } from 'slimdom-sax-parser';


const dummyXml = sync(`<xml>
<title>xpath.playground.fontoxml.com</title>
<summary>This is a learning tool for XML, XPath and XQuery.</summary>
<tips>
  <tip id='edit'>You can edit everything on the left</tip>
  <tip id='examples'>You can access more examples from a menu in the top right</tip>
  <tip id='permalink'>Another button there lets you share your test using an URL</tip>
</tips>
</xml>`)

registerCustomXPathFunction({localName: "my-function", namespaceURI: "test"}, 
[],
"item()", () => {
   return dummyXml;
})

function App() {

 evaluateXPath("Q{test}my-function()")


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
