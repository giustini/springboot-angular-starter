package com.giustini.sbastarter.services.rest;

import com.giustini.sbastarter.models.Car;
import com.giustini.sbastarter.services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.List;

@Component
@Path("/cars")
@Produces("application/json")
public class CarsResource {

    @Autowired
    CarsService carsService;

    @GET
    public Response getCars() {
        List<Car> cars = carsService.getCars();
        return Response.ok(cars).build();
    }

}
