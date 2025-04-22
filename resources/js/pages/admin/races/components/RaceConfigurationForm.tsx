import * as React from "react";

export default function RaceConfigurationForm({ data, errors, setData }) {


    return (
        <>
            <div className="grid gap-2 mb-6">
                <label htmlFor="udpPort">UDP Port</label>
                <input onChange={(e) => setData("udpPort", e.target.value)} value={data.udpPort} className="border p-2 rounded-sm" type="text" name="udpPort" placeholder="UDP Port" />
            </div>

            <div className="grid gap-2">
                <label htmlFor="tcpPort">TCP Port</label>
                <input onChange={(e) => setData("tcpPort", e.target.value)} value={data.tcpPort} className="border p-2 rounded-sm" type="text" name="tcpPort" placeholder="TCP Port" />
            </div>
        </>
    );
}
