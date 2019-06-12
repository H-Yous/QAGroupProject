package qacinemas.service;

import java.util.List;

import qacinemas.models.Booking;

public interface BookingService {
	
	List<Booking> findAll();
	Booking createBooking(Booking booking);

}
