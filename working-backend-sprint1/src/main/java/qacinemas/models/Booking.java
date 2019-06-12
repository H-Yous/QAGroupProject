package qacinemas.models;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Bookings")
public class Booking {

	@Id
	private String id;

	@NotBlank
	private String day;
	
	@NotBlank
	private String screen;
	
	@NotBlank
	private String timeslot;
	
	@NotBlank
	private String seat;
	
	@NotBlank
	private String customeID;
	
	@NotBlank
	private String price;
	
	public Booking() {
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getScreen() {
		return screen;
	}

	public void setScreen(String screen) {
		this.screen = screen;
	}

	public String getTimeslot() {
		return timeslot;
	}

	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}

	public String getSeat() {
		return seat;
	}

	public void setSeat(String seat) {
		this.seat = seat;
	}

	public String getCustomeID() {
		return customeID;
	}

	public void setCustomeID(String customeID) {
		this.customeID = customeID;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	
}
