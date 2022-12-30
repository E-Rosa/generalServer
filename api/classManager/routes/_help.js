/* 
    The routes are the controllers of the application.
    The route will receive a request that may or may not contain a body.
        If the request contains a body:
            The route will request the model to parse the data received into a proper class.
            This may be done directly in the route (in case it's a single object)
            or in an auxiliary function (returnFromDb) from the model (in case its an array of objects)
*/