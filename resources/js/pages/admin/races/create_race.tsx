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
                        <Tabs defaultValue='configuration' className="w-full">
                            <TabsList className='w-full'>
                                <TabsTrigger value="configuration">Configuration</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                                <TabsTrigger value="event">Event</TabsTrigger>
                                <TabsTrigger value="eventRules">Event Rules</TabsTrigger>
                                <TabsTrigger value="assistRules">Assist Rules</TabsTrigger>
                            </TabsList>

                            <TabsContent value="configuration">
                                <RaceConfigurationForm setData={setData} data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="settings">
                                <RaceSettingsForm data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="event">
                                <RaceEventForm data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="eventRules">
                                <RaceEventRulesForm data={data} errors={errors} />
                            </TabsContent>
                            <TabsContent value="assistRules">
                                <RaceAssistRulesForm data={data} errors={errors} />
                            </TabsContent>
                        </Tabs>
                        <Button type="submit" disabled={processing}>Submit</Button>
                    </form>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
