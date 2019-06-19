package com.qa.cinemas.test;

import static org.junit.Assert.assertEquals;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

@Ignore
public class HomePageTest {
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
		Thread.sleep(5000);

		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div[2]/div/div/a[2]/span[1]"));

		we.click();
		Thread.sleep(4000);

		we = driver.findElement(By.xpath("//*[@id=\"basic-navbar-nav\"]/div/div[2]/a/a"));

		we.click();

//		action.sendKeys(Keys.PAGE_DOWN).perform();
		Thread.sleep(3000);

		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div[2]/div/div/div[1]/div/h5"));

		assertEquals("Dark Phoenix", we.getText());
	}
}