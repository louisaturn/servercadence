import React from "react";
import "./ServerForm.css";

export default function ServerForm(){
    return (
        <div>
            <form>
                <label>Name
                    <input type="text" name="name"  />
                </label>
                <label>Running
                    <input type="checkbox" name="isRunning"/>
                </label>
                <label>Monitored
                    <input type="checkbox" name="isMonitored"/>
                </label>
                <label>Web Process Running
                    <input type="checkbox" name="isWebProcessRunning"/>
                </label>
                <label>CPU Usage (%)
                    <input type="number" min="0" name="CPUUsage"/>
                </label>
                <label>Memory Usage (%)
                    <input type="number" min="0" name="dickUsage"/>
                </label>
                <label>Total Memory (GB)
                    <input type="number" min="0" name="memoryUsage"/>
                </label>
                <label>Total Disk Space (GB)
                    <input type="number" min="0" name="diskSpace"/>
                </label>
                <label>Running Time (ms)
                    <input type="number" min="0" name="runningTime"/>
                </label>
                <label>CPU Capacity (GB)
                    <input type="number" min="0" name="CPUCapacity"/>
                </label>

            </form>
        </div>
      );
}