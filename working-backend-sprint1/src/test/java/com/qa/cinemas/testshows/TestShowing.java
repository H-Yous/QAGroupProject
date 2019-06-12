package com.qa.cinemas.testshows;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DBObject;
import com.qa.cinemas.QACinemasApp;
import com.qa.cinemas.domain.Events;
import com.qa.cinemas.service.EventServiceImpl;

@ExtendWith(SpringExtension.class)
@DataMongoTest
@ContextConfiguration(classes = {QACinemasApp.class})
public class TestShowing {
    @Test
    public void test(@Autowired MongoTemplate mongoTemplate) {
        DBObject showingRef = BasicDBObjectBuilder.start()
                .add("day", "MONDAY")
                .add("screentype", "LARGESCREEN")
                .add("showslot", "FIRSTSLOT")
                .add("movie", "Avengers")
                .get();
        mongoTemplate.save(showingRef, "Showing");
        
        Events show;
        EventServiceImpl showingServiceImpl;
	}
}
