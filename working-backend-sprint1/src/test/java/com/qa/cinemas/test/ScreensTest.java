package com.qa.cinemas.test;

import static org.junit.Assert.assertEquals;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ScreensTest {
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
		Thread.sleep(2500);
		driver.quit();

	}
	
	@Test
	public void mthodTest() throws InterruptedException {
		driver.get(url);
		Thread.sleep(3000);
		
		we = driver.findElement(
				By.xpath("//*[@id=\"basic-navbar-nav\"]/div/div[5]/a/a"));
		we.click();
		Thread.sleep(5000);
		action.sendKeys(Keys.PAGE_DOWN).perform();
		Thread.sleep(5000);
		action.sendKeys(Keys.PAGE_DOWN).perform();
		Thread.sleep(2000);
		action.sendKeys(Keys.PAGE_UP).perform();
		
		action.sendKeys(Keys.PAGE_UP).perform();
		
		we = driver.findElement(
				By.xpath("//*[@id=\"root\"]/div/div/div[2]/div[2]/div/table/tr/td/h2"));
		assertEquals("Seating Options",we.getText());
		
	}
	
}
