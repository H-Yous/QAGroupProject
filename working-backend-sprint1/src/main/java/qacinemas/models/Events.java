package qacinemas.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import qacinemas.enumpackage.DayTypes;
import qacinemas.enumpackage.ScreenType;
import qacinemas.enumpackage.ShowSlots;

@Document(collection = "Events")
public class Events {	
	

 //   @Transient
  //  public static final String SEQUENCE_NAME = "users_sequence";
	
	
	@Id
	private String id;

	@NotBlank
	private String movie;
	@NotBlank
	private String chart;
	@NotBlank
	private String eventKey;

	public Events() {
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMovie() {
		return movie;
	}

	public void setMovie(String movie) {
		this.movie = movie;
	}

	public String getChart() {
		return chart;
	}

	public void setChart(String chart) {
		this.chart = chart;
	}

	public String getEventKey() {
		return eventKey;
	}

	public void setEventKey(String eventKey) {
		this.eventKey = eventKey;
	}
}
