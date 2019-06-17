package com.qa.cinemas.test;

import static org.junit.Assert.assertEquals;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class FindUsTest {
	WebElement we;
	static WebDriver driver;
	String url = "http://localhost:3000/";
	static Actions action;
	
	@BeforeClass
	public static void setUp() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Admin\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		action= new Actions(driver);
	}
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		Thread.sleep(4000);
		driver.quit();
		
	}
	@Test
	public void mthod() throws InterruptedException {
		driver.get(url);
		we = driver.findElement(
				By.xpath("//*[@id=\"root\"]/div/div[4]/div/nav/div/div[1]/a/a"));
		we.click();
		
		we = driver.findElement(
				By.xpath("//*[@id=\"root\"]/div/div[2]"));
		
		assertEquals("QA Cinemas", we.getText());
		
//		WebElement we2 = driver.findElement(
//				By.xpath("//*[@id=\"map\"]/div/div/div[1]/div[3]/div/div[3]/div/img"));
//		we.click();
//		Thread.sleep(3000);
//		
//		assertEquals("QA Cinemas", we2.getText());
//		
//		
//	
//		
//		we = driver.findElement(
//				By.xpath("//*[@id=\"goButton\"]"));
//		we.click();
//		
//		
//		WebElement we2 = driver.findElement(
//				By.xpath("//*[@id=\"content\"]/div/div[1]/nav/div[1]/div[1]/div[1]/a/span[2]"));
//		assertEquals("Citymapper",we2.getText());
	}
}
