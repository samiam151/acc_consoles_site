import * as React from "react";

import { Switch } from "@/components/ui/switch"

export default function RaceAssistRulesForm({ setData, data, errors }) {
    return (
        <div className="my-10">
                <div className="grid gap-4">
                    <label htmlFor="stabilityControlLevelMax">Stability Control Level Max</label>
                    <input onChange={(e) => setData("stabilityControlLevelMax", e.target.value)} value={data.stabilityControlLevelMax} className="border p-2 rounded-sm" type="text" name="stabilityControlLevelMax" placeholder="" />
                </div>
            <div className="grid md:grid-cols-3 my-12">


                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutosteer"
                        name="disableAutosteer"
                        onCheckedChange={(value) => setData("disableAutosteer", value ? 1 : 0)}
                        checked={data.disableAutosteer} />
                    <label className="ml-4" htmlFor="disableAutosteer">Disable Auto Steer</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutoLights"
                        name="disableAutoLights"
                        onCheckedChange={(value) => setData("disableAutoLights", value ? 1 : 0)}
                        checked={data.disableAutoLights} />
                    <label className="ml-4" htmlFor="disableAutoLights">Disable Auto Lights</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutoWiper"
                        name="disableAutoWiper"
                        onCheckedChange={(value) => setData("disableAutoWiper", value ? 1 : 0)}
                        checked={data.disableAutoWiper} />
                    <label className="ml-4" htmlFor="disableAutoWiper">Disable Auto Wiper</label>
                </div>
            </div>

            <div className="grid md:grid-cols-3 my-12">

                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutoEngineStart"
                        name="disableAutoEngineStart"
                        onCheckedChange={(value) => setData("disableAutoEngineStart", value ? 1 : 0)}
                        checked={data.disableAutoEngineStart} />
                    <label className="ml-4" htmlFor="disableAutoEngineStart">Disable Auto Engine Start</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutoPitLimiter"
                        name="disableAutoPitLimiter"
                        onCheckedChange={(value) => setData("disableAutoPitLimiter", value ? 1 : 0)}
                        checked={data.disableAutoPitLimiter} />
                    <label className="ml-4" htmlFor="disableAutoPitLimiter">Disable Auto Pit Limiter</label>
                </div>
                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutoGear"
                        name="disableAutoGear"
                        onCheckedChange={(value) => setData("disableAutoGear", value ? 1 : 0)}
                        checked={data.disableAutoGear} />
                    <label className="ml-4" htmlFor="disableAutoGear">Disable Auto Gear</label>
                </div>
            </div>

            <div className="grid md:grid-cols-3 my-12">
                <div className="flex flex-row items-center">
                    <Switch
                        id="disableAutoClutch"
                        name="disableAutoClutch"
                        onCheckedChange={(value) => setData("disableAutoClutch", value ? 1 : 0)}
                        checked={data.disableAutoClutch} />
                    <label className="ml-4" htmlFor="disableAutoClutch">Disable Auto Clutch</label>
                </div>
                <div className="flex flex-row items-center">
                    <Switch
                        id="disableIdealLine"
                        name="disableIdealLine"
                        onCheckedChange={(value) => setData("disableIdealLine", value ? 1 : 0)}
                        checked={data.disableIdealLine} />
                    <label className="ml-4" htmlFor="disableIdealLine">Disable Ideal Line</label>
                </div>
            </div>


        </div>
    );
}
