/*
    Creates classes that represent tables in the database as well as
    specific elements of the view. Also is responsible to define
    the functions that transform data from the database into an instance
    of those classes. Usually one to three functions are required:
        1. In case the data comes as a single object:
            no function is needed, the controller will create the instance using the Class import.
        2. In case the data comes in an array of objects
            a function that loops around the array received and instantiates each instance
*/