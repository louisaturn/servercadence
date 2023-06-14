<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class ServerModel extends Database
{
    public function getServers()
    {
        return $this->executeStatement("SELECT * FROM Server ORDER BY id")->fetch_all(MYSQLI_ASSOC);
    }

    public function createServer($instance)
    {  
        return $this->executeStatement("INSERT INTO Server (
            serverName,
            isRunning,
            isMonitored,
            isWebProcessRunning,
            CPUUsage,
            memoryUsage,
            memory,
            diskSpace,
            diskUsage,
            runningTime,
            CPUCapacity
        )
        VALUES (
            ?,?,?,?,?,?,?,?,?,?,?
        )", ["siiiddddddd",
        [
            $instance->serverName,
            $instance->isRunning,
            $instance->isMonitored,
            $instance->isWebProcessRunning,
            $instance->CPUUsage,
            $instance->memoryUsage,
            $instance->memory,
            $instance->diskSpace,
            $instance->diskUsage,
            $instance->runningTime,
            $instance->CPUCapacity
        ]]);
    }

public function updateServer($id, $instance)
    {
        return $this->executeStatement("UPDATE Server SET
            serverName = ?,
            isRunning = ?,
            isMonitored = ?,
            isWebProcessRunning = ?,
            CPUUsage = ?,
            memoryUsage = ?,
            memory = ?,
            diskSpace = ?,
            diskUsage = ?,
            runningTime = ?,
            CPUCapacity = ?
        WHERE id = ?", 
        ["siiidddddddi",
        [
        $instance->serverName,
        $instance->isRunning,
        $instance->isMonitored,
        $instance->isWebProcessRunning,
        $instance->CPUUsage,
        $instance->memoryUsage,
        $instance->memory,
        $instance->diskSpace,
        $instance->diskUsage,
        $instance->runningTime,
        $instance->CPUCapacity,
        $id]
    ]);
    }

    public function deleteServer($id)
    {
        return $this->executeStatement("DELETE FROM Server WHERE id = ?", ["i", [$id]]);
    }

    public function getServerById($id)
    {
        return $this->executeStatement("SELECT * FROM Server WHERE id = ?", ["i", [$id]])->fetch_all(MYSQLI_ASSOC);
    }
}

// ?: prevents query injection - 
// the information of the user "becomes a parameter"

//CRUD methods: (query, params)
// params = 
// param[0] (the initials of the type of attributes)
// param[1] (the attributes)