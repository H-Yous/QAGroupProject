package qacinemas.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import qacinemas.enumpackage.DayTypes;
import qacinemas.enumpackage.ScreenType;
import qacinemas.enumpackage.ShowSlots;

@Document(collection = "Showing")
public class Showing {	
	private DayTypes day;
	private ScreenType screenType;
	private ShowSlots showSlot;
	private String movie;

	public Showing() {
	}
	public void setMovie(String movie) {
		this.movie = movie;
	}
	public String getMovie() {
		return movie;
	}
	public DayTypes getDay() {
		return day;
	}
	public void setDay(DayTypes day) {
		this.day = day;
	}
	public ScreenType getScreenType() {
		return screenType;
	}
	public void setScreenType(ScreenType screenType) {
		this.screenType = screenType;
	}
	public ShowSlots getShowSlot() {
		return showSlot;
	}
	public void setShowSlot(ShowSlots showSlot) {
		this.showSlot = showSlot;
	}
}
