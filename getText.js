/*
Author : Arif Siddik M.
Domisili : Cilegon, Banten 
Web : http://arifsiddikm.com/
Instagram : http://instagram.com/arifsiddikm/
LinkedIn : http://linkedin.com/in/arif-siddik-muharam/
GitHub : http://github.com/arifsiddikm/
Saweria : http://saweria.co/arifsiddikm
Tujuan Projek : WebScraping getText untuk mengambil Teks/Elemen HTML pada suatu Situs menggunakan JavaScript.
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
  // process get text 
  const ambilTeks = await page.evaluate(() => {    
    // queryselector, ambil isi html dengan class tag html .pdescapaitucvmilenial,
    // bisa diganti dengan #id, dan tag html lainnya, 
    const isiTeks = document.querySelector(".pdescapaitucvmilenial");     
    return "Isi teksnya yaitu : "+isiTeks.innerHTML;    
  });
  // proses strip html dulu agar tag html tidak ngikut 
  let ambilTeksNew = ambilTeks.replace(/<[^>]*>?/gm, '');
  // show log text 
  console.log(ambilTeksNew);

  // await page.click("#login_username");             
  // await page.keyboard.type("arif");     
  // await page.click("#login_password");      
  // await page.keyboard.type("T3kn0l0g1!");          
  // await page.click(".ui-button.ui-corner-all.ui-widget");       
  // await sleep(3500);            
  // "files/ss2/"+          
  // await page.screenshot({ path: datenowlengkap3+".png", fullPage: true });       
  process.exit(1);
}
// Running process
(async () => {
  await playTest("https://cvmilenial.com/");                
  process.exit(1);
})();   