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


public class ContactUsTest {
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
		action = new Actions(driver);
	}
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		Thread.sleep(4000);
		driver.quit();

	}
	
	
	@Test
	public void mthodTest() throws InterruptedException {
		driver.get(url);
		we = driver.findElement(
				By.xpath("//*[@id=\"root\"]/div/div[4]/div/nav/div/div[2]/a/a"));
		we.click();
		
		we = driver.findElement(
				By.xpath("//*[@id=\"enquirerEmail\"]"));
		we.sendKeys("Alizahid.Alizada@academytrainee.com");
				
		we = driver.findElement(
				By.xpath("//*[@id=\"feedback\"]"));
		we.sendKeys("Testing");
		
		we.submit();
		
		we = driver.findElement(
				By.xpath("//*[@id=\"root\"]/div/div[2]"));

		assertEquals("QA Cinemas",we.getText());
	}

}
