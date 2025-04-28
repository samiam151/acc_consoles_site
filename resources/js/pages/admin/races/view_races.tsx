import * as React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AppLayout from "@/layouts/app-layout";
import AdminLayout from "@/layouts/admin/layout";

import { Button } from '@/components/ui/button';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function RacesView() {
    const { races } = usePage().props;

    return (
        <>
            <AppLayout>
                <AdminLayout>
                    <Head title="View Races" />

                    <div className="sm:flex sm:justify-between">
                        <h2 className='mb-4'>Manage Races</h2>
                        <Button>
                            <Link href={route("create.races")}>Create A Race</Link>
                        </Button>
                    </div>

                    {
                        <Table>
                            <TableCaption>A list of your recent races</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead className="w-[100px]">Server</TableHead>
                                    <TableHead>Track</TableHead>
                                    <TableHead>Car Group</TableHead>
                                    <TableHead># of Sessions</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    races.map((race) => (
                                        <TableRow key={race.id}>
                                            <TableCell>{ race.id }</TableCell>
                                            <TableCell>{ race.serverName }</TableCell>
                                            <TableCell className="font-medium">{race.track.track_name}</TableCell>
                                            <TableCell>{ race.carGroup }</TableCell>
                                            <TableCell>{ race.sessions.length }</TableCell>
                                            <TableCell className="text-right">
                                                <Button className='mr-2'>
                                                    <Link href={route("edit.races", race.id)}>Edit</Link>
                                                </Button>

                                                    <Link href={route("destroy.races", race.id)} as="button" method='post'>Delete</Link>

                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    }

                </AdminLayout>
            </AppLayout>
        </>
    );
}
