/*
Author : Arif Siddik M.
Domisili : Cilegon, Banten 
Web : http://arifsiddikm.com/
Instagram : http://instagram.com/arifsiddikm/
LinkedIn : http://linkedin.com/in/arif-siddik-muharam/
GitHub : http://github.com/arifsiddikm/
Saweria : http://saweria.co/arifsiddikm
Tujuan Projek : WebScraping pageScreenshot untuk men-screenshot laman suatu website pada suatu Situs menggunakan JavaScript.
*/
const puppeteer = require("puppeteer");     
const path = require('path');     
const express = require('express');                
const app = express();    
const sleep = require('util').promisify(setTimeout); 
// for startBrowser
async function startBrowser() {   
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],   
    timeout: 10000, 
  });
  const page = await browser.newPage(); 
  return {browser, page};
}
async function playTest(url) {
  // If running using root
  // const browser = await puppeteer.launch({ 
  //   args: ['--no-sandbox'],  
  //   timeout: 10000,  
  // });                        
  const {browser, page} = await startBrowser();     
  page.setViewport({width: 1366, height: 768});                             
  await page.goto(url);      
  // process screenshot
  // Ini screenshot penuh halaman
  // await page.screenshot({ path: "fileName.png", fullPage: true });
  // Ini tidak screenshot penuh halaman
  await page.screenshot({ path: "fileName.png", fullPage: false });       
  // await page.screenshot({ path: "fileName.png" });       
  process.exit(1);
}
// Running process
(async () => {
  await playTest("https://cvmilenial.com/");                
  process.exit(1);
})();