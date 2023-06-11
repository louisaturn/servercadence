<?php
// this module uses mysqli: conection between php and database
// and got the function that executes the statements
class Database
{
    protected $connection = null;
    public function __construct()
    {
        try {
            $this->connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
    	
            if ( mysqli_connect_errno()) {
                throw new Exception("Could not connect to database.");   
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());   
        }			
    }

    public function executeStatement($query = "" , $params = [])
    {
        try {
            // prepare statement before call it, avoiding query injection
            $stmt = $this->connection->prepare( $query );
            if($stmt === false) {
                throw New Exception("Unable to do prepared statement: " . $query);
            }
            if( $params ) {
                $stmt->bind_param($params[0], ...$params[1]);
            }
            $stmt->execute();
            $result = $stmt->get_result();				
            $stmt->close();
            return $result;

        } catch(Exception $e) {
            print($e->getMessage());
            throw New Exception( $e->getMessage() );
        }	
    }
}
