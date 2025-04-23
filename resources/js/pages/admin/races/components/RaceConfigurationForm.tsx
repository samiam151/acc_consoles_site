import * as React from "react";

export default function RaceConfigurationForm({ data, errors, setData }) {


    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-4 mb-6">
                    <label htmlFor="udpPort">UDP Port</label>
                    <input onChange={(e) => setData("udpPort", e.target.value)} value={data.udpPort} className="border p-2 rounded-sm" type="text" name="udpPort" placeholder="" />
                </div>

                <div className="grid gap-4 mb-6">
                    <label htmlFor="tcpPort">TCP Port</label>
                    <input onChange={(e) => setData("tcpPort", e.target.value)} value={data.tcpPort} className="border p-2 rounded-sm" type="text" name="tcpPort" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-4 mb-6">
                    <label htmlFor="maxConnections">Maximum Connections</label>
                    <input onChange={(e) => setData("maxConnections", e.target.value)} value={data.maxConnections} className="border p-2 rounded-sm" type="text" name="udpPort" placeholder="" />
                </div>

                <div className="grid gap-4 mb-6">
                    <label htmlFor="lanDiscovery">LAN Discovery</label>
                    <input onChange={(e) => setData("lanDiscovery", e.target.value)} value={data.lanDiscovery} className="border p-2 rounded-sm" type="text" name="lanDiscovery" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-4 mb-6">
                    <label htmlFor="registerToLobby">Register to Lobby</label>
                    <input onChange={(e) => setData("registerToLobby", e.target.value)} value={data.registerToLobby} className="border p-2 rounded-sm" type="text" name="registerToLobby" placeholder="" />
                </div>

                <div className="grid gap-4 mb-6">
                    <label htmlFor="configVersion">Config Version</label>
                    <input onChange={(e) => setData("configVersion", e.target.value)} value={data.configVersion} className="border p-2 rounded-sm" type="text" name="configVersion" placeholder="" />
                </div>
            </div>
        </div>
    );
}
