import * as React from 'react';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useForm } from '@inertiajs/react'

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
} from "./form-defaults/defaults";
import { SessionBuilder } from './components/inputs/session-builder';

export default function CreateRaceForm() {

    const { data, setData, post, processing, errors } = useForm({
        ...configurationFields,
        ...assistFields,
        ...eventFields,
        ...eventRulesFields,
        ...settingsFields
    });


    const submitRaceForm = (e: Event) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <>
            <AppLayout>
                <AdminLayout>
                    <form className='space-y-6' onSubmit={submitRaceForm}>
                        <Tabs defaultValue='configuration' className="mb-0">
                            <TabsList className='md:w-full'>
                                <TabsTrigger value="configuration">Configuration</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                                <TabsTrigger value="event">Event</TabsTrigger>
                                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                                <TabsTrigger value="eventRules">Event Rules</TabsTrigger>
                                <TabsTrigger value="assistRules">Assist Rules</TabsTrigger>
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
                        <Button type="submit" disabled={processing}>Submit</Button>

                        <hr />

                        <code>{ JSON.stringify(data, null, 6) }</code>
                    </form>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
