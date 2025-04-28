import * as React from "react";

import { usePage } from "@inertiajs/react";
import { type SharedData } from '@/types';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function RaceEventForm({ setData, data, errors }) {
    const page = usePage<SharedData>();
    const tracks = page.props.tracks;

    const updateTrack = (value) => {
        if (value) {
            const selectedTrack = tracks.find(t => t.id == value)
            console.log("selected track", selectedTrack)
            setData("track", selectedTrack);
            setData("track_id", selectedTrack.id);
        }
    }

    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="track_id">Track</label>
                    <Select
                        name="track_id"
                        value={data.track.id}
                        onValueChange={updateTrack}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Track" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    tracks.map((track, i) => (
                                        <SelectItem
                                            key={i}
                                            value={ track.id }
                                        >{ track.track_name }</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-4">
                    <label htmlFor="sessionOverTimeSeconds">Session Over Time</label>
                    <input onChange={(e) => setData("sessionOverTimeSeconds", e.target.value)} value={data.sessionOverTimeSeconds} className="border p-2 rounded-sm" type="text" name="sessionOverTimeSeconds" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="ambientTemp">Ambient Temperature</label>
                    <input onChange={(e) => setData("ambientTemp", e.target.value)} value={data.ambientTemp} className="border p-2 rounded-sm" type="text" name="ambientTemp" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="cloudLevel">Cloud Level</label>
                    <input onChange={(e) => setData("cloudLevel", e.target.value)} value={data.cloudLevel} className="border p-2 rounded-sm" type="text" name="cloudLevel" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="rain">Rain</label>
                    <input onChange={(e) => setData("rain", e.target.value)} value={data.rain} className="border p-2 rounded-sm" type="text" name="rain" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="weatherRandomness">Weather Randomness</label>
                    <input onChange={(e) => setData("weatherRandomness", e.target.value)} value={data.weatherRandomness} className="border p-2 rounded-sm" type="text" name="weatherRandomness" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="configVersion">Config Version</label>
                    <input onChange={(e) => setData("configVersion", e.target.value)} value={data.configVersion} className="border p-2 rounded-sm" type="text" name="configVersion" placeholder="" />
                </div>
            </div>

        </div>
    );
}
