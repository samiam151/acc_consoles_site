import * as React from 'react';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useForm, usePage, Link } from '@inertiajs/react'
import { type SharedData } from '@/types';
import { Badge } from "@/components/ui/badge"


import AppLayout from "@/layouts/app-layout";
import AdminLayout from "@/layouts/admin/layout";

import { Button } from '@/components/ui/button';

import RaceAssistRulesForm from "./components/RaceAssistRulesForm";
import RaceConfigurationForm from "./components/RaceConfigurationForm";
import RaceEventForm from "./components/RaceEventForm";
import RaceEventRulesForm from "./components/RaceEventRules";
import RaceSettingsForm from "./components/RaceSettingsForm";

import {
    configurationFields,
    assistFields,
    eventFields,
    eventRulesFields,
    settingsFields
} from "./form-defaults/filled-defaults";
import { SessionBuilder } from './components/inputs/session-builder';

export default function CreateRaceForm() {
    const page = usePage<SharedData>();

    const race = page.props.race;
    const raceIsNew = race == undefined;

    const defaultData = race ?? {
        ...configurationFields,
        ...assistFields,
        ...eventFields,
        ...eventRulesFields,
        ...settingsFields,
    }

    const { data, setData, post, processing, errors, isDirty, transform } = useForm(defaultData);

    const submitRaceForm = (e: Event) => {
        e.preventDefault();

        transform(data => ({
            ...data,
            registerToLobby: Number(data.registerToLobby),
        }))
        console.log(data)

        post(route("store.races"), {
            preserveScroll: true,
        })
    }

    return (
        <>
            <AppLayout>
                <AdminLayout>
                    <form className='space-y-6' onSubmit={(e: Event) => e.preventDefault()}>
                        {isDirty && <Badge variant="destructive" className='w-full py-2'>There are unsaved form changes.</Badge>}
                        <Tabs defaultValue='settings' className="mb-0">
                            <TabsList className='flex-wrap sm:w-full'>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                                <TabsTrigger value="event">Event</TabsTrigger>
                                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                                <TabsTrigger value="eventRules">Event Rules</TabsTrigger>
                                <TabsTrigger value="assistRules">Assist Rules</TabsTrigger>
                                <TabsTrigger value="configuration">Configuration</TabsTrigger>
                            </TabsList>

                            <TabsContent value="configuration">
                                <RaceConfigurationForm setData={setData} data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="settings">
                                <RaceSettingsForm setData={setData} data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="event">
                                <RaceEventForm setData={setData} data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="sessions">
                                <SessionBuilder setData={setData} data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="eventRules">
                                <RaceEventRulesForm setData={setData} data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="assistRules">
                                <RaceAssistRulesForm setData={setData} data={data} errors={errors} />
                            </TabsContent>
                        </Tabs>

                        <Button disabled={processing} onClick={(e: Event) => submitRaceForm(e)}>{ raceIsNew ? "Create" : "Update" }</Button>
                        <Button variant="destructive" disabled={processing} className='mx-4'>
                            <Link href={route("show.races")}>Cancel</Link>
                        </Button>

                        <hr />

                        <code>{ JSON.stringify(data, null, 6) }</code>
                        <hr />
                        <code>{ JSON.stringify(data.track, null, 6) }</code>
                    </form>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
