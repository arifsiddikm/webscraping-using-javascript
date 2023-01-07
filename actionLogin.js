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
  // proses pengisian form login dan klik tombol login 
  await page.click("#pengguna_login_username_email");     
  await page.keyboard.type("testing");      
  await page.click("#pengguna_login_password");       
  await page.keyboard.type("123");  
  await page.click("#btn_login_cvm");       
  // pake await sleep atau seperti setTimeout, untuk menunggu proses loading 
  // tunggu selama 2detik
  await sleep(2000);
  // untuk membuktikan hasil login, kita coba screenshot
  await page.screenshot({ path: "ssActionLogin.png", fullPage: false });       
  process.exit(1);
}
// Running process
(async () => {
  await playTest("https://cvmilenial.com/login/");                
  process.exit(1);
})();   