package com.giustini.sbastarter.services;

import com.giustini.sbastarter.models.Dummy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class DummyService {

    private final static Logger LOGGER = LoggerFactory.getLogger(DummyService.class);

    public Dummy getDummy() {
        LOGGER.info("Dummy service");
        return new Dummy();
    }

}
