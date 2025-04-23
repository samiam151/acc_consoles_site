import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SessionBuilder({ data, setData, errors }) {
    const [tempSession, updateTempSession] = useState<Session>({
        hourOfDay: 0,
        dayOfWeekend: 3,
        timeMultiplier: 3,
        sessionType: "P",
        sessionDurationMinutes: 60
    });

    type Session = {
        hourOfDay: number,
        dayOfWeekend: number,
        timeMultiplier: number,
        sessionType: string,
        sessionDurationMinutes: number
    }

    const getSessionType = (initial: string) => {
        if (initial === "P") return "Practice";
        if (initial === "Q") return "Qualifying";
        return "Race";
    }

    const resetTempSession = () => {
        updateTempSession({
            hourOfDay: 0,
            dayOfWeekend: 3,
            timeMultiplier: 3,
            sessionType: "P",
            sessionDurationMinutes: 60
        })
    }

    const addSessions = (e: Event) => {
        e.preventDefault();

        data.sessions.push(tempSession);
        setData("sessions", data.sessions)

        resetTempSession();
    }

    const setTempSession = (key: string, value: string) => {
        updateTempSession({
            ...tempSession,
            [key]: value
        })
    }

    const removeSession = () => {

    }

    return (
        <>
            <div className="grid md:grid-cols-4 gap-4 my-15">
                {
                    data.sessions.map((session: Session, index: number) => (
                        <Card className="" key={index}>
                            <CardHeader>
                                <CardTitle>{ getSessionType(session.sessionType) }</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-2 text-sm">Duration: { session.sessionDurationMinutes } minutes</p>
                                <p className="mb-2 text-sm">Time: { session.sessionDurationMinutes }00 Hours</p>
                                <p className="mb-2 text-sm">Day of the Week: { session.dayOfWeekend }</p>
                            </CardContent>
                            <CardFooter className="grid md:grid-cols-2 gap-2">
                                <Button className="w-full">Edit</Button>
                                <Button onClick={removeSession} className="w-full">Delete</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>

            <div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="grid gap-4">
                        <label htmlFor="hourOfDay">Time (Hour of Day)</label>
                        <input onChange={(e) => setTempSession("hourOfDay", e.target.value)} value={tempSession.hourOfDay} className="border p-2 rounded-sm" type="text" name="hourOfDay" placeholder="" />
                    </div>
                    <div className="grid gap-4">
                        <label htmlFor="dayOfWeekend">Day of the Week</label>
                        <input onChange={(e) => setTempSession("dayOfWeekend", e.target.value)} value={tempSession.dayOfWeekend} className="border p-2 rounded-sm" type="text" name="dayOfWeekend" placeholder="" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="grid gap-4">
                        <label htmlFor="timeMultiplier">Time Multiplier</label>
                        <input onChange={(e) => setTempSession("timeMultiplier", e.target.value)} value={tempSession.timeMultiplier} className="border p-2 rounded-sm" type="text" name="timeMultiplier" placeholder="" />
                    </div>
                    <div className="grid gap-4">
                        <label htmlFor="dayOfWeekend">Session Type</label>
                        <Select
                            name="sessionType"
                            value={tempSession.sessionType}
                            onValueChange={(value) => setTempSession("sessionType", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Track" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="P">Practice</SelectItem>
                                    <SelectItem value="Q">Qualifying</SelectItem>
                                    <SelectItem value="R">Race</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="grid gap-4">
                        <label htmlFor="sessionDurationMinutes">Session Duration (in minutes)</label>
                        <input onChange={(e) => setTempSession("sessionDurationMinutes", e.target.value)} value={tempSession.sessionDurationMinutes} className="border p-2 rounded-sm" type="text" name="sessionDurationMinutes" placeholder="" />
                    </div>
                </div>

                <div className="flex">
                    <Button className="mr-4" onClick={addSessions}>Add Session</Button>
                    <Button className="mr-4" variant="destructive" onClick={resetTempSession}>Reset Session</Button>
                </div>
            </div>

            <div className="my-6">{ JSON.stringify(tempSession, null, 6) }</div>

        </>

    );
}
