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

export default function RaceEventRulesForm({ setData, data, errors }) {
    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="track">Qualitying Standing Type</label>
                    <Select
                        name="qualifyStandingType"
                        value={data.qualifyStandingType.toString()}
                        onValueChange={(value) => setData("qualifyStandingType", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Track" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="1">Fastest Lap</SelectItem>
                                <SelectItem value="2">Average Lap</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="driverStintTimeSec">Driver Stint Time (in seconds)</label>
                    <input onChange={(e) => setData("driverStintTimeSec", e.target.value)} value={data.driverStintTimeSec} className="border p-2 rounded-sm" type="text" name="driverStintTimeSec" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="mandatoryPitstopCount">Mandatory Pit Stops</label>
                    <input onChange={(e) => setData("mandatoryPitstopCount", e.target.value)} value={data.mandatoryPitstopCount} className="border p-2 rounded-sm" type="text" name="mandatoryPitstopCount" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="maxTotalDrivingTime">Maximum Total Driving Time</label>
                    <input onChange={(e) => setData("maxTotalDrivingTime", e.target.value)} value={data.maxTotalDrivingTime} className="border p-2 rounded-sm" type="text" name="maxTotalDrivingTime" placeholder="" />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="grid gap-4">
                    <label htmlFor="pitWindowLengthSec">Pit Window Length (in seconds)</label>
                    <input onChange={(e) => setData("pitWindowLengthSec", e.target.value)} value={data.pitWindowLengthSec} className="border p-2 rounded-sm" type="text" name="pitWindowLengthSec" placeholder="" />
                </div>
                <div className="grid gap-4">
                    <label htmlFor="maxDriversCount">Maximum Drviers Count</label>
                    <input onChange={(e) => setData("maxDriversCount", e.target.value)} value={data.maxDriversCount} className="border p-2 rounded-sm" type="text" name="maxDriversCount" placeholder="" />
                </div>
                <div className="flex flex-row items-center">
                    <div className="grid gap-4">
                        <label htmlFor="tyreSetCount">Tire Set Count</label>
                        <input onChange={(e) => setData("tyreSetCount", e.target.value)} value={data.tyreSetCount} className="border p-2 rounded-sm" type="text" name="tyreSetCount" placeholder="" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-row items-center">
                    <Switch
                        id="isRefuellingAllowedInRace"
                        name="isRefuellingAllowedInRace"
                        onCheckedChange={(value) => setData("isRefuellingAllowedInRace", value ? 1 : 0)}
                        checked={data.isRefuellingAllowedInRace} />
                    <label className="ml-4" htmlFor="isRefuellingAllowedInRace">Is Refuelling Allowed</label>
                </div>
                <div className="flex flex-row items-center">
                    <Switch
                        id="isRefuellingTimeFixed"
                        name="isRefuellingTimeFixed"
                        onCheckedChange={(value) => setData("isRefuellingTimeFixed", value ? 1 : 0)}
                        checked={data.isRefuellingTimeFixed} />
                    <label className="ml-4" htmlFor="isRefuellingTimeFixed">Is Refuelling Time Fixed</label>
                </div>
                <div className="flex flex-row items-center">
                    <Switch
                        id="isMandatoryPitstopRefuellingRequired"
                        name="isMandatoryPitstopRefuellingRequired"
                        onCheckedChange={(value) => setData("isMandatoryPitstopRefuellingRequired", value ? 1 : 0)}
                        checked={data.isMandatoryPitstopRefuellingRequired} />
                    <label className="ml-4" htmlFor="isMandatoryPitstopRefuellingRequired">Is Refuelling Required</label>
                </div>
                <div className="flex flex-row items-center">
                    <Switch
                        id="isMandatoryPitstopTyreChangeRequired"
                        name="isMandatoryPitstopTyreChangeRequired"
                        onCheckedChange={(value) => setData("isMandatoryPitstopTyreChangeRequired", value ? 1 : 0)}
                        checked={data.isMandatoryPitstopTyreChangeRequired} />
                    <label className="ml-4" htmlFor="isMandatoryPitstopTyreChangeRequired">Is Tyre Change Required</label>
                </div>
                <div className="flex flex-row items-center">
                    <Switch
                        id="isMandatoryPitstopSwapDriverRequired"
                        name="isMandatoryPitstopSwapDriverRequired"
                        onCheckedChange={(value) => setData("isMandatoryPitstopSwapDriverRequired", value ? 1 : 0)}
                        checked={data.isMandatoryPitstopSwapDriverRequired} />
                    <label className="ml-4" htmlFor="isMandatoryPitstopSwapDriverRequired">Is Pit Stop Driver Swap Required</label>
                </div>
            </div>
        </div>
    );
}
