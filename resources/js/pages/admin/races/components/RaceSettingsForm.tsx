import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"


export default function RaceSettingsForm({ setData, data, errors }) {
    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="serverName">Server Name</label>
                    <input onChange={(e) => setData("serverName", e.target.value)} value={data.serverName} className="border p-2 rounded-sm" type="text" name="serverName" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="adminPassword">Admin Password</label>
                    <input onChange={(e) => setData("adminPassword", e.target.value)} value={data.adminPassword} className="border p-2 rounded-sm" type="text" name="adminPassword" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="carGroup">Car Group</label>
                    <Select
                        name="carGroup"
                        value={data.carGroup}
                        onValueChange={(value) => setData("carGroup", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Car Group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="FreeForAll">Open</SelectItem>
                                <SelectItem value="GT3">GT3</SelectItem>
                                <SelectItem value="GT4">GT4</SelectItem>
                                <SelectItem value="GT2">GT2</SelectItem>
                                <SelectItem value="GTC">GTC</SelectItem>
                                <SelectItem value="TCX">TCX</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-4">
                    <label htmlFor="trackMedalsRequirement">Track Medals Requirement</label>
                    <input onChange={(e) => setData("trackMedalsRequirement", e.target.value)} value={data.trackMedalsRequirement} className="border p-2 rounded-sm" type="text" name="trackMedalsRequirement" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="safetyRatingRequirement">Safety Rating Requirement</label>
                    <input onChange={(e) => setData("safetyRatingRequirement", e.target.value)} value={data.safetyRatingRequirement} className="border p-2 rounded-sm" type="text" name="safetyRatingRequirement" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="racecraftRatingRequirement">Racecraft Rating Requirement</label>
                    <input onChange={(e) => setData("racecraftRatingRequirement", e.target.value)} value={data.racecraftRatingRequirement} className="border p-2 rounded-sm" type="text" name="racecraftRatingRequirement" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setData("password", e.target.value)} value={data.password} className="border p-2 rounded-sm" type="text" name="password" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="spectatorPassword">Spectator Password</label>
                    <input onChange={(e) => setData("spectatorPassword", e.target.value)} value={data.spectatorPassword} className="border p-2 rounded-sm" type="text" name="spectatorPassword" placeholder="" />
                </div>
            </div>

            <div className="grid gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="maxCarSlots">Maximum Car Slots</label>
                    <input onChange={(e) => setData("maxCarSlots", e.target.value)} value={data.maxCarSlots} className="border p-2 rounded-sm" type="text" name="maxCarSlots" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-3 my-12">
                <div className="flex flex-row items-center">
                    <Switch
                        id="dumpLeaderboards"
                        name="dumpLeaderboards"
                        onCheckedChange={(value) => setData("dumpLeaderboards", value ? 1 : 0)}
                        checked={data.dumpLeaderboards} />
                    <label className="ml-4" htmlFor="dumpLeaderboards">Dump Leaderboards</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="isRaceLocked"
                        name="isRaceLocked"
                        onCheckedChange={(value) => setData("isRaceLocked", value)}
                        checked={data.isRaceLocked} />
                    <label className="ml-4" htmlFor="dumpLeaderboards">Is Race Locked</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="randomizeTrackWhenEmpty"
                        name="randomizeTrackWhenEmpty"
                        onCheckedChange={(value) => setData("randomizeTrackWhenEmpty", value ? 1 : 0)}
                        checked={data.randomizeTrackWhenEmpty} />
                    <label className="ml-4" htmlFor="randomizeTrackWhenEmpty">Randomize Track When Empty</label>
                </div>


            </div>

            <div className="grid md:grid-cols-3 my-12">
                <div className="flex flex-row items-center">
                    <Switch
                        id="allowAutoDQ"
                        name="allowAutoDQ"
                        onCheckedChange={(value) => setData("allowAutoDQ", value ? 1 : 0)}
                        checked={data.allowAutoDQ} />
                    <label className="ml-4" htmlFor="allowAutoDQ">Allow Auto DQ</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="shortFormationLap"
                        name="shortFormationLap"
                        onCheckedChange={(value) => setData("shortFormationLap", value ? 1 : 0)}
                        checked={data.shortFormationLap} />
                    <label className="ml-4" htmlFor="shortFormationLap">Short Formation Lap</label>
                </div>

                <div className="flex flex-row items-center">
                    <Switch
                        id="dumpEntryList"
                        name="dumpEntryList"
                        onCheckedChange={(value) => setData("dumpEntryList", value ? 1 : 0)}
                        checked={data.dumpEntryList} />
                    <label className="ml-4" htmlFor="dumpEntryList">Dump Entry List</label>
                </div>
            </div>

            <div className="mb-6">
                <div className="grid gap-4">
                    <label htmlFor="centralEntryListPath">Central Entry List Path</label>
                    <input onChange={(e) => setData("centralEntryListPath", e.target.value)} value={data.centralEntryListPath} className="border p-2 rounded-sm" type="text" name="centralEntryListPath" placeholder="" />
                </div>
            </div>


            <div className="mb-6">
            <div className="grid gap-4">
                    <label htmlFor="carGroup">Select Formation Lap Type</label>
                    <Select
                        name="formationLapType"
                        value={data.formationLapType}
                        onValueChange={(value) => setData("formationLapType", value)}
                    >
                        <SelectTrigger className="w-[330px]">
                            <SelectValue placeholder="Select Formation Lap Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="3">Default Formation Lap with UI</SelectItem>
                                <SelectItem value="0">Old Limiter Lap</SelectItem>
                                <SelectItem value="1">Free</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

        </div>
    );
}
