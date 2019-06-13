package com.qa.cinemas.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import com.qa.cinemas.domain.Booking;
import com.qa.cinemas.service.SequenceGeneratorService;

@Component
public class BookingModelListener extends AbstractMongoEventListener<Booking>  {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public BookingModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Booking> event) {
        if (event.getSource().getSalesID() < 1) {
            event.getSource().setSalesID(sequenceGenerator.generateSequence(Booking.SEQUENCE_NAME));
        }
    }
}