package com.giustini.sbastarter.services.rest;

import com.giustini.sbastarter.models.Dummy;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.giustini.sbastarter.services.DummyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Path("/dummy")
@Produces("application/json")
public class DummyResource {

    @Autowired
    DummyService dummyService;

    @GET
    public Response ok() {
        Dummy dummy = dummyService.getDummy();
        return Response.ok(dummy).build();
    }

}
