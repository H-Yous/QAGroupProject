package com.qa.cinemas.service;

import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.qa.cinemas.domain.DatabaseSequence;

@Service
public class generateShowSequence {
//	public long generateShowSequence(String seqName) {
//	    DatabaseSequence counter = MongoOperations.findAndModify(query(where("_id").is(seqName)),
//	    	      new Update().inc("seq",1), options().returnNew(true).upsert(true),
//	    	      DatabaseSequence.class);
//	}

}