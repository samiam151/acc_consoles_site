import * as React from "react";
import { useState } from "react";
import { Session } from "@/types/index";

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
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SessionBuilder({ data, setData, errors }) {
    const [isEditingSession, setIsEditingSession] = useState(false);
    const [tempSession, updateTempSession] = useState<Session>({
        hourOfDay: 0,
        dayOfWeekend: 3,
        timeMultiplier: 3,
        sessionType: "P",
        sessionDurationMinutes: 60
    });

    const getSessionType = (initial: string) => {
        if (initial === "P") return "Practice";
        if (initial === "Q") return "Qualifying";
        return "Race";
    }

    const resetTempSession = () => {
        setIsEditingSession(false);
        updateTempSession({
            hourOfDay: 0,
            dayOfWeekend: 3,
            timeMultiplier: 3,
            sessionType: "P",
            sessionDurationMinutes: 60
        })
    }

    const editTempSession = (index) => {
        updateTempSession({ ...data.sessions[index] })
        setIsEditingSession(true);
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

    const removeSession = (index: number) => {
        data.sessions.splice(index, 1);
        setData("sessions", data.sessions);
    }

    const saveEditedSession = () => {

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
                                <Button onClick={() => editTempSession(index)} className="w-full">Edit</Button>
                                <Button onClick={() => removeSession(index)} variant="destructive" className="w-full">Delete</Button>
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

                <div className="flex justify-center sm:justify-end">
                    {
                        isEditingSession
                        ? <Button className="mx-2" onClick={saveEditedSession}>Save Current Session</Button>
                        : <Button className="mx-2" onClick={addSessions}>Add Current Session</Button>
                    }
                    <Button className="mx-2" variant="destructive" onClick={resetTempSession}>Reset Session</Button>
                </div>
            </div>

            <hr className="my-10" />

        </>

    );
}
