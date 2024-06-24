import Javascript from "../assets/stack/javascript-black.png";
import Typescript from "../assets/stack/typescript-black.png";
import React from "../assets/stack/react-black.png";
import Html from "../assets/stack/html-black.png";
import Css from "../assets/stack/css-black.png";
import Node from "../assets/stack/nodejs-black.png";
import Express from "../assets/stack/expres-black.png";
import Github from "../assets/stack/github.png";
import RestAPI from "../assets/stack/restapi-black.png";
import Mongo from "../assets/stack/mongodb-black.png";
import Sql from "../assets/stack/sql-black.png";
import Shopify from "../assets/stack/shopify-black.png";
import Python from "../assets/stack/python-black.png";
import Jasmine from "../assets/stack/jasmine-black.png";

function CurrentStack() {
  return (
    <section id="stack" className="w-full bg-white text-black h-screen">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center h-screen">
        <h1 className="pt-20 text-4xl font-normal">Current stack</h1>
        <div className="flex flex-wrap w-3/4 justify-center">
          <img src={Javascript} alt="" className="h-24 m-6" />
          <img src={Typescript} alt="" className="h-24 m-6" />
          <img src={React} alt="" className="h-24 m-6" />
          <img src={Html} alt="" className="h-24 m-6" />
          <img src={Css} alt="" className="h-24 m-6" />
          <img src={Node} alt="" className="h-24 m-6" />
          <img src={Express} alt="" className="h-24 m-6" />
          <img src={Github} alt="" className="h-24 m-6" />
          <img src={RestAPI} alt="" className="h-24 m-6" />
          <img src={Mongo} alt="" className="h-24 m-6" />
          <img src={Sql} alt="" className="h-24 m-6" />
          <img src={Shopify} alt="" className="h-24 m-6" />
          <img src={Python} alt="" className="h-24 m-6" />
          <img src={Jasmine} alt="" className="h-24 m-6" />
        </div>
        <h5 className="pb-20">BUT LEARNING NEVER STOPS!</h5>
      </div>
    </section>
  );
}

export default CurrentStack;
