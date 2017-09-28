package com.giustini.sbastarter.services;

import com.giustini.sbastarter.models.Car;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarsService {

    private final static Logger LOGGER = LoggerFactory.getLogger(CarsService.class);

    public List<Car> getCars() {
        LOGGER.info("Cars service");
        List<Car> cars = new ArrayList<>();
        cars.add(new Car("12DRP03", 2012, "VW", "Orange"));
        cars.add(new Car("45DFG99", 2011, "Audi", "Black"));
        cars.add(new Car("34BBB55", 2005, "Renault", "Gray"));
        cars.add(new Car("65GGF01", 2003, "BMW", "Blue"));
        cars.add(new Car("77RRR77", 1995, "Mercedes", "Orange"));
        cars.add(new Car("99DDR03", 2005, "Volvo", "Black"));
        cars.add(new Car("31FFT22", 2012, "Honda", "Yellow"));
        cars.add(new Car("54GGV95", 2013, "Jaguar", "Orange"));
        return cars;
    }

}
