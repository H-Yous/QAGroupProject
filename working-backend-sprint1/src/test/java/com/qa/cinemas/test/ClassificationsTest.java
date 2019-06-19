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
public class ClassificationsTest {
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

		we = driver.findElement(By.xpath("//*[@id=\"classificationsLink\"]/a/a"));

		we.click();
		Thread.sleep(4000);

		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/table[1]/h4/a"));

		assertEquals("British Board of Film Classifications", we.getText());
	}

}
