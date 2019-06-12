package com.qa.cinemas.test;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.DisplayName;
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


@ExtendWith(SpringExtension.class)
@DataMongoTest
@ContextConfiguration(classes = {QACinemasApp.class})
class TestingMovieDatabase {
	@DisplayName("given Movie to save"
            + " when save Movie using MongoDB template"
            + " then Movie is saved")
    @Test
    public void test(@Autowired MongoTemplate mongoTemplate) {
        DBObject movieRefVar = BasicDBObjectBuilder.start()
                .add("title", "Star Wars")
                .add("Id", "1")
                .get();
        
        mongoTemplate.save(movieRefVar, "Movies");
        assertThat(mongoTemplate.findAll(DBObject.class, "Movies")).extracting("title")
        .containsOnly("Star Wars");

	}

}
